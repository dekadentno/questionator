<template>
  <div class="topic-details">
    <template v-if="isError">
      Topic doesn't exist. You will be redirrected shortly.
    </template>
    <template v-if="!isError && currentTopic">
      <h2>
        {{ currentTopic.name }}
        <font-awesome-icon class="copy-url" title="Click to topic url" icon="copy" @click="copyToClipboard" />
        <font-awesome-icon class="copy-url" title="Click to show QR code" icon="qrcode" @click="generateQr" />
      </h2>
      <div v-for="(q, key) in mappedQuestions" :key="key" class="question-card">
        <div class="question-card__content">
          <p>{{ q.content }}</p>
          <LikeIcon :key="key" :selected="q.isUpvoted" @click="!q.isUpvoted && upvoteQuestion(q)" />
        </div>
        <span class="question-card__votes">
          {{ q.votes }} votes
        </span>
      </div>
      <QButton type="levitate" @click="openQuestionModal">
        <font-awesome-icon title="Post new question" icon="pen-alt" />
      </QButton>
    </template>
  </div>
</template>

<script>
import QRCode from 'qrcode'
// import LikeIcon from '../../components/LikeIcon'

export default {
  name: 'QTopicDetails',
  components: {
    // LikeIcon
  },
  data () {
    return {
      question: '',
      currentTopic: null,
      isError: false
    }
  },
  computed: {
    mappedQuestions () {
      if (!this.currentTopic || !this.currentTopic.questions) { return [] }
      const questions = this.currentTopic.questions
      const mapped = []
      const upvotedQuestions = JSON.parse(localStorage.getItem(this.$route.params.id))
      for (const q in questions) {
        mapped.push({
          id: q,
          content: questions[q].content,
          votes: questions[q].votes,
          isUpvoted: upvotedQuestions.includes(q)
        })
      }
      return mapped.sort((a, b) => b.votes - a.votes)
    }
  },
  mounted () {
    this.fetchQuestions()
    if (!localStorage.getItem(this.$route.params.id)) {
      localStorage.setItem(this.$route.params.id, JSON.stringify([]))
    }
  },
  methods: {
    fetchQuestions () {
      const topicId = this.$route.params.id
      if (!topicId) { return }
      this.$fireDb.ref('topics/' + topicId).on('value', (snapshot) => {
        if (!snapshot || !snapshot.val()) {
          this.isError = true
          setTimeout(() => {
            this.$router.push('/')
          }, 3000)
        } else {
          this.currentTopic = snapshot.val()
        }
      })
    },
    generateQr () {
      const opts = {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        quality: 0.3,
        margin: 1,
        color: {
          dark: '#222831',
          light: '#FFF'
        }
      }

      QRCode.toDataURL(window.location.href, opts, (err, qr) => {
        if (err) { throw err }
        this.$swal({
          showCloseButton: true,
          imageUrl: qr,
          imageWidth: 300,
          imageHeight: 300,
          imageAlt: 'QR Code'
        })
      })
    },
    copyToClipboard () {
      const text = window.location.href
      if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData('Text', text)
      } else if (document.queryCommandSupported && document.queryCommandSupported(
        'copy')) {
        const textarea = document.createElement('textarea')
        textarea.textContent = text
        textarea.style.position = 'fixed' // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea)
        textarea.select()
        try {
          const cpy = document.execCommand('copy')
          this.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            title: 'Success',
            icon: 'success',
            text: 'Copied!'
          })
          return cpy
        } catch (err) {
          this.$swal({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            title: 'Error',
            icon: 'error',
            text: 'Copy to clipboard failed'
          })
          return false
        } finally {
          document.body.removeChild(textarea)
        }
      }
    },
    upvoteQuestion (question) {
      // set upvoted question id into local storage
      // settin to LS before updating in firebase is a hacky way to implement this, but I yet didn't find a better solution
      const upvoted = JSON.parse(localStorage.getItem(this.$route.params.id))
      upvoted.push(question.id)
      localStorage.setItem(this.$route.params.id, JSON.stringify([...new Set(upvoted)]))
      this.$fireDb.ref('topics/' + this.$route.params.id + '/questions/' + question.id).update({
        votes: question.votes + 1
      })
    },
    async openQuestionModal () {
      const result = await this.$swal({
        title: 'Enter your question',
        html: '<br/><input type="text" ref="questionRef" class="text-input question-input"/>',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false
      })
      const question = document.getElementsByClassName('question-input')[0].value // getting input value like this because we can't use v-model
      if (result.value && question) { // if clicked OK
        const db = this.$fireDb.ref('topics/' + this.$route.params.id)
        const storesRef = db.child('questions')
        const newStoreRef = storesRef.push()
        newStoreRef.set({
          content: question,
          votes: 0
        })
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          title: 'Success',
          icon: 'success',
          text: 'Question posted!'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.topic-details {
  padding: 30px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  height: 100%;

  h2 {
    font-size: 28px;
    margin: 50px 0;
  }

  .question-card {
    padding: 20px 30px;
    border: none;
    font-size: 16px;
    line-height: 1.4;
    border-radius: 4px;
    width: 70%;
    border: 1px solid #29a19c;
    margin: 30px;
    position: relative;
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        max-width: 88%;
        word-break: break-all;
      }
    }
    &__votes {
      position: absolute;
      right: 4px;
      bottom: 2px;

    }
  }
}

.copy-url {
  cursor: pointer;
}
</style>

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
          <LikeIcon :key="key" @click="upvoteQuestion(q)" />
        </div>
        <span class="question-card__votes">
          {{ q.votes }} votes
        </span>
      </div>
      <button title="Post a question" class="btn btn--levitate" @click="openQuestionModal">
        <font-awesome-icon title="Post new question" icon="pen-alt" />
      </button>
    </template>
  </div>
</template>

<script>
import QRCode from 'qrcode'
import LikeIcon from '../../components/LikeIcon'

export default {
  name: 'QTopicDetails',
  components: {
    LikeIcon
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
      for (const q in questions) {
        mapped.push({
          id: q,
          content: questions[q].content,
          votes: questions[q].votes
        })
      }

      return mapped.sort((a, b) => b.votes - a.votes)
    }
  },
  mounted () {
    this.fetchQuestions()
  },
  methods: {
    fetchQuestions () {
      const topicId = this.$route.params.id
      if (!topicId) { return }
      this.$fireDb.ref('topics/' + topicId).on('value', (snapshot) => {
        this.currentTopic = null
        if (!snapshot.val()) {
          this.isError = true
          setTimeout(() => {
            this.$router.push('/')
          }, 3000)
          return
        }
        this.currentTopic = snapshot.val()
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
          // html: '<img src="' + url + '" />'
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
          return document.execCommand('copy') // Security exception may be thrown by some browsers.
        } catch (err) {
          this.sayHello('Copy to clipboard failed.', err) // TOAST
          return false
        } finally {
          document.body.removeChild(textarea)
        }
      }
    },
    async upvoteQuestion (q) {
      await this.$fireDb.ref('topics/' + this.$route.params.id + '/questions/' + q.id).update({
        votes: q.votes + 1
      })
    },
    async openQuestionModal () {
      const q = await prompt('Please enter your question', '')
      if (q) {
        const db = this.$fireDb.ref('topics/' + this.$route.params.id)
        const storesRef = db.child('questions')
        const newStoreRef = storesRef.push()
        newStoreRef.set({
          content: q,
          votes: 0
        })
        this.$swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          type: 'success',
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

.btn--levitate {
  border: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  background-color: #29a19c;
  color: #222831;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 16px;
  right: 16px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.copy-url {
  cursor: pointer;
}
</style>

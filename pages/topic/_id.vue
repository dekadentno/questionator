<template>
  <div class="topic-details">
    <template v-if="isError">
      Topic doesn't exist. You will be redirrected shortly.
    </template>
    <template v-if="!isError && currentTopic">
      <h2>{{ currentTopic.name }}</h2>
      <div v-for="(q, key) in currentTopic.questions" :key="key" class="question-card">
        <p>{{ q.content }}</p>
        <LikeIcon @click="handleClick" />
      </div>
      <button title="Post a question" class="btn btn--levitate" @click="openQuestionModal">
        <span>+</span>
      </button>
    </template>
  </div>
</template>

<script>
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
  async mounted () {
    const topicId = this.$route.params.id
    if (!topicId) { return }
    const db = this.$fireDb.ref('topics').child(topicId)
    const response = await db.once('value')
    if (!response.val()) {
      this.isError = true
      setTimeout(() => {
        this.$router.push('/')
      }, 3000)
      return
    }
    const topics = Object.values(response.val())
    if (topics.length > 0) {
      this.currentTopic = response.val()
    }
  },
  // topic -M3CxHFdMyTOKOU4aKsl
  methods: {
    handleClick () {},
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
        alert('Your question has been posted successfully. It will need a few moments to appear.')
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
    // max-width: 620px;
    // min-width: 400px;
    border: 1px solid #29a19c;
    margin: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      max-width: 88%;
      word-break: break-all;
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
</style>

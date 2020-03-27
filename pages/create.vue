<template>
  <div class="create-topic base-wrap">
    <input ref="topic" v-model="topic" placeholder="Enter your topic name" type="text" class="text-input">
    <div class="actions">
      <QButton :disabled="!topic" @click="createTopic">
        create topic
      </QButton>
      <QButton type="secondary" @click="goHome">
        go back
      </QButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QCreate',
  data () {
    return {
      topic: '',
      isLoading: false
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    async createTopic () {
      this.isLoading = true
      const dbRef = this.$fireDb.ref().child('topics')
      const newStoreRef = dbRef.push()
      await newStoreRef.set({
        name: this.topic,
        questions: []
      })
      this.$router.push('/topic/' + newStoreRef.key)
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.create-topic {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .actions {
    margin-top: 20px;

    .btn {
      margin: 0 10px;
    }
  }
}

</style>

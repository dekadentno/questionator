<template>
  <div class="create-topic">
    <input ref="topic" v-model="topic" placeholder="Enter your topic name" type="text" class="text-input">
    <div class="actions">
      <button :disabled="!topic" class="btn btn--primary" @click="createTopic">
        create topic
      </button>
      <button class="btn btn--secondary" @click="goHome">
        back
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QCreate',
  data () {
    return {
      topic: ''
    }
  },
  methods: {
    goHome () {
      this.$router.push('/')
    },
    async createTopic () {
      const dbRef = this.$fireDb.ref().child('topics')
      const newStoreRef = dbRef.push()
      await newStoreRef.set({
        name: this.topic,
        questions: []
      })
      this.$router.push('/topic/' + newStoreRef.key)
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

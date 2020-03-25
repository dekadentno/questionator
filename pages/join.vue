<template>
  <div class="join-topic">
    <input
      ref="topic"
      v-model="topicId"
      placeholder="Enter your topic ID"
      type="text"
      class="text-input"
    >
    <div class="actions">
      <button class="btn btn--primary" @click="joinTopic">
        join topic
      </button>
      <button class="btn btn--secondary" @click="goHome">
        back
      </button>
    </div>
  </div>
</template>

<script>
/**
 * check if topic exists
 * if exists, redirect to topicdetails with that id
 */
export default {
  name: 'QJoin',
  data () {
    return {
      topicId: ''
    }
  },
  methods: {
    joinTopic () {
      this.$router.push('/topic/' + this.topicId)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.join-topic {
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

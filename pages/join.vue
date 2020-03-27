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
      <QButton :disabled="!topicId" @click="joinTopic">
        join topic
      </QButton>
      <QButton type="secondary" @click="goHome">
        go back
      </QButton>
    </div>
  </div>
</template>

<script>
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

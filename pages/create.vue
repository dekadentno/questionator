<template>
  <div class="create-topic">
    <input ref="topic" v-model="topic" placeholder="Topic name..." type="text" class="text-input">
    <div class="actions">
      <button class="btn btn--primary" @click="createTopic">
        create topic
      </button>
      <button class="btn btn--secondary" @click="goHome">
        back
      </button>
    </div>
  </div>
</template>

<script>
/**
 * check if already exists
 * if exists, tell user so he can choose:
 * pick a new name or
 * make topic with random id
 */
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
    createTopic () {
      // console.log('creating topic!')
      // get name from v model
      // create new topic in db
      // route change to topic details with new db item id
      this.$router.push('/topic/1') // hardcoded
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

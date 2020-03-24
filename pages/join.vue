<template>
  <div>
    join a topic
    <input v-model="topicId" type="text">
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
  }
}
</script>

<style lang="scss" scoped>

</style>

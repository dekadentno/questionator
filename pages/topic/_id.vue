<template>
  <div class="topic-details">
    <h2>Topic name goes here</h2>
    <div class="question-card">
      <p>What the gear heck is this? This is a long question.</p>
      <LikeIcon @click="handleClick" />
    </div>
    <div class="question-card">
      <p>ksskfhskdfh kshdf kshf ksdhf kshdfkhskjfhskdfhskdfhksjfdhkshdfksj.</p>
      <LikeIcon selected />
    </div>
    <div class="question-card">
      <p>What the gear heck is this? This is a long sdffs What the gear heck is this? This is a long sdffs What the gear heck is this? This is a long sdffs What the gear heck is this? This is a long sdffs What the gear heck is this? This is a long sdffs What the gear heck is this? This is a long sdffs What the gear heck is this? This is a long sdffs What the gear heck is this? This is a long sdffs</p>
      <LikeIcon />
    </div>
  </div>
</template>

<script>
import LikeIcon from '../../components/LikeIcon'
export default {
  name: 'QTopicDetails',
  components: {
    LikeIcon
  },
  methods: {
    handleClick () {}
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
</style>

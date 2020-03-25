<template>
  <div class="container">
    <!-- what do you wanna do? -->
    <!-- https://codepen.io/rafaelavlucas/pen/rQWJYG -->
    <div class="cards-container">
      <div class="card" @click="startTopic">
        <p class="card__title">
          Create a new topic
        </p>
        <p class="card__desc">
          Create a new topic so that people can raise their questions.
        </p>
      </div>
      <div class="card" @click="joinTopic">
        <p class="card__title">
          Join a topic
        </p>
        <p class="card__desc">
          Join an existing topic where you can ask and upvote questions.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QIndex',
  mounted () {
    // GET TOPIC BY ID
    // const db = this.$fireDb.ref('topics').child('-LoC2FhOQiDedkV1BS9Y')
    // FETCH ALL TOPICS
    // const db = this.$fireDb.ref('topics')
    // db.once('value').then((snapshot) => {
    //   const topics = Object.values(snapshot.val())
    //   console.log('topics: ', topics);
    // })
    // CREATE NEW TOPIC
    // const rootRef = this.$fireDb.ref()
    // const storesRef = rootRef.child('topics')
    // const newStoreRef = storesRef.push()
    // newStoreRef.set({
    //   name: 'novi test2',
    //   questions: []
    // })
    // console.log('---> ', newStoreRef) // dobivanje keya od kreiranog topica
    // ADD QUESTION TO TOPIC BY ID
    // const db = this.$fireDb.ref('topics/-M3CxHFdMyTOKOU4aKsl')
    // const rootRef = this.$fireDb.ref()
    // const storesRef = db.child('questions')
    // console.log('storerev', storesRef)
    // const newStoreRef = storesRef.push()
    // newStoreRef.set({
    //   content: 'najdraza boja?',
    //   votes: 0
    // })
    // GET NUMBER OF VOTES (for increment)
    // const db = this.$fireDb.ref('topics/-M3CxHFdMyTOKOU4aKsl/questions/-M3DBN5CRtNT73G_z8Lu')
    // db.once('value').then((snapshot) => {
    //   const obj = snapshot.val()
    //   // console.log('num of votes: ', obj.votes)
    // })
  },
  methods: {
    joinTopic () {
      this.$router.push('/join')
    },
    startTopic () {
      this.$router.push('/create')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.cards-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  width: 100%;
  max-width: 300px;
  min-width: 200px;
  height: 250px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 1px solid #29a19c;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;

  &__title {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-top: 30px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  &__desc {
    width: 80%;
    margin: 0 auto;
    font-size: 13px;
    text-align: center;
    margin-top: 20px;
    color: white;
    font-weight: 200;
    letter-spacing: 2px;
    line-height: 1.8;
    opacity: 0;
    max-height: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    height: 270px;
    .card__desc {
      transition: all 0.3s ease;
      opacity: 1;
      max-height: 40px;
    }
  }
}
</style>

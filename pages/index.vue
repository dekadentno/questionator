<template>
  <div class="container base-wrap">
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
  mounted () {},
  methods: {
    joinTopic () {
      this.$router.push('/join')
    },
    startTopic () {
      this.$router.push('/create')
    }
  },
  head () {
    return {
      title: 'Questionator',
      meta: [
        { name: 'google-site-verification', content: 'yom_ABTiOikF2MO2jhh4zlbJl7ezmrYNdNxEoibVOaU' },
        { hid: 'description', name: 'description', content: 'Questionator is and app for opening topics and asking questions' }
      ],
      noscript: [
        { innerHTML: 'Body No Scripts', body: true }
      ]
    }
  },
  transition: 'bounce'
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
  flex-direction: row;

  @include mobile {
    flex-direction: column;
  }
}
.card {
  width: 100%;
  max-width: 280px;
  min-width: 180px;
  height: 230px;
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

  &:hover {
    height: 270px;
    .card__desc {
      transition: all 0.3s ease;
      opacity: 1;
      max-height: 40px;
    }
  }

  @include mobile {
    height: 250px;
    .card__desc {
      transition: all 0.3s ease;
      opacity: 1;
      max-height: 40px;
    }
  }

  @include tablet {
    height: 250px;
    .card__desc {
      transition: all 0.3s ease;
      opacity: 1;
      max-height: 40px;
    }
  }

  @include desktop {
    height: 230px;
    .card__desc {
      opacity: 0;
      max-height: 0;
    }
  }

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
}
</style>

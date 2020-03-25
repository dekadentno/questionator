<template>
  <div class="heart-holder" @click="handleClick">
    <div data-icon-hook class="like-icon" :class="{ 'start' : isSelected }">
      <svg class="heart-icon" width="60" height="55" viewBox="0 0 90 85">
        <path
          class="love"
          fill="none"
          stroke="#29a19c"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M45.137,23.041c4.912-24.596,40.457-27.775,42.128-0.435c1.398,22.88-21.333,40.717-42.128,50.522 M45.137,23.041 C40.225-1.555,5.057-4.734,3.387,22.606c-1.398,22.88,20.955,40.717,41.75,50.522"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      isSelected: false
    }
  },
  mounted () {
    this.isSelected = this.selected
  },
  methods: {
    handleClick () {
      this.isSelected = !this.isSelected
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>

// https://codepen.io/jonitrythall/pen/myEpeV

.heart-icon {
  width: 24px;
  // margin-top: 80px;
  transform-origin: bottom;
  cursor: pointer;
  // transition: fill 1s 1s ease;
}

.love {
  transition: stroke 1s 1s ease, all 2s ease;
}

.start .heart-icon {
  animation: heart-beat 1s forwards;
    .love {
      stroke: #29a19c;
      fill: #29a19c;
    }
}

@keyframes heart-beat {
  25% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>

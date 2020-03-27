<template>
  <button class="btn" :class="computedClass" :disabled="disabled || loading" @click="handleClick">
    <template v-if="loading">
      Loading...
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script>
export default {
  name: 'QButton',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: () => {
        return false
      }
    },
    type: {
      type: String,
      required: false,
      default: () => {
        return 'primary'
      }
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => {
        return false
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    computedClass () {
      return {
        disabled: this.disabled,
        'btn--primary': this.type === 'primary',
        'btn--secondary': this.type === 'secondary',
        'btn--levitate': this.type === 'levitate'
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 24px 30px;
  border: none;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  border-radius: 4px;
  text-transform: uppercase;
  width: 220px;

  &--primary {
    color: #222831;
    background: #29a19c;

    &:hover {
      background: #a3f7bf;
      transition: background 200ms;
    }
  }

  &--secondary {
    color: #29a19c;
    border: 1px solid #29a19c;
    // border-radius: 2px;
    background: transparent;

    &:hover {
      background: #a3f7bf;
      color: #222831;
      transition: background 200ms, color 200ms;
    }
  }
  &--levitate {
    border: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    background-color: #29a19c;
    color: #222831;
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>

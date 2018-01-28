<template>
  <transition name="fade">
    <div class="yu__dialog--wrap" v-if="isVisible" ref="modal" >
      <div class="yu__mask" @click="maskClose"></div>
      <div class="yu__dialog" :style="{'z-index':zIndex}">
        <div class="yu__dialog--hd">
          <strong class="yu__dialog--title" v-if="dialogTitle">{{dialogTitle}}</strong>
        </div>
        <div class="yu__dialog--bd">
          <slot></slot>
        </div>
        <div class="yu__dialog--ft">
          <div v-if="type&&type=='alert'">
            <yu-button @click="confirm" :style="{'color':color}"  long>确定</yu-button>
          </div>
          <div v-else-if="type&&type=='confirm'">
          <div class="yu__btn--group" >
            <yu-button @click="close">取消</yu-button>
            <yu-button @click="confirm" :style="{'color':color}">确定</yu-button>
          </div>
          </div>
          <div v-else>
            <yu-button @click="confirm" :style="{'color':color}"  long>确定</yu-button>
          </div>
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import yuButton from '../button'
export default {
  name: 'yu-modal',
  components: {
    yuButton
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    visible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    active () {
      this.isVisible = true
    },
    close () {
      this.$emit('close')
    },
    confirm () {
      this.$emit('confirm')
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      }
    }
  },
  watch: {
    visible (val) {
      this.isVisible = val
      // if (!val && this.isLoading) {
      //   this.isLoading = false
      // }
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.body.appendChild(this.$el)
      if (this.isVisible) {
        this.active()
      }
    })
  },
  beforeDestroy () {
    this.$el.remove()
  }
}
</script>

<style scoped lang="scss">

</style>

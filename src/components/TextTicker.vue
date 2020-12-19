<template lang="pug">
  canvas(
    ref="ticker"
    :width="width * this.scale"
    :height="height * this.scale"
  )
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 150,
    },
    fontSize: {
      type: Number,
      default: 48,
    },
    rows: {
      type: Number,
      default: 10,
    },
    scale: {
      type: Number,
      default: 2,
    },
    speed: {
      type: Number,
      default: 50,
    },
    color: {
      type: String,
      default: 'rgba(0,0,0,0.5)',
    },
  },
  data() {
    return {
      globalx: 0.0,
      global2: -100.0,
      interval: -1,
    }
  },
  mounted() {
    this.start()
  },
  beforeDestroy() {
    window.clearInterval(this.interval)
  },
  methods: {
    move() {
      const label = this.$slots.default[0].text
      const canvas = this.$refs.ticker
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, this.width * this.scale, this.height * this.scale)
      ctx.scale(this.scale, this.scale)
      ctx.fillStyle = this.color
      ctx.font = `${this.fontSize}px/2 sans-serif`
      ctx.textBaseline = 'top'
      if (this.globalx < ctx.measureText(label).width * -1) {
        this.globalx = 0
      }
      if (this.global2 >= 0.0) {
        this.global2 = -ctx.measureText(label).width
      }
      let n = 0
      while (n < this.rows) {
        ctx.fillText(
          label + label,
          this.globalx + 20 * n,
          this.fontSize * 2 * n
        )
        ctx.fillText(
          label + label,
          this.global2 + -20 * n,
          this.fontSize * 2 * n + this.fontSize
        )
        n++
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0)

      this.globalx += -0.1
      this.global2 += 0.1
      const timeout = window.setTimeout(() => {
        window.clearTimeout(timeout)
        window.requestAnimationFrame(() => {
          this.move()
        })
      }, this.speed)
    },
    start() {
      this.move()
    },
  },
})
</script>

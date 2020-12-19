<template lang="pug">
  canvas(
    ref="ticker"
    :width="width * this.scale"
    :height="height * this.scale"
  )
</template>
<script>
import Vue from 'vue'
import { start } from './canvas-render.js'
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
  mounted() {
    const canvas = this.$refs.ticker
    if (canvas) {
      start(canvas, this.$slots.default[0].text)
    } else {
      console.error('Failed to start Canvas Render, missing `ticker` in $refs')
    }
  },
})
</script>

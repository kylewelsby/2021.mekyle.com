<template lang="pug">
  div.w-full.h-full
    div.overflow-hidden
      TextTicker.ticker(
        :fontSize="32"
        :width="1440"
        :height="500"
        :rows="20"
        :speed="25"
        color="rgba(0,0,0,.1)"
      ) {{ formattedText }}
</template>

<script lang="ts">
import Vue from 'vue'
import TextTicker from './TextTicker.vue'
export default Vue.extend({
  components: {
    TextTicker,
  },
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      repeat: 20,
      rows: 20,
    }
  },
  computed: {
    formattedText() {
      return this.skills.join(' | ') + ' | '
    },
  },
})
</script>
<style scoped>
.ticker {
  transform: rotate(-10deg) scale(0.75);
  transform-origin: -40% 75%;
}
</style>

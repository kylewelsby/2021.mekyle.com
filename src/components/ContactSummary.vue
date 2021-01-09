<template lang="pug">
  g-link(
    :href="contact.href"
    class="contact block relative rounded-2xl bg-gray-800 hover:bg-blue-900 transition-colors text-white px-6 text-center h-32 md:h-48 flex flex-col items-center justify-center overflow-hidden"
  )
    div(
      class="z-10 w-12 h-12 place-self-center flex items-center justiry-center"
    )
      g-image(
        :src="contact.icon"
        width="32"
        height="32"
        fit="contain"
        imageWidths="32,64"
        class="contact-image fill-current"
        :alt="contact.title"
      )
    div(
      class="absolute z-0 top-0 left-0 right-0 bottom-0"
    )
      TextTicker.ticker(
        :fontSize="12"
        :width="250"
        :height="250"
        :rows="20"
        :speed="15"
        :scale="4"
        color="rgba(255,255,255,0.12)"
      ) {{ text }}
</template>
<script lang="ts">
import Vue from 'vue'
import TextTicker from './TextTicker.vue'

export default Vue.extend({
  components: {
    TextTicker,
  },
  props: {
    contact: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    text() {
      let count = 50
      let str = []
      let i = 0
      while (i < count) {
        str.push(this.contact.title)
        i++
      }
      return str.join(' | ') + ' | '
    },
  },
})
</script>

<style scoped>
.contact {
  text-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.25);
}
.contact-image {
  filter: drop-shadow(0 0.1rem 0.5rem rgba(0, 0, 0, 0.25));
}
.svg-inline--fa {
  @apply fill-current;
}
.ticker {
  transform: rotate(-10deg) scale(1);
  transform-origin: 0% 100%;
}
</style>

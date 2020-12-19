<template lang="pug">
  div(
    class="client grid grid-rows-3 relative rounded-2xl bg-black text-white px-6 text-center h-64 flex flex-col items-center justify-center overflow-hidden"
    :style="{'background-color': client.bgColor}"
  )
    div.relative.z-30.place-self-center.self-end
      h4.text-2xl.font-bold.mb-2 {{ client.title }}
    div(
      class="w-12 h-12 place-self-center flex items-center justiry-center"
    )
      g-image(
        v-if="client.icon"
        :src="client.icon"
        width="32"
        height="32"
        fit="contain"
        imageWidths="32,64"
        class="client-image"
      )
    div(
      class="text-xs self-start"
      v-html="excerpt"
    )
    span(
      class="absolute z-0 top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-10"
    )
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    client: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    excerpt() {
      return this.client.content.split('<!--more-->')[0]
    },
  },
})
</script>
<style scoped>
.client {
  text-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.25);
}
.client-image {
  filter: drop-shadow(0 0.1rem 0.5rem rgba(0, 0, 0, 0.25));
}
</style>

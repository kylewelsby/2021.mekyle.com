<template lang="pug">
  g-link(
    :to="{}"
    :href="article.canonical_url"
    class="block relative rounded-2xl bg-black text-white px-6 text-center h-32 md:h-56 flex flex-col items-center justify-center overflow-hidden"
  )
    div.relative.z-30
      h4.sr-only.text-2xl.font-bold.mb-2 {{ article.title }}
    div(
      class="absolute z-0 top-0 left-0 h-full w-full bg-cover"
      :style="{ backgroundImage: `url(${article.cover_image})` }"
    )
    span(
      class="absolute z-10 top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-20"
    )
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    article: {
      type: Object,
      default: () => {},
    },
  },
})
</script>

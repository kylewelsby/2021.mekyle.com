<template lang="pug">
  div(
    class="mt-10"
  )
    div(
      class="md:max-w-6xl md:mx-auto text-white"
    )
      h3(
        class="relative z-20 text-9xl font-extrabold"
      ) Articles.
      div(
        class="-mt-6 relative z-10 grid grid-cols-2 gap-4"
      )
        ArticleSummary(
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        )
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

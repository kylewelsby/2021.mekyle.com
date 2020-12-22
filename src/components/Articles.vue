<template lang="pug">
  div(
    class="mt-10"
  )
    div(
      class="md:max-w-6xl md:mx-auto text-white"
    )
      h3(
        class="relative z-20 text-4xl md:text-9xl font-extrabold"
      ) Articles.
      div(
        class="-mt-4 md:-mt-6 relative z-10 grid md:grid-cols-2 gap-4"
      )
        ArticleSummary(
          v-for="edge in articles"
          :key="edge.id"
          :article="edge.node"
        )
</template>
<script lang="ts">
import Vue from 'vue'
import ArticleSummary from './ArticleSummary.vue'
export default Vue.extend({
  components: {
    ArticleSummary,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

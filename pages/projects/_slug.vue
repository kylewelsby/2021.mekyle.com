<template lang="pug">
  div
    | {{ doc.title }}
    nuxt-content(
      :document="doc"
    )
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content, params }) {
    const doc = await $content('projects', params.slug).fetch()
    return {
      doc,
    }
  },
})
</script>

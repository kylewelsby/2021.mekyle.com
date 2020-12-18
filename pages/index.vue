<template lang="pug">
  div
    Hero(
      :skills="page.skills"
    ) {{ page.description }}
    CodersRank.relative.z-30
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const page = await $content('/index').fetch()
    return {
      page,
    }
  },
})
</script>

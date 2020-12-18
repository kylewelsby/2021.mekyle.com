<template lang="pug">
  div
    Hero(
      :skills="page.skills"
    ) {{ page.description }}
    CodersRank.relative.z-30
    Projects(
      :projects="projects"
    )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const page = await $content('/index').fetch()
    const projects = await $content('projects', { deep: true })
      .sortBy('date', 'desc')
      .fetch()
    return {
      page,
      projects,
    }
  },
})
</script>

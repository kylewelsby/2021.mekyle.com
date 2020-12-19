<template lang="pug">
  div
    Hero(
      :skills="page.skills"
    ) {{ page.description }}
    CodersRank.relative.z-30
    Projects(
      :projects="projects"
    )
    Articles(
      :articles="articles"
    )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content, $config }) {
    const page = await $content('/index').fetch()
    const projects = await $content('projects', { deep: true })
      .sortBy('date', 'desc')
      .fetch()

    const articles = await fetch('/dev-to/articles/me/published?per_page=4', {
      method: 'GET',
      headers: {
        'api-key': $config.devToApiKey,
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
    return {
      page,
      projects,
      articles,
    }
  },
})
</script>

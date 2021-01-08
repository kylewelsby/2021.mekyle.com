<template lang="pug">
  div(
    class="mt-10"
  )
    div(
      class="md:max-w-6xl md:mx-auto text-white"
    )
      h3(
        class="relative z-20 text-4xl md:text-9xl font-extrabold"
      ) Projects.
      div(
        class="-mt-3 md:-mt-6 relative z-10 grid md:grid-cols-2 gap-4"
      )
        ProjectSummary(
          v-for="edge in projects"
          :key="edge.id"
          :project="edge.node"
        )
        MoreProjects
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectSummary from './ProjectSummary.vue'
import MoreProjects from './MoreProjects.vue'
export default Vue.extend({
  components: {
    ProjectSummary,
    MoreProjects,
  },
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

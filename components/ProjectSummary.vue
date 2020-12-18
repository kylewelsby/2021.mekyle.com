<template lang="pug">
  nuxt-link(
    :to="project.href ? {} : project.path"
    :href="externalUrl"
    class="block relative rounded-2xl bg-black text-white px-6 text-center h-80 flex flex-col items-center justify-center"
    :style="{'background-color': project.bgColor}"
  )
    div.relative.z-20.flex.flex-col.items-center
      h4.text-2xl.font-bold.mb-2 {{ project.title }}
      div(
        class="h-28 w-28"
        v-if="project.icon"
      )
        nuxt-image(
          :src="project.icon"
          width="32"
          height="32"
          fit="contain"
        )

      nuxt-content(
        class="text-md mt-2"
        :document="{body: project.excerpt}"
      )
    span(
      class="absolute z-0 top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-10"
    )
</template>
<script lang="ts">
import Vue from 'vue'
interface Project {
  href: string
  body: object
}
export default Vue.extend({
  name: 'ProjectSummary',
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    externalUrl() {
      const project = this.project as Project
      if (project.href) {
        const url = new URL(project.href)
        url.searchParams.append('ref', 'mekyle.com')
        return url
      }
      return null
    },
  },
})
</script>

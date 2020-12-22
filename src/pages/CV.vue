<template lang="pug">
  div.flex.h-screen.justify-center.items-center
    div.text-center.bg-white.px-4.py-2.rounded-2xl
      h1.text-xl.font-semibold Downloading latest CV
      p If the PDF did not download,&nbsp;
        a(
          :href="file.src"
          class="underline"
        ) click here.
      hr.my-2
      a(
        href="/"
      ) Return to profile
</template>
<script>
export default {
  computed: {
    file() {
      return this.$page.latest.edges[0].node.file
    },
  },
  metaInfo() {
    const file = this.$page.latest.edges[0].node.file
    return {
      title: `Downloading latest CV`,
      meta: [
        {
          'http-equiv': 'refresh',
          content: `0; URL=${file.src}`,
        },
      ],
    }
  },
}
</script>
<page-query>
query {
  latest: allCv(sortBy: "date", order: DESC, limit: 1) {
    edges {
      node {
        file
      }
    }
  }
}
</page-query>

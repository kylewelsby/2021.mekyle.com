<template lang="pug">
  Layout
    Hero(
      :skills="skills"
    ) {{ introduction }}
    CodersRank(
      class="relative z-30"
    )
    Projects(
      :projects="$page.projects.edges"
    )
    Articles(
      :articles="$page.articles.edges"
    )
</template>

<page-query>
query {
  projects: allProject(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        title
        href
        bgColor
        icon
        content
      }
    }
  }
  articles: allDevToArticle(sortBy: "published_at", order: DESC, limit: 4) {
    edges {
      node {
        id
        title
        slug
        published_at
        cover_image
        canonical_url
      }
    }
  }
}
</page-query>

<script>
import Hero from '~/components/Hero.vue'
import CodersRank from '~/components/CodersRank.vue'
import Projects from '~/components/Projects.vue'
import Articles from '~/components/Articles.vue'
export default {
  components: {
    Hero,
    CodersRank,
    Projects,
    Articles,
  },
  data() {
    return {
      skills: [
        'Vue.js',
        'Nuxt.js',
        'JavaScript',
        'Ruby',
        'CSS',
        'HTML',
        'JSON',
        'Node.js',
        'Express.js',
        'Sequelize',
        'Jest',
        'Cypress.io',
        'GraphQL',
        'Electron',
        'VueX',
        'XState.js',
        'PostgreSQL',
        'Redis',
        'Google Cloud Platform',
        'Firebase',
        'Amazon Web Services',
        'CloudFlare',
      ],
      introduction:
        'Passionate software engineer focused on delivering fantastic customer experiances and business objectives, creating tools to automate repetitive tasks and improve the discoverability of information.',
    }
  },
}
</script>

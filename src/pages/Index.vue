<template lang="pug">
  Layout
    p.p-4.text-center.absolute.text-white.left-0.right-0.z-40 Hey!, this is a very early view of my up-coming website for 2021.  To view my current live site checkout <a href="https://mekyle.com" class="underline">mekyle.com</a>
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
    Clients(
      :clients="$page.clients.edges"
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
  clients: allClient(
    sortBy: "date"
    order: DESC
    limit: 5
  ) {
    edges {
      node {
        id
        title
        bgColor
        icon(
          width: 64
          height: 64
          fit: contain
        )
        content
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
import Clients from '~/components/Clients.vue'

export default {
  components: {
    Hero,
    CodersRank,
    Projects,
    Articles,
    Clients,
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

<template lang="pug">
  Layout
    Hero(
      :skills="skills"
    )
      span(
        v-html="introduction"
      )
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
    Contact(
      :contacts="$page.contacts.edges[0].node.methods"
    )
</template>

<page-query>
query {
  metadata {
    siteName
  }
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
  contacts: allContact(
    sortBy: "weight"
    order: ASC
  ) {
    edges {
      node {
        title
        methods {
          title
          href
          bgColor
          icon(
            width: 64
            height: 64
            fit: contain
          )
        }
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
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Hero,
    CodersRank,
    Projects,
    Articles,
    Clients,
    Contact,
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
        'Passionate <strong>full-stack software engineer</strong> focused on delivering fantastic customer experiences and business objectives, with <strong>two decades of experience</strong> creating tools to automate repetitive tasks and improve information discovery.',
    }
  },
  metaInfo() {
    return {
      titleTemplate: null,
    }
  },
}
</script>

<template lang="pug">
  Layout
    Hero(
      :skills="skills"
    ) {{ introduction }}
    CodersRank(
      class="relative z-30"
    )
</template>

<script>
import Hero from '~/components/Hero.vue'
import CodersRank from '~/components/CodersRank.vue'
export default {
  components: {
    Hero,
    CodersRank,
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

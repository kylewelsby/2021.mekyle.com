<template lang="pug">
  Layout
    Hero(
      :skills="skills"
    ) {{ introduction }}
    //- <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    //- g-image(
    //-   alt="Example image"
    //-   src="~/favicon.png"
    //-   width="135"
    //- )
</template>

<script>
import Hero from '~/components/Hero.vue'
export default {
  components: {
    Hero,
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

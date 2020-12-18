<template lang="pug">
  div.w-full.h-full
    div.overflow-hidden
      TextTicker.ticker(
        :fontSize="16"
        :width="1440"
        :height="500"
        :rows="20"
        :speed="25"
        color="rgba(110,108,92,1)"
      ) {{ formattedText }}
</template>

<script lang="ts">
import Vue from 'vue'
const SKILLS = [
  'Vue.js',
  'Nuxt.js',
  'JavaScript',
  'Ruby |CSS',
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
]
export default Vue.extend({
  data() {
    return {
      repeat: 20,
      rows: 20,
    }
  },
  computed: {
    formattedText() {
      return SKILLS.join(' | ') + ' | '
    },
  },
})
</script>
<style scoped>
.ticker {
  image-rendering: optimizeQuality;
  transform: rotate(-10deg) scale(0.75);
  transform-origin: -40% 75%;
}
</style>

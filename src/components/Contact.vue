<template lang="pug">
  div(
    class="mt-10"
  )
    div(
      class="md:max-w-6xl md:mx-auto text-white"
    )
      h3(
        class="relative z-20 text-4xl md:text-9xl font-extrabold"
      ) Contact.
      div(
        class="-mt-4 md:-mt-6 relative z-10 grid md:grid-cols-6 gap-4"
      )
        ContactSummary(
          v-for="contact in contacts"
          :contact="contact"
          :key="contact.title"
        )
</template>
<script lang="ts">
import ContactSummary from './ContactSummary.vue'
import Vue from 'vue'
export default Vue.extend({
  components: {
    ContactSummary,
  },
  props: {
    contacts: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

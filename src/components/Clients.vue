<template lang="pug">
  div(
    class="mt-10"
  )
    div(
      class="md:max-w-6xl md:mx-auto text-white"
    )
      h3(
        class="relative z-20 text-9xl font-extrabold"
      ) Clients.
      div(
        class="-mt-6 relative z-10 grid grid-cols-3 gap-4"
      )
        ClientSummary(
          v-for="edge in clients"
          :key="edge.id"
          :client="edge.node"
        )
        HireMe
</template>
<script lang="ts">
import Vue from 'vue'
import ClientSummary from './ClientSummary.vue'
import HireMe from './HireMe.vue'
export default Vue.extend({
  components: {
    ClientSummary,
    HireMe,
  },
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
  },
})
</script>

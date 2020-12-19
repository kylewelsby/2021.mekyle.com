<template lang="pug">
  div
    slot
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
html {
  @apply bg-gray-800;
}
</style>

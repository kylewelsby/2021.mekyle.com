<template lang="pug">
  div
    slot
    div(
      class="mt-10 mb-20"
    )
      div(
        class="md:max-w-6xl md:mx-auto text-gray-400 flex"
      )
        div(
          class="flex-grow"
        ) &copy; Kyle Welsby
        div(
          class="flex-grow text-right"
        ) Based in Manchester, UK
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
  @apply bg-gray-900;
}
</style>

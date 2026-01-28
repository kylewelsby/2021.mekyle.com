<template lang="pug">
  div
    div(
      class="bg-gray-800 text-gray-400 text-center py-3 px-4 text-sm"
    )
      | This is an archived profile from 2021.
      |
      a(
        href="https://mekyle.com"
        class="text-blue-400 hover:text-blue-300 underline ml-1"
      ) Visit mekyle.com for my latest profile
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
          class="flex-grow text-center"
        )
          a(
            href="https://2018.mekyle.com"
            class="text-blue-400 hover:text-blue-300 underline"
          ) 2018 Profile
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

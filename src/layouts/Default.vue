<template lang="pug">
  div
    p.p-4.text-center.absolute.text-white.left-0.right-0.z-40 Hey!, this is a very early view of my up-coming website for 2021.  To view my current live site checkout <a href="https://mekyle.com" class="underline">mekyle.com</a>
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

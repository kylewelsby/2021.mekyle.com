<template lang="pug">
  div.hero.relative
    div(
      class="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 py-4"
    )
      div(
        class="md:col-start-2 md:col-span-5 text-center z-10 text-white"
      )
        h1(
          class="text-5xl flex flex-row items-center mt-24 lg:mt-40"
        )
          span.flex-1.mr-4.bg-old-lavender-500.h-2
          span.flex-1.whitespace-nowrap Kyle Welsby
          span.flex-1.ml-4.bg-old-lavender-500.h-2
        h2(
          class="text-8xl mt-6 p-4 px-8 md:p-0 md:mb-10 lg:mb-28"
        )
          span.sr-only Software Engineer
          svg(
            viewBox="0 0 537 246"
            class="stroke-current stroke-2 w-full max-w-sm mx-auto"
          )
            path(
              fill="none"
              fill-opacity="0"
              fill-rule="nonzero"
              d="M53.15 68.6c0 7.92-6.6 14.52-18.48 14.52-16.5 0-23.76-10.56-23.76-10.56L1.67 81.8l.2575703.331666C3.667028 84.295988 14.2496 96.32 34.67 96.32c21.12 0 33-11.88 33-27.72 0-34.32-48.84-21.12-48.84-42.24 0-5.94 5.94-11.88 15.84-11.88 12.54 0 18.48 7.92 18.48 7.92l9.24-9.24-.135828-.166486C61.051124 11.555012 51.8564 1.28 34.67 1.28 15.53 1.28 4.31 12.5 4.31 26.36c0 34.32 48.84 21.12 48.84 42.24zm78.54-5.28c0 11.88-9.24 21.12-19.8 21.12s-19.8-9.24-19.8-21.12 9.24-21.12 19.8-21.12 19.8 9.24 19.8 21.12zm-52.8 0c0 17.82 15.18 33 33 33s33-15.18 33-33-15.18-33-33-33-33 15.18-33 33zm112.2-31.68h-14.52V21.212c0-4.752 3.3-8.052 7.92-8.052 3.3 0 6.6 1.32 6.6 1.32V2.6l-.2548-.079119C189.881145 2.236089 186.343617 1.28 181.85 1.28c-11.88 0-18.48 6.6-18.48 19.8v10.56h-9.24v11.88h9.24V95h13.2V43.52h14.52V31.64zm21.12-7.92c0 5.28-2.64 7.92-6.6 7.92h-6.6v11.88h11.88v33c0 13.2 6.6 19.8 18.48 19.8 5.28 0 9.24-1.32 9.24-1.32V83.12l-.429463.158443C237.182973 83.629102 234.596486 84.44 232.01 84.44c-4.62 0-7.92-3.3-7.92-8.052V43.52h13.2V31.64h-13.2V10.52h-11.88v13.2zm77.22 7.92L274.91 75.2l-14.52-43.56h-13.86L268.31 95h12.54l14.52-42.24L309.89 95h12.54l21.78-63.36h-13.86L315.83 75.2l-14.52-43.56h-11.88zM405.59 95V54.08c0-13.2-10.56-23.76-26.4-23.76-16.5 0-25.08 11.88-25.08 11.88l8.58 8.58.196461-.294239C363.936667 48.979259 369.216667 42.2 379.19 42.2c7.92 0 13.2 5.28 13.2 11.88l-23.1 3.96c-11.22 1.98-18.48 9.24-18.48 19.8 0 9.24 9.24 18.48 22.44 18.48 11.88 0 19.14-7.92 19.14-7.92V95h13.2zm-30.36-10.56c-7.26 0-11.22-3.96-11.22-7.92 0-4.62 3.3-7.788 7.92-8.58l20.46-3.3v1.32c0 11.88-6.6 18.48-17.16 18.48zm84.48-41.58V30.32h-3.3c-11.88 0-19.14 7.92-19.14 7.92v-6.6h-13.2V95h13.2V60.68c0-11.88 6.6-18.48 16.5-18.48 3.3 0 5.94.66 5.94.66zm19.8 25.08h49.5l.103125-.474375C529.29875 66.5375 529.67 64.31 529.67 61.34c0-17.82-13.2-31.02-31.02-31.02s-32.34 14.52-32.34 32.34c0 18.48 15.18 33.66 33 33.66s27.72-13.2 27.72-13.2l-8.58-8.58-.249654.347699C516.889822 76.642203 510.43925 84.44 499.31 84.44c-10.56 0-18.48-7.92-19.8-16.5zm19.14-26.4c9.9 0 16.5 6.6 18.084 15.18h-36.696c2.112-8.58 8.712-15.18 18.612-15.18zM22.13 203.8v-28.38h40.26v-13.2H22.13V137.8h50.82v-13.2H7.61V217h66.66v-13.2H22.13zm80.52-50.16h-13.2V217h13.2v-34.32c0-11.88 6.6-18.48 16.5-18.48 8.58 0 15.18 6.6 15.18 15.84V217h13.2v-36.96c0-17.16-10.56-27.72-25.74-27.72-11.88 0-19.14 7.92-19.14 7.92v-6.6zm108.24 59.532c0 11.748-7.92 19.668-18.48 19.668-12.54 0-19.8-9.9-19.8-9.9l-8.58 8.58.27786.3696C165.977 234.028 175.184 244.72 192.41 244.72c17.82 0 31.68-13.86 31.68-31.68v-59.4h-13.2v6.6l-.361564-.366046C208.926364 158.316438 202.087143 152.32 191.75 152.32c-15.84 0-29.7 13.86-29.7 31.68s13.86 31.68 29.7 31.68c11.88 0 19.14-7.92 19.14-7.92v5.412zM175.25 184c0-11.22 8.58-19.8 17.82-19.8s17.82 8.58 17.82 19.8-8.58 19.8-17.82 19.8-17.82-8.58-17.82-19.8zm81.18-30.36h-13.2V217h13.2v-63.36zm1.32-19.8c0-4.62-3.3-7.92-7.92-7.92s-7.92 3.3-7.92 7.92 3.3 7.92 7.92 7.92 7.92-3.3 7.92-7.92zm31.02 19.8h-13.2V217h13.2v-34.32c0-11.88 6.6-18.48 16.5-18.48 8.58 0 15.18 6.6 15.18 15.84V217h13.2v-36.96c0-17.16-10.56-27.72-25.74-27.72-11.88 0-19.14 7.92-19.14 7.92v-6.6zm72.6 36.3h49.5l.103125-.474375C411.15875 188.5375 411.53 186.31 411.53 183.34c0-17.82-13.2-31.02-31.02-31.02s-32.34 14.52-32.34 32.34c0 18.48 15.18 33.66 33 33.66s27.72-13.2 27.72-13.2l-8.58-8.58-.19734.2772C398.9306 198.421 392.456 206.44 381.17 206.44c-10.56 0-18.48-7.92-19.8-16.5zm19.14-26.4c9.9 0 16.5 6.6 18.084 15.18h-36.696c2.112-8.58 8.712-15.18 18.612-15.18zm54.78 26.4h49.5l.083292-.376626c.177449-.861893.576708-3.143374.576708-6.223374 0-17.82-13.2-31.02-31.02-31.02s-32.34 14.52-32.34 32.34c0 18.48 15.18 33.66 33 33.66s27.72-13.2 27.72-13.2l-8.58-8.58-.249654.347699C472.669822 198.642203 466.21925 206.44 455.09 206.44c-10.56 0-18.48-7.92-19.8-16.5zm19.14-26.4c9.9 0 16.5 6.6 18.084 15.18h-36.696c2.112-8.58 8.712-15.18 18.612-15.18zm81.18-11.22v12.54l-.437245-.097557C534.291212 164.578788 532.17 164.2 529.67 164.2c-9.9 0-16.5 6.6-16.5 18.48V217h-13.2v-63.36h13.2v6.6l.293335-.299308C514.93026 158.496772 521.818571 152.32 532.31 152.32h3.3z"
            )

      div(
        class="motion-reduce:hidden absolute z-0 top-0 left-0 right-0 bottom-0 overflow-hidden bg-gray-800 rounded-b-2xl"
      )
        HeroText(
          :skills="skills"
        )
    div(
      class="mt-4 p-4 md:p-0 max-w-6xl mx-auto md:grid md:grid-cols-12 text-white"
    )
      div(
        class="intro md:col-start-2 md:col-span-5 text-xl tracking-wide"
      )
        slot
    div(
      class="relative mx-auto max-w-6xl hidden md:block"
    )
      div(
        class="absolute -bottom-36 right-0 w-1/2"
      )
        div(
          class="xl:ml-20"
        )
          g-image(
            alt="Standing portrait of Kyle Welsby smiling with iconic curly hair"
            width="960"
            height="1739"
            quality="80"
            fit="inside"
            src="~/images/portraits/kyle-welsby-portrait-halo-removebg.png"
          )

</template>
<script lang="ts">
import Vue from 'vue'
import HeroText from './HeroText.vue'
export default Vue.extend({
  components: {
    HeroText,
  },
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
  },
})
</script>
<style>
.intro strong {
  @apply underline;
  text-decoration-color: rgba(59, 130, 246, 1);
  text-decoration-thickness: 0.15rem;
}
</style>

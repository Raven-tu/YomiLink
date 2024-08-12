<script setup lang="ts">
import Playground from '~/components/main/Playground.vue'

const panelMenuWidth = ref(250)
</script>

<template>
  <main class="relative w-full">
    <section
      class="app-side fixed left-0 top-0 h-full overflow-x-hidden overflow-y-auto bg-base-200 transition-width duration-300"
      :style="{ width: `${panelMenuWidth}px` }"
    >
      <Aside />
    </section>

    <section
      class="app-main transition-margin-left relative h-100vh flex flex-col overflow-x-hidden duration-300"
      :style="{ marginLeft: `${panelMenuWidth}px` }"
    >
      <Playground />
    </section>
  </main>
</template>

<script lang='tsx' setup>
import { nav } from '~/db/nav'

const { updateScope } = useAppStore()

function update(id: string) {
  updateScope(id)
}
</script>

<template>
  <ul class="w-full overflow-x-hidden overflow-y-auto bg-base-200 menu rounded-box">
    <li v-for="(item, index) in nav" :key="index" class="w-full">
      <details v-if="item.sub" :open="item.title === 'base'">
        <summary>{{ item.title }}</summary>
        <ul>
          <li v-for="(subChild, subIdx) in item.sub" :key="subIdx">
            <a @click="update(subChild.url)">{{ subChild.title }}</a>
          </li>
        </ul>
      </details>
      <a v-else>{{ item.title }}</a>
    </li>
  </ul>
</template>

<style scoped></style>

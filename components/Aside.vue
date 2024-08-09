<script lang='tsx' setup>
import { nav } from '~/db/nav'

const { updateScope } = useAppStore()

function update(id: string) {
  updateScope(id)
}
</script>

<template>
  <ul class="menu bg-base-200 rounded-box h-full w-56">
    <li v-for="(item, index) in nav" :key="index">
      <details v-if="item.sub" open>
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

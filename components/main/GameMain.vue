<script lang='ts' setup>
import type { Question } from '~/types'

const props = defineProps<{
  attemptsCount: number
  currentQuestion: Question | undefined
  submitAnswer: (answer: string) => boolean
}>()

const anserInput = ref('')
</script>

<template>
  <section class="game-main flex-center flex-col">
    <div class="game-main-question text-6em">
      <!--  -->
      {{ currentQuestion?.question }}
    </div>
    <!--  -->
    <input
      id="input"
      v-model="anserInput"
      lang="en"
      :placeholder=" attemptsCount > 0 ? props.currentQuestion?.answer : '?'"
      type="text" autocomplete="off"
      p="x-4 y-2" m="t-5" w="250px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      autoFocus
      @keydown.enter="props.submitAnswer(anserInput), anserInput = ''"
    >
  </section>
</template>

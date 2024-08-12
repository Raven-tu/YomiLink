<script lang='ts' setup>
import type { Question } from '~/types'

const props = defineProps<{
  attemptsCount: number
  currentQuestion: Question | undefined
}>()

const showAnswer = computed(() => {
  return props.attemptsCount > 0
})
</script>

<template>
  <div class="game-foot min-h-30 w-full flex flex-col rounded-md space-y-2">
    <div class="game-foot-answer flex justify-start space-x-2">
      <div class="game-foot-answer-title font-bold">
        <span> {{ props.currentQuestion?.question ?? '' }}</span>
      </div>
      <div class="game-foot-answer-count">
        <span> （{{ props.attemptsCount }}）</span>
      </div>
      <div class="game-foot-answer-content">
        <span v-show="showAnswer" class="game-foot-answer-content-text">{{ props.currentQuestion?.answer }}</span>
      </div>

      <div class="game-head-action flex-center !ml-auto space-x-2">
        <slot />
      </div>
    </div>

    <div class="game-foot-explanation break-normal" style="white-space: preserve-breaks;">
      {{ props.currentQuestion?.explantion }}
    </div>
  </div>
</template>

<style scoped></style>

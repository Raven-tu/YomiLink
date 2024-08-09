<script lang='ts' setup>
const props = defineProps<{
  currentQuestionAnswer: string
  currentQuestionExplantion: string
  attemptsCount: number
}>()

const showAnswer = computed(() => {
  return props.attemptsCount > 0
})
</script>

<template>
  <div class="game-foot min-h-30 w-full flex flex-col rounded-md p-4 space-y-2">
    <div class="game-foot-answer flex justify-start space-x-2">
      <div class="game-foot-answer-title font-bold">
        <span> {{ props.currentQuestionExplantion }}</span>
      </div>
      <div class="game-foot-answer-count">
        <span> （{{ props.attemptsCount }}）</span>
      </div>
      <div class="game-foot-answer-content">
        <span v-show="showAnswer" class="game-foot-answer-content-text">{{ props.currentQuestionAnswer }}</span>
      </div>
    </div>
    <div class="game-foot-explanation">
      {{ props.currentQuestionExplantion }}
    </div>
  </div>
</template>

<style scoped></style>

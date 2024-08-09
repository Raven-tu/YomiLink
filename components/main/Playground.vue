<script lang='ts' setup>
import GameFoot from './GameFoot.vue'
import GameHead from './GameHead.vue'
import GameMain from './GameMain.vue'

import { useGame } from '~/composables/useGame'

const { currentIdx, attemptsCount, currentQuestionAnswer, currentQuestionExplantion, currentInput, scopeTitle, currentQuestion, initGame, questionList, questionSize, submitAnswer } = useGame()

provide('currentInput', currentInput)
provide('currentInput', currentInput)
</script>

<template>
  <section class="flex-center flex-1 overflow-auto p-20">
    <div class="flex-center h-full max-w-560px w-full flex-col space-y-4">
      <GameHead :scope-title :current-idx :question-size />
      <GameMain :attempts-count :current-question :submit-answer />
      <GameFoot :current-question-answer :attempts-count :current-question-explantion />
    </div>
  </section>
</template>

<style scoped></style>

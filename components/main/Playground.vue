<script lang='ts' setup>
import GameFoot from './GameFoot.vue'
import GameHead from './GameHead.vue'
import GameMain from './GameMain.vue'

import { useGame } from '~/composables/useGame'

const { currentIdx, attemptsCount, currentInput, scopeTitle, currentQuestion, questionSize, submitAnswer } = useGame()

provide('currentInput', currentInput)
provide('currentInput', currentInput)
</script>

<template>
  <section class="flex-center flex-1 overflow-auto p-20">
    <div v-if="currentQuestion" class="h-full max-w-560px w-full flex-center flex-col space-y-10">
      <GameHead :scope-title :current-idx :question-size />
      <GameMain :attempts-count :current-question :submit-answer />
      <GameFoot :attempts-count :current-question />
    </div>
    <!--  -->
    <div v-else class="hero">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">
            Hello there
          </h1>
          <p class="py-6">
            Click on the menu on the right to select the topic of the exercise.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

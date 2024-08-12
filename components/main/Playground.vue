<script lang='ts' setup>
import GameFoot from './GameFoot.vue'
import GameHead from './GameHead.vue'
import GameMain from './GameMain.vue'

import { useGame } from '~/composables/useGame'

const { currentIdx, attemptsCount, scopeTitle, currentQuestion, questionSize, orderType, changeOrderType, submitAnswer } = useGame()

const isSortMode = computed(() => orderType.value === 'sort')
</script>

<template>
  <section class="flex-center flex-1 overflow-auto p-20">
    <div v-if="currentQuestion" class="h-full max-w-560px w-full flex-center flex-col space-y-10">
      <GameHead :scope-title :current-idx :question-size />
      <GameMain :attempts-count :current-question :submit-answer />
      <GameFoot :attempts-count :current-question>
        <button class="text-2xl !outline-none" @click="changeOrderType">
          <div v-if="isSortMode" class="i-lets-icons-sort-down" />
          <div v-else class="i-lets-icons-sort-random" />
        </button>
        <a class="i-carbon-logo-github text-xl" href="https://github.com/Raven-tu/YomiLink" target="_blank" />
      </GameFoot>
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

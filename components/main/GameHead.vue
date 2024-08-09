<script lang='ts' setup>
export interface Props {
  scopeTitle: string
  currentIdx: number
  questionSize: number
}

const props = withDefaults(defineProps<Props>(), {
  scopeTitle: 'Scope Name',
  currentIdx: 0,
  questionSize: 100,
})
</script>

<template>
  <section class="w-h w-full flex items-center justify-between">
    <div class="set-progress flex-center space-x-2">
      <div class="numbers-mobile">
        {{ props.currentIdx }} / {{ props.questionSize }}
      </div>
      <progress class="progress w-56" :value="props.currentIdx" :max="props.questionSize" />
      <div class="number">
        {{ props.questionSize }}
      </div>
    </div>
    <!--  -->
    <div class="game-head-action">
      {{ props.scopeTitle }}
    </div>
  </section>
</template>

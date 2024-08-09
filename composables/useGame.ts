import { useAppStore } from './useAppStore'

const { currentScope } = storeToRefs(useAppStore())

export function useGame() {
  const currentIdx = ref(0)
  const attemptsCount = ref(0)
  const currentInput = ref('')
  const scopeTitle = computed(() => currentScope.value?.title ?? '')
  const questionList = computed(() => currentScope.value?.data ?? [])
  const questionSize = computed(() => questionList.value.length)
  const currentQuestion = computed(() => questionList.value.at(currentIdx.value))
  const currentQuestionAnswer = computed(() => questionList.value.at(currentIdx.value)?.answer ?? '')
  const currentQuestionExplantion = computed(() => questionList.value.at(currentIdx.value)?.explantion ?? '')

  function initGame() {
    currentIdx.value = 0
    attemptsCount.value = 0
    currentInput.value = ''
  }

  function nextQuestion() {
    attemptsCount.value = 0
    currentIdx.value++
  }

  function judgement() {
    return currentInput.value === currentQuestionAnswer.value
  }

  function tryAgain() {
    currentInput.value = ''
    attemptsCount.value++
  }

  function submitAnswer(answer: string) {
    currentInput.value = answer
    console.log('currentInput.value', currentInput.value)
    if (judgement())
      nextQuestion()
    else
      tryAgain()
  }

  return {
    scope: currentScope,
    currentIdx,
    currentInput,
    scopeTitle,
    currentQuestion,
    attemptsCount,
    currentQuestionAnswer,
    currentQuestionExplantion,
    initGame,
    questionList,
    questionSize,
    submitAnswer,
  }
}

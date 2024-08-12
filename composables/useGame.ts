import { useAppStore } from './useAppStore'

const { currentScope } = storeToRefs(useAppStore())

export function useGame() {
  const currentIdx = ref(0)
  const attemptsCount = ref(0)
  const currentInput = ref('')
  const orderType: Ref<'random' | 'sort'> = ref('sort')
  const scopeTitle = computed(() => currentScope.value?.title ?? '')
  const questionList = computed(() => {
    if (orderType.value === 'sort')
      return currentScope.value?.data ?? []
    return currentScope.value?.data.sort(() => Math.random() - 0.5) ?? []
  })
  const questionSize = computed(() => questionList.value.length)
  const currentQuestion = computed(() => questionList.value.at(currentIdx.value))
  const currentQuestionAnswer = computed(() => questionList.value.at(currentIdx.value)?.answer ?? '')
  const currentQuestionExplantion = computed(() => questionList.value.at(currentIdx.value)?.explantion ?? '')

  watchEffect(() => {
    if (scopeTitle.value)
      initGame()
  })

  function initGame() {
    currentIdx.value = 0
    attemptsCount.value = 0
    currentInput.value = ''
  }

  function changeOrderType() {
    orderType.value = orderType.value === 'sort' ? 'random' : 'sort'
    initGame()
    return orderType.value
  }

  function nextQuestion() {
    attemptsCount.value = 0
    currentIdx.value++
    if (currentIdx.value === questionSize.value)
      currentIdx.value = 0
  }

  function judgement() {
    return currentInput.value.toLocaleLowerCase() === currentQuestionAnswer.value.toLocaleLowerCase()
  }

  function tryAgain() {
    currentInput.value = ''
    attemptsCount.value++
  }

  function submitAnswer(answer: string) {
    currentInput.value = answer
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
    orderType,
    changeOrderType,
    currentQuestionExplantion,
    initGame,
    questionList,
    questionSize,
    submitAnswer,
  }
}

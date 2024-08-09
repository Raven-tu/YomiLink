import { acceptHMRUpdate, defineStore } from 'pinia'

import { scopeMap } from '~/db/scope'

// 全局 store
export const useAppStore = defineStore('appStore', () => {
  // 设置
  const gameScope = useState('gameScope', () => 'blank')
  const currentScope = computed(() => scopeMap[gameScope.value] ?? {})

  const updateScope = (scope: string) => (gameScope.value = scope)

  return {
    gameScope,
    currentScope,
    updateScope,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))

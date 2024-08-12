import type { QuestionList } from '~/types'

const modules = import.meta.glob('./scope/*.ts', { import: 'default', eager: true })

export const scopeMap: {
  [key: string]: QuestionList
} = {}
// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules[key] || {})

  Object.keys(mod).forEach((subKey) => {
    // @ts-expect-error-next-line
    const subMod = mod[subKey] as QuestionList
    const scopeName = subKey
    scopeMap[scopeName] = subMod
  })
})

import { scopeMap } from '~/db/scope'

const scopeValues = Object.values(scopeMap)

export const nav = [
  {
    title: 'base',
    type: 'sub',
    url: 'blank',
    sub: scopeValues
      .filter(scope => ['hiragana', 'katakana', 'youon', 'week', 'month', 'hour'].includes(scope.name))
      .map(scope => ({
        title: scope.name,
        type: 'action',
        url: scope.name,
      })),
  },
  {
    title: 'N5',
    type: 'sub',
    url: 'blank',
    sub: scopeValues
      .filter(scope => scope.name.startsWith('N5-'))
      .map(scope => ({
        title: scope.name,
        type: 'action',
        url: scope.name,
      })),
  },
  {
    title: 'N4',
    type: 'sub',
    url: 'blank',
    sub: scopeValues
      .filter(scope => scope.name.startsWith('N4-'))
      .map(scope => ({
        title: scope.name,
        type: 'action',
        url: scope.name,
      })),
  },
  {
    title: 'N3',
    type: 'sub',
    url: 'blank',
    sub: scopeValues
      .filter(scope => scope.name.startsWith('N3-'))
      .map(scope => ({
        title: scope.name,
        type: 'action',
        url: scope.name,
      })),
  },
  {
    title: 'N2',
    type: 'sub',
    url: 'blank',
    sub: scopeValues
      .filter(scope => scope.name.startsWith('N2-'))
      .map(scope => ({
        title: scope.name,
        type: 'action',
        url: scope.name,
      })),
  },
  {
    title: 'N1',
    type: 'sub',
    url: 'blank',
    sub: scopeValues
      .filter(scope => scope.name.startsWith('N1-'))
      .map(scope => ({
        title: scope.name,
        type: 'action',
        url: scope.name,
      })),
  },
]

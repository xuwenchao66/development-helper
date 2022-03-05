import toUpper from 'lodash/toUpper'
import toLower from 'lodash/toLower'
import capitalize from 'lodash/capitalize'
import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'
import kebabCase from 'lodash/kebabCase'

export const TRANSFORMERS = [
  {
    title: 'UPPER',
    handle: toUpper
  },
  {
    title: 'lower',
    handle: toLower
  },
  {
    title: 'Capitalize',
    handle: capitalize
  },
  {
    title: 'camelCase',
    handle: camelCase
  },
  {
    title: 'snake_case',
    handle: snakeCase
  },
  {
    title: 'kebab-case',
    handle: kebabCase
  }
]

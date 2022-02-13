import { DataNode } from 'rc-tree/lib/interface'
import uniqueId from 'lodash/uniqueId'
import _isObject from 'lodash/isObject'
import _isString from 'lodash/isString'
import _isEmpty from 'lodash/isEmpty'

export type Key = number | string

const isStringObj = (value: any) =>
  _isString(value) && (value.startsWith('[') || value.startsWith('{'))

export const parse = (
  data: string | object,
  keys: Key[] = []
): [DataNode[], Key[]] => {
  const nodes: DataNode[] = []
  if (!data) return [nodes, keys]

  const parsedData = _isString(data) ? JSON.parse(data) : data
  const parsedDataKeys = Object.keys(parsedData)

  parsedDataKeys.forEach((key) => {
    const value = parsedData[key]
    const isObj = _isObject(value) || isStringObj(value)
    const isArray = Array.isArray(value)
    const isEmpty = _isEmpty(value)
    const isEmptyObj = isObj && isEmpty
    const isEmptyArray = isArray && isEmpty
    const uniqueKey = uniqueId()

    let title = ''
    if (isEmptyArray) {
      title = `${key}: [ ]`
    } else if (isEmptyObj) {
      title = `${key}: { }`
    } else if (isObj) {
      title = key
    } else {
      title = `${key} : ${value}`
    }
    const node: DataNode = { title, key: uniqueKey }
    if (isObj) node.children = parse(value, keys)[0]

    keys.push(uniqueKey)
    nodes.push(node)
  })

  return [nodes, keys]
}

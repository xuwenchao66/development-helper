import { DataNode } from 'rc-tree/lib/interface'
import uniqueId from 'lodash/uniqueId'
import _isObject from 'lodash/isObject'
import _isString from 'lodash/isString'
import _isEmpty from 'lodash/isEmpty'

export type Key = number | string

const isStringifyObject = (value: any) =>
  _isString(value) && /^\{.*\}$/.test(value)

const isStringifyArray = (value: any) =>
  _isString(value) && /^\[.*\]$/.test(value)

export const parse = (
  data: { [key: string | number]: any },
  keys: Key[] = []
): [DataNode[], Key[]] => {
  const nodes: DataNode[] = []
  if (!data) return [nodes, keys]

  const dataKeys = Object.keys(data)

  dataKeys.forEach((key) => {
    let value = data[key]
    if (isStringifyObject(value) || isStringifyArray(value)) {
      value = JSON.parse(value)
    }

    const isObject = _isObject(value)
    const isArray = Array.isArray(value)
    const isEmpty = _isEmpty(value)
    const isEmptyObj = isObject && isEmpty
    const isEmptyArray = isArray && isEmpty
    const uniqueKey = uniqueId()

    let title = ''
    if (isEmptyArray) {
      title = `${key}: [ ]`
    } else if (isEmptyObj) {
      title = `${key}: { }`
    } else if (isObject) {
      title = key
    } else {
      title = `${key} : ${value}`
    }
    const node: DataNode = { title, key: uniqueKey }
    if (isObject || isArray) node.children = parse(value, keys)[0]

    keys.push(uniqueKey)
    nodes.push(node)
  })

  return [nodes, keys]
}

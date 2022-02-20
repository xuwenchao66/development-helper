import { DataNode } from 'rc-tree/lib/interface'
import { parseJson, isStringifyObject, isStringifyArray } from '@/utils'
import JsonKey from './JsonKey'
import JsonValue from './JsonValue'
import uniqueId from 'lodash/uniqueId'
import _isObject from 'lodash/isObject'
import _isString from 'lodash/isString'
import _isEmpty from 'lodash/isEmpty'

export type Key = number | string

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
      value = parseJson(value)
    }
    if (_isString(value)) value = `"${value}"`

    const isObject = _isObject(value)
    const isArray = Array.isArray(value)
    const isEmpty = _isEmpty(value)
    const isEmptyObj = isObject && isEmpty
    const isEmptyArray = isArray && isEmpty
    const uniqueKey = uniqueId()

    let displayedValue: any = value
    let displayedValueColor

    if (isEmptyArray) {
      displayedValue = '[ ]'
      displayedValueColor = '#000'
    } else if (isEmptyObj) {
      displayedValue = '{ }'
      displayedValueColor = '#000'
    } else if (isObject) {
      displayedValue = ''
    }

    const Title = (
      <>
        <JsonKey title={key} />
        <JsonValue title={displayedValue} color={displayedValueColor} />
      </>
    )

    const node: DataNode = { title: Title, key: uniqueKey }
    if (isObject || isArray) node.children = parse(value, keys)[0]

    keys.push(uniqueKey)
    nodes.push(node)
  })

  return [nodes, keys]
}

import parseJsonBetterError from 'json-parse-even-better-errors'
import isString from 'lodash/isString'

export const parseJson = (value: string) => parseJsonBetterError(value, null)

export const isStringifyObject = (value: any) =>
  isString(value) && /^\{.*\}$/.test(value)

export const isStringifyArray = (value: any) =>
  isString(value) && /^\[.*\]$/.test(value)

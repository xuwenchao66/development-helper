import parseJsonBetterError from 'json-parse-even-better-errors'

export const parseJson = (value: string) => parseJsonBetterError(value, null)

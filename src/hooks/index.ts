import { useCallback, useState, useMemo, Dispatch, SetStateAction } from 'react'
import { message } from 'antd'
import copy from 'copy-to-clipboard'

export const usePaste = () => {
  const isPastable = !!navigator.clipboard
  const paste = useCallback(
    async () => await navigator.clipboard.readText(),
    []
  )

  return { isPastable, paste }
}

export interface UseStringActions {
  set: Dispatch<SetStateAction<string>>
  paste: () => void
  clear: () => void
  copy: () => void
  isPastable: boolean
}

export const useString = (
  defaultValue: string = ''
): [string, UseStringActions] => {
  const [string, set] = useState(defaultValue)
  const { isPastable, paste } = usePaste()

  const actions = useMemo(() => {
    const handleClear = () => set('')

    const handlePaste = async () => {
      try {
        const text = await paste()
        set(text)
      } catch (error) {}
    }

    const handleCopy = async () => {
      try {
        copy(string)
        message.success('Copied.')
      } catch (error) {}
    }

    return {
      isPastable,
      set,
      paste: handlePaste,
      clear: handleClear,
      copy: handleCopy
    }
  }, [isPastable, paste, string])

  return [string, actions]
}

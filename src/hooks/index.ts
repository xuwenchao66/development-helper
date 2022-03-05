import { useCallback, useState, useMemo, Dispatch, SetStateAction } from 'react'

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

    return {
      set,
      paste: handlePaste,
      clear: handleClear,
      isPastable
    }
  }, [isPastable, paste])

  return [string, actions]
}

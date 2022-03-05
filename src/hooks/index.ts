import { useCallback } from 'react'

export const usePaste = () => {
  const isPastable = !!navigator.clipboard
  const paste = useCallback(
    async () => await navigator.clipboard.readText(),
    []
  )

  return { isPastable, paste }
}

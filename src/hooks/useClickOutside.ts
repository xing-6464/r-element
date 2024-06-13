import { useEffect, type RefObject } from 'react'

function useClickOutside(
  elementRef: RefObject<HTMLElement | null>,
  callback: (e: MouseEvent) => void,
) {
  useEffect(() => {
    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  function handler(e: MouseEvent) {
    if (elementRef.current && e.target) {
      if (!elementRef.current.contains(e.target as Node)) {
        callback(e)
      }
    }
  }
}

export default useClickOutside

import { useEffect, useRef } from 'react'

function useClickOutside(callback: (e: MouseEvent) => void) {
  const elementRef = useRef<HTMLDivElement>(null)
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

  return { elementRef }
}

export default useClickOutside

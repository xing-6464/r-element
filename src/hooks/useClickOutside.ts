import React, { useEffect } from 'react'

const useClickOutside = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: (e: MouseEvent) => void,
) => {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && e.target) {
        if (!ref.current.contains(e.target as HTMLElement)) {
          callback(e)
        }
      }
    }
    document.addEventListener('click', handle)

    return () => {
      document.removeEventListener('click', handle)
    }
  }, [ref, callback])
}

export default useClickOutside

import React, { useState } from 'react'
import { TooltipProps } from './types'
import { useClick, useFloating, useHover, useInteractions } from '@floating-ui/react'

function Tooltip(props: TooltipProps) {
  const { trigger = 'hover', placement = 'bottom', content, children, onVisibleChange } = props

  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
  })

  const click = useClick(context, { enabled: trigger === 'click' })
  const hover = useHover(context, { enabled: trigger === 'hover' })

  const { getFloatingProps, getReferenceProps } = useInteractions([click, hover])

  function togglePopper() {
    setIsOpen(!isOpen)
    onVisibleChange?.(!isOpen)
  }

  return (
    <div className="x-tooltip">
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className="x-tooltip__trigger"
        style={{ display: 'inline-block' }}
        onClick={togglePopper}
      >
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          {...getFloatingProps()}
          className="x-tooltip__popper"
          style={floatingStyles}
        >
          {content}
        </div>
      )}
    </div>
  )
}
export default Tooltip

import React, { DOMAttributes, useState } from 'react'
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

  const events: DOMAttributes<HTMLDivElement> = {}
  if (trigger === 'hover') {
    events['onMouseEnter'] = open
    events['onMouseLeave'] = close
  } else if (trigger === 'click') {
    events['onClick'] = togglePopper
  }

  function togglePopper() {
    setIsOpen(!isOpen)
    onVisibleChange?.(!isOpen)
  }

  function close() {
    setIsOpen(false)
    onVisibleChange?.(false)
  }

  function open() {
    setIsOpen(true)
    onVisibleChange?.(true)
  }

  return (
    <div className="x-tooltip" {...events}>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className="x-tooltip__trigger"
        style={{ display: 'inline-block' }}
        {...events}
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

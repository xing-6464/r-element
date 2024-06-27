import React, { DOMAttributes, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { TooltipInstance, TooltipProps } from './types'
import useClickOutside from '../../hooks/useClickOutside'
import { Instance, createPopper } from '@popperjs/core'
import { CSSTransition } from 'react-transition-group'

const Tooltip = React.forwardRef<TooltipInstance, TooltipProps>(function (props, ref) {
  const {
    trigger = 'hover',
    manual = false,
    placement = 'bottom',
    content,
    transition = 'fade',
    children,
    onVisibleChange,
  } = props

  const callCount = React.useRef(0)
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const popperNode = React.useRef<HTMLDivElement | null>(null)
  const triggerNode = React.useRef<HTMLDivElement | null>(null)
  const popperInstance = React.useRef<Instance | null>(null)
  const popperOptions = useMemo(() => {
    return {
      placement,
      ...props.popperOptions,
    }
  }, [placement, props.popperOptions])

  useClickOutside(containerRef, () => {
    if (trigger === 'click' && isOpen && !manual) {
      close()
    }
  })
  const [events, setEvents] = useState<DOMAttributes<HTMLDivElement>>({})
  const [outerEvents, setOuterEvents] = useState<DOMAttributes<HTMLDivElement>>({})
  const attachEvents = () => {
    if (trigger === 'hover') {
      setEvents(() => ({ onMouseEnter: open }))
      setOuterEvents(() => ({ onMouseLeave: close }))
    } else if (trigger === 'click') {
      setEvents(() => ({ onClick: togglePopper }))
    }
  }

  useEffect(() => {
    if (isOpen) {
      if (triggerNode.current && popperNode.current) {
        popperInstance.current = createPopper(
          triggerNode.current,
          popperNode.current,
          popperOptions,
        )
      } else {
        popperInstance.current?.destroy()
        popperInstance.current = null
      }
    }
  }, [isOpen, triggerNode, popperNode, popperOptions])

  useEffect(() => {
    if (callCount.current === 0) return
    setEvents(() => ({}))
    setOuterEvents(() => ({}))
    attachEvents()
  }, [trigger])

  useEffect(() => {
    if (manual) {
      setEvents(() => ({}))
      setOuterEvents(() => ({}))
    } else {
      attachEvents()
    }
  }, [manual])

  function togglePopper() {
    setIsOpen((value) => {
      onVisibleChange?.(!value)
      return !value
    })
  }

  function close() {
    setIsOpen(() => {
      onVisibleChange?.(false)
      return false
    })
  }

  function open() {
    setIsOpen(() => {
      onVisibleChange?.(true)
      return true
    })
  }

  useImperativeHandle(ref, () => ({
    show: open,
    hide: close,
  }))

  return (
    <div
      ref={containerRef}
      {...outerEvents}
      className="x-tooltip"
      style={{ display: 'inline-block' }}
    >
      <div
        ref={triggerNode}
        className="x-tooltip__trigger"
        style={{ display: 'inline-block' }}
        {...events}
      >
        {children}
      </div>
      <CSSTransition
        nodeRef={popperNode}
        in={isOpen}
        timeout={300}
        classNames={transition}
        appear
        unmountOnExit
      >
        <div ref={popperNode} className="x-tooltip__popper">
          {content}
        </div>
      </CSSTransition>
    </div>
  )
})
export default Tooltip

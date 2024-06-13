import classNames from 'classnames'
import { collapseContext } from './Collapse'
import type { CollapseItemProps } from './types'
import { useContext, useMemo } from 'react'
import { CSSTransition } from 'react-transition-group'
import Icon from '../Icon/Icon'

function CollapseItem(props: CollapseItemProps) {
  const { className, name, title, disabled, children } = props
  const { activeNames, setActiveNames } = useContext(collapseContext)
  const isActive = useMemo(() => activeNames.includes(name), [activeNames, name])

  const classes = classNames('x-collapse-item', className, { 'is-disabled': disabled })

  const handleClick = () => {
    if (props.disabled) return
    setActiveNames(props.name)
  }

  const transitionEvent: Record<string, (e: HTMLElement) => void> = {
    onEnter: (e) => {
      e.style.height = '0px'
      e.style.overflow = 'hidden'
    },
    onEntering: (e) => {
      e.style.height = `${e.scrollHeight}px`
    },
    onEntered: (e) => {
      e.style.height = ''
      e.style.overflow = ''
    },
    onExit: (e) => {
      e.style.height = `${e.scrollHeight}px`
      e.style.overflow = 'hidden'
    },
    onExiting: (e) => {
      e.style.height = '0px'
    },
    onExited: (e) => {
      e.style.height = ''
      e.style.overflow = ''
    },
  }

  return (
    <div className={classes}>
      <div
        className={classNames('x-collapse-item__header', {
          'is-active': isActive,
          'is-disabled': disabled,
        })}
        id={`item-header-${name}`}
        onClick={handleClick}
      >
        {title}
        <Icon icon="angle-right" className="header-angle" />
      </div>
      <CSSTransition
        in={isActive}
        timeout={300}
        classNames="slide"
        unmountOnExit
        {...transitionEvent}
      >
        <div className="x-collapse-item__wrapper">
          <div className="x-collapse-item__content" id={`item-content-${name}`}>
            {children}
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default CollapseItem

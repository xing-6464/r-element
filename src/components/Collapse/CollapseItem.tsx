import classNames from 'classnames'
import { collapseContext } from './Collapse'
import type { CollapseItemProps } from './types'
import { useContext, useMemo } from 'react'

function CollapseItem(props: CollapseItemProps) {
  const { className, name, title, disabled, children } = props
  const { activeNames, setActiveNames } = useContext(collapseContext)
  const isActive = useMemo(() => activeNames.includes(name), [activeNames, name])

  const classes = classNames('x-collapse-item', className, { 'is-disabled': disabled })

  const handleClick = () => {
    if (props.disabled) return
    setActiveNames(props.name)
  }

  return (
    <div className={classes}>
      <div className="x-collapse-item__header" id={`item-header-${name}`} onClick={handleClick}>
        {title}
      </div>
      {isActive && (
        <div className="x-collapse-item__content" id={`item-content-${name}`}>
          {children}
        </div>
      )}
    </div>
  )
}

export default CollapseItem

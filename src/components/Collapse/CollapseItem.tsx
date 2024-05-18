import classNames from 'classnames'
import type { CollapseItemProps } from './types'

function CollapseItem(props: CollapseItemProps) {
  const { className, name, title, disabled, children } = props

  const classes = classNames('x-collapse-item', className, { 'is-disabled': disabled })

  return (
    <div className={classes}>
      <div className="x-collapse-item__header" id={`item-header-${name}`}>
        {title}
      </div>
      <div className="x-collapse-item__content" id={`item-content-${name}`}>
        {children}
      </div>
    </div>
  )
}

export default CollapseItem

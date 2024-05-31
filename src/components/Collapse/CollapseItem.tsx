import classNames from 'classnames'
import { collapseContext } from './Collapse'
import type { CollapseItemProps } from './types'
import { useContext, useMemo } from 'react'
import { motion } from 'framer-motion'

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
      <div
        className={classNames('x-collapse-item__header', {
          'is-active': isActive,
          'is-disabled': disabled,
        })}
        id={`item-header-${name}`}
        onClick={handleClick}
      >
        {title}
      </div>
      <motion.div
        className="x-collapse-item__content"
        animate={
          isActive
            ? { opacity: 1, display: 'block' }
            : { opacity: 0, transitionEnd: { display: 'none' } }
        }
        transition={{ duration: 0.2 }}
        id={`item-content-${name}`}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default CollapseItem

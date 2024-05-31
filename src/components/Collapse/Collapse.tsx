import { useState, createContext } from 'react'
import classNames from 'classnames'

import type { CollapseProps, NameType, CollapseContext } from './types'

export const context = createContext<CollapseContext>({ activeNames: [], setActiveNames: () => {} })
function Collapse(props: CollapseProps) {
  const { className, children } = props
  const [activeNames, setActiveNames] = useState<NameType[]>([])

  const classes = classNames('x-collapse', className)

  const handleItemClick = (item: NameType) => {
    const index = activeNames.indexOf(item)
    if (index > -1) {
      // 存在
      setActiveNames((oldValue) => {
        const newValue = [...oldValue]
        newValue.splice(index, 1)
        return newValue
      })
    } else {
      // 不存在
      setActiveNames((oldValue) => [...oldValue, item])
    }
  }

  return (
    <context.Provider value={{ activeNames, setActiveNames: handleItemClick }}>
      <div className={classes}>{children}</div>
    </context.Provider>
  )
}

export default Collapse

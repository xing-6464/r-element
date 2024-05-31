import { useState, createContext, useEffect } from 'react'
import classNames from 'classnames'

import type { CollapseProps, NameType, CollapseContext } from './types'

// eslint-disable-next-line react-refresh/only-export-components
export const collapseContext = createContext<CollapseContext>({
  activeNames: [],
  setActiveNames: () => {},
})
function Collapse(props: CollapseProps) {
  const { className, accordion = false, modeValue, onChange, children } = props
  const [activeNames, setActiveNames] = useState<NameType[]>(modeValue)

  const classes = classNames('x-collapse', className)

  useEffect(() => {
    setActiveNames(modeValue)
    onChange(modeValue)
  }, [modeValue])

  if (accordion && activeNames.length > 1) {
    console.warn('accordion only support single active item')
  }

  const handleItemClick = (item: NameType) => {
    // 是否为手风琴模式
    if (accordion) {
      const newValue = [activeNames[0] === item ? '' : item]
      setActiveNames(newValue)
      onChange(newValue)
    } else {
      const index = activeNames.indexOf(item)
      const newValue = [...activeNames]
      if (index > -1) {
        // 存在
        newValue.splice(index, 1)
        setActiveNames(newValue)
      } else {
        // 不存在
        newValue.push(item)
        setActiveNames(newValue)
      }
      onChange(newValue)
    }
  }

  return (
    <collapseContext.Provider value={{ activeNames, setActiveNames: handleItemClick }}>
      <div className={classes}>{children}</div>
    </collapseContext.Provider>
  )
}

export default Collapse

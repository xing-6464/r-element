import classNames from 'classnames'
import { CollapseProps } from './types'
function Collapse(props: CollapseProps) {
  const { className, children } = props

  const classes = classNames('x-collapse', className)

  return <div className={classes}>{children}</div>
}

export default Collapse

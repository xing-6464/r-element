import classNames from 'classnames'
import React, { useState } from 'react'

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  /**标题 */
  title: string
  /**描述 */
  description?: string
  /**类型 四种可选 针对四种不同的场景 */
  type?: AlertType
  /**关闭alert时触发的事件 */
  onClose?: () => void
  /**是否显示关闭图标*/
  closable?: boolean
}

export const Alert: React.FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false)
  const { title, description, type, onClose, closable } = props
  const classes = classNames('star-alert', {
    [`star-alert-${type}`]: type
  })
  const titleClass = classNames('star-alert-title', {
    'bold-title': description
  })
  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose()
    }
    setHide(true)
  }
  return (
    <Transition in={!hide} timeout={300} animation="zoom-in-top">
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="star-alert-desc">{description}</p>}
        {closable && (
          <span
            className="star-alert-close"
            onClick={handleClose}
            data-testid="itmes"
          >
            <Icon icon="times" />
          </span>
        )}
      </div>
    </Transition>
  )
}

export default alert

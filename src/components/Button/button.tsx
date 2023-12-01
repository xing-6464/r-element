import React from 'react'
import classNames from 'classnames'

type ButtonSize = 'lg' | 'sm'
type ButtonType = 'primary' | 'default' | 'danger' | 'link'

type BaseButtonProps = {
  className?: string
  disabled?: boolean
  size?: ButtonSize
  btnType?: ButtonType
  children: React.ReactNode
  href?: string
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const {
    children,
    href,
    disabled = false,
    size,
    btnType = 'default',
    className
  } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled
  })

  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }
}

export default Button

import React from 'react'
import classNames from 'classnames'
import type { ButtonProps } from './types'

function Button(props: ButtonProps) {
  const {
    className,
    size,
    type,
    circle,
    plain,
    round,
    disabled,
    children,
    ...restProps
  } = props

  const classes = classNames('x-button', className, {
    [`x-button--${type}`]: type,
    [`x-button--${size}`]: size,
    'is-plain': plain,
    'is-circle': circle,
    'is-round': round,
    'is-disabled': disabled,
  })
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      <span>{children}</span>
    </button>
  )
}

export default Button

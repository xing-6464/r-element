import classNames from 'classnames'
import type { ButtonProps } from './types'
import { forwardRef } from 'react'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      className,
      size,
      type,
      circle,
      plain,
      round,
      disabled,
      nativeType = 'button',
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
      <button
        ref={ref}
        className={classes}
        type={nativeType}
        disabled={disabled}
        {...restProps}
      >
        <span>{children}</span>
      </button>
    )
  },
)

export default Button

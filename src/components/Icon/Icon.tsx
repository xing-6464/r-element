import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProps } from './types'
import classNames from 'classnames'

function Icon(props: IconProps) {
  const { className, color, type, ...rest } = props

  return (
    <i
      className={classNames('x-icon', className, { [`x-icon--${type}`]: type })}
      style={{ color: color ? color : '' }}
    >
      <FontAwesomeIcon {...rest} />
    </i>
  )
}

export default Icon

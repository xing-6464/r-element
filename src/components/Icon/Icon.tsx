import React from 'react'
import { type FontAwesomeIconProps, FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon(props: FontAwesomeIconProps) {
  return (
    <i className="x-icon">
      <FontAwesomeIcon {...props} />
    </i>
  )
}

export default Icon

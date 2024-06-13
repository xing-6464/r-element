import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type IconProps = FontAwesomeIconProps & {
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
}

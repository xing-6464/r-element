import type { IconProp } from '@fortawesome/fontawesome-svg-core'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'

export interface Props {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: NativeType
  icon?: IconProp
  loading?: boolean
}

export type ButtonProps = Props & React.HTMLAttributes<HTMLButtonElement>

import type { Placement } from '@floating-ui/react'

export type { Placement }

export interface TooltipProps {
  content?: JSX.Element | string
  trigger?: 'hover' | 'click'
  manual?: boolean
  placement?: Placement
  onVisibleChange?: (visible: boolean) => void
  children: JSX.Element
}

export interface TooltipInstance {
  show: () => void
  hide: () => void
}

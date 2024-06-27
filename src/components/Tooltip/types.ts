import type { Placement, Options } from '@popperjs/core'

export type { Placement }

export interface TooltipProps {
  content?: JSX.Element | string
  trigger?: 'hover' | 'click'
  manual?: boolean
  popperOptions?: Partial<Options>
  placement?: Placement
  transition?: string
  closeDelay?: number
  onVisibleChange?: (visible: boolean) => void
  children: JSX.Element
}

export interface TooltipInstance {
  show: () => void
  hide: () => void
}

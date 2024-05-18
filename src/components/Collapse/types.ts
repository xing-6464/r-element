export interface CollapseProps {
  className?: string
  children: React.ReactNode
}

export interface CollapseItemProps {
  className?: string
  name: string | number
  title?: string | React.ReactNode
  disabled?: boolean
  children: React.ReactNode
}

export type NameType = string | number

export interface CollapseProps {
  className?: string
  children: React.ReactNode
}

export interface CollapseItemProps {
  className?: string
  name: NameType
  title?: string | React.ReactNode
  disabled?: boolean
  children: React.ReactNode
}

export interface CollapseContext {
  activeNames: NameType[]
  setActiveNames: (name: NameType) => void
}

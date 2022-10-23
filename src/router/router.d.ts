interface Routes {
  key?: string
  title?: string
  path: string
  element: React.ReactNode
  auth?: boolean
  hidden?: boolean
  icon?: React.ReactNode
  children?: Routes[]
}

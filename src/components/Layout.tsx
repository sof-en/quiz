import { FC, ReactNode } from "react"
import "./Layout.css"

type ReactEl = {
    children: ReactNode
}

const Layout: FC<ReactEl> = ({children}) => {
  return (
    <div className="layout">
        {children}
    </div>
  )
}

export default Layout
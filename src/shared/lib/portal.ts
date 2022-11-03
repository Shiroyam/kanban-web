import React from "react"
import ReactDOM from "react-dom"

interface PortalProps {
  children: React.ReactNode
}

export const Portal = ({ children }: PortalProps) => {
  const [container] = React.useState(() => document.createElement("div"))

  React.useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

import type { MouseEventHandler, PropsWithChildren } from 'react'

interface ShadowHoverProps extends PropsWithChildren {
  onClick: MouseEventHandler
}

const ShadowHover: React.FC<ShadowHoverProps> = ({ children, onClick }) => {
  return (
    <div className="h-fit w-fit hover:shadow-md cursor-pointer" onClick={onClick}>
      {children}
    </div>
  )
}

export default ShadowHover

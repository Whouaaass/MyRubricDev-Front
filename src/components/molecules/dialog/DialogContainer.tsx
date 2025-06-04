import type { MouseEventHandler, PropsWithChildren } from 'react'
import Backdrop from '@/components/layout/Backdrop'

interface DialogContainerProps extends PropsWithChildren {
  onClose: MouseEventHandler
  size?: 'md' | 'lg' | 'xl'
  className: string
}

const DialogContainer: React.FC<DialogContainerProps> = ({
  children,
  onClose,
  className,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Backdrop */}
    <Backdrop onClose={onClose} />

    {/* Modal */}
    <div
      className={`relative bg-background rounded-xl shadow-xl max-w-md w-full h-fit max-h-[90vh] flex flex-col transform transition-all ${className}`}
    >
      {children}
    </div>
  </div>
)

export default DialogContainer

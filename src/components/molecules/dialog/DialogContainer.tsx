import type { MouseEventHandler, PropsWithChildren } from 'react'
import Backdrop from '@/components/layout/Backdrop'

interface DialogContainerProps extends PropsWithChildren {
  onClose: MouseEventHandler
}

const DialogContainer: React.FC<DialogContainerProps> = ({
  children,
  onClose,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Backdrop */}
    <Backdrop onClose={onClose} />

    {/* Modal */}
    <div className="relative bg-background rounded-xl shadow-xl max-w-md w-full max-h-screen mx-4 transform transition-all">
      {children}
    </div>
  </div>
)

export default DialogContainer

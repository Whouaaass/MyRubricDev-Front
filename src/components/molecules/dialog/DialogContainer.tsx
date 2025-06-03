import type { MouseEventHandler, PropsWithChildren } from 'react'
import Backdrop from '@/components/layout/Backdrop'

interface DialogContainerProps extends PropsWithChildren {
  onClose: MouseEventHandler,
  size?: "md" | "lg" | "xl"
}

const DialogContainer: React.FC<DialogContainerProps> = ({
  children,
  onClose,
  size = "md"
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Backdrop */}
    <Backdrop onClose={onClose} />

    {/* Modal */}
    <div className={`relative bg-background rounded-xl shadow-xl max-w-${size} w-full h-fit max-h-[90vh] flex flex-col transform transition-all`}>
      {children}
    </div>
  </div>
)

export default DialogContainer

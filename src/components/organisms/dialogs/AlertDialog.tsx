import React from 'react'
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Info,
} from 'lucide-react'
import AlertDialogBody from '../../molecules/dialog/AlertDialogBody'
import CustomDialogHeader from '@/components/molecules/dialog/CustomDialogHeader'
import CustomDialogFooter from '@/components/molecules/dialog/CustomDialogFooter'

export interface AlertDialogContentProps {
  /** called when close button activated */
  onClose: () => void
  /** called when confimation button activated */
  onConfirmation?: () => void
  title?: string
  message?: string
  /** label that appears in confirmation button */
  confirmButtonLabel?: string
  /** label that appears in rejection button */
  rejectionButtonLabel?: string
  icon?: React.ReactNode
  iconType?: 'success' | 'warning' | 'error' | 'info'
}

const AlertDialogContent: React.FC<AlertDialogContentProps> = ({
  onClose,
  onConfirmation,
  title,
  message,
  confirmButtonLabel,
  rejectionButtonLabel,
  icon,
  iconType,
}) => {
  const getIcon = () => {
    if (icon) return icon

    const iconProps = { size: 24, className: 'flex-shrink-0' }

    switch (iconType) {
      case 'success':
        return (
          <CheckCircle
            {...iconProps}
            className="text-actionsuccess flex-shrink-0"
          />
        )
      case 'warning':
        return (
          <AlertTriangle
            {...iconProps}
            className="text-actionwarning flex-shrink-0"
          />
        )
      case 'error':
        return (
          <AlertCircle
            {...iconProps}
            className="text-actiondanger flex-shrink-0"
          />
        )
      case 'info':
        return <Info {...iconProps} className="text-blue-500 flex-shrink-0" />
      default:
        return <></>
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-10 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-xl shadow-xl max-w-md w-full mx-4 transform transition-all">
        <CustomDialogHeader onClose={onClose} title={title} icon={getIcon()} />

        <AlertDialogBody message={message} />

        <CustomDialogFooter
          onConfirmation={onConfirmation}
          onClose={onClose}
          confirmButtonLabel={confirmButtonLabel}
          rejectionButtonLabel={rejectionButtonLabel}
        />
      </div>
    </div>
  )
}

export default AlertDialogContent

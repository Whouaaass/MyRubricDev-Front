// molecules/AlertDialogFooter.tsx
import React from 'react'
import type { MouseEventHandler } from 'react'
import Button from '@/components/atoms/form/Button'

export interface CustomDialogFooterProps {
  onConfirmation?: MouseEventHandler
  onClose: MouseEventHandler
  confirmButtonLabel?: string
  rejectionButtonLabel?: string
}

const CustomDialogFooter: React.FC<CustomDialogFooterProps> = ({
  onConfirmation,
  onClose,
  confirmButtonLabel,
  rejectionButtonLabel,
}) => (
  <div className="flex justify-end p-4 space-x-2">
    {confirmButtonLabel && (
      <Button variant="primary" onClick={onConfirmation}>
        {confirmButtonLabel}
      </Button>
    )}
    {rejectionButtonLabel && (
      <Button variant="outlined" onClick={onClose}>
        {rejectionButtonLabel}
      </Button>
    )}
    {!confirmButtonLabel && !rejectionButtonLabel && (
      <Button variant="outlined" onClick={onClose}>
        Cerrar
      </Button>
    )}
  </div>
)

export default CustomDialogFooter

/**
 * This is a component that will be subscribed to zustand store, and will be
 */
import { useEffect, useRef } from 'react'
import { useErrorStore } from './ErrorStore'
import AlertDialogContent from '@/components/organisms/dialogs/AlertDialog'

const ErrorDialog: React.FC = () => {
  const { error, clearError } = useErrorStore()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleClose = () => {
    dialogRef.current?.close()
    clearError()
  }

  useEffect(() => {
    if (error) {
      dialogRef.current?.show()
    }
  }, [error])

  return (
    <dialog ref={dialogRef}>
      <AlertDialogContent
        iconType="error"
        title={error?.short ?? ''}
        message={error?.message}
        onClose={handleClose}
      ></AlertDialogContent>
    </dialog>
  )
}

export default ErrorDialog

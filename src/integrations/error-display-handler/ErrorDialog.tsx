/**
 * This is a component that will be subscribed to zustand store, and will be
 */
import { useEffect, useRef } from 'react'
import { useErrorStore } from './ErrorStore'
import AlertDialogContent from '@/components/organisms/dialogs/AlertDialog'
import { useSession } from '@/hooks/useSession'



const ErrorDialog: React.FC = () => {
  const { error, clearError } = useErrorStore()

  const { logout } = useSession()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const handleClose = async () => {
    dialogRef.current?.close()    
    if (error?.bussiness_code === 'AUTH_003') {
      await logout()
      clearError()
    }

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

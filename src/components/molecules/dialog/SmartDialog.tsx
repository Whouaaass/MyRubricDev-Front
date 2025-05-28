import { useRef } from 'react'

export function SmartDialog({ children, triggerText }: {
  children: React.ReactNode
  triggerText: string
}) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openDialog = () => {
    const button = buttonRef.current
    const dialog = dialogRef.current
    if (!button || !dialog) return

    // Show the dialog in non-modal mode so we can position it
    dialog.show()

    // Get button position
    const rect = button.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    // Calculate position: below or above the button
    const dialogTop = rect.bottom + 8
    const dialogBottom = viewportHeight - rect.top + 8
    const shouldOpenAbove = dialogTop + dialog.offsetHeight > viewportHeight

    dialog.style.position = 'fixed'
    dialog.style.left = `${rect.left}px`
    dialog.style.top = shouldOpenAbove
      ? `${rect.top - dialog.offsetHeight - 8}px`
      : `${rect.bottom + 8}px`
  }

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  return (
    <>
      <button ref={buttonRef} onClick={openDialog}>
        {triggerText}
      </button>

      <dialog ref={dialogRef} onClick={closeDialog}>
        {children}
      </dialog>
    </>
  )
}
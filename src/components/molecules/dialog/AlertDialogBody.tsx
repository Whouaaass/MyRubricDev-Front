// molecules/AlertDialogBody.tsx
import React from 'react'
import Text from '@/components/atoms/Text'

export interface AlertDialogBodyProps {
  message?: string
}

const AlertDialogBody: React.FC<AlertDialogBodyProps> = ({ message }) => {
  if (!message) return null

  return (
    <div className="p-4">
      <Text variant="body" className="text-center">
        {message}
      </Text>
    </div>
  )
}

export default AlertDialogBody

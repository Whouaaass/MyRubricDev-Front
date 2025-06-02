// molecules/DialogHeader.tsx
import React from 'react'
import { XSquare } from 'lucide-react'
import type {MouseEventHandler} from 'react';
import Text from '@/components/atoms/Text'

export interface CustomDialogHeaderProps {
  title?: string
  icon?: React.ReactNode
  onClose: MouseEventHandler
}

const CustomDialogHeader: React.FC<CustomDialogHeaderProps> = ({
  title,
  icon,
  onClose,
}) => (
  <div className="flex items-center justify-between p-4">
    <div className="flex items-center space-x-3">
      {icon}
      {title && <Text variant="moduleTitle">{title}</Text>}
    </div>
    <button
      onClick={onClose}
      className="text-gray-400 hover:text-gray-600 transition-colors"
    >
      <XSquare size={25} fontWeight={10} className="text-black" />
    </button>
  </div>
)

export default CustomDialogHeader

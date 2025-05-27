import React, { useState } from 'react'
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react'

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
  icon?: React.ReactNode
  iconType?: 'success' | 'warning' | 'error' | 'info'
}

const AlertDialog: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  icon,
  iconType,
}) => {
  if (!isOpen) return null

  const getIcon = () => {
    if (icon) return icon

    const iconProps = { size: 24, className: 'flex-shrink-0' }

    switch (iconType) {
      case 'success':
        return (
          <CheckCircle
            {...iconProps}
            className="text-green-500 flex-shrink-0"
          />
        )
      case 'warning':
        return (
          <AlertTriangle
            {...iconProps}
            className="text-yellow-500 flex-shrink-0"
          />
        )
      case 'error':
        return (
          <AlertCircle {...iconProps} className="text-red-500 flex-shrink-0" />
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
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            {(icon || iconType) && getIcon()}
            {title && (
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {message && (
          <div className="p-4">
            <p className="text-gray-700 leading-relaxed">{message}</p>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end p-4 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default AlertDialog

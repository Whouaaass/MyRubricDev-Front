import { Option, Settings } from 'lucide-react'
import React from 'react'
import { Avatar } from '../atoms/Avatar'
import { SmartDialog } from './dialog/SmartDialog'

interface SidebarFooterProps {
  expanded: boolean
  isMobile: boolean
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  expanded,
  isMobile,
}) => {
  const popoverRef = React.useRef<HTMLDialogElement>(null)
  return (
    <div className="p-4">
      {expanded || isMobile ? (
        <div className="flex items-center justify-around space-x-2">
          <Avatar></Avatar>
          <div>
            <p className="text-sm ">User Name</p>
            <p className="text-xs text-gray-400">user@example.com</p>
            <p className="text-sm text-gray-400">Docente</p>
          </div>
          <div className="bg-yellow-400 relative">
            
            <Settings
              className="cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={() => {
                const popover = document.getElementById('popover')
                popoverRef.current?.showModal()
                if (popover) {
                  popover.classList.toggle('hidden')
                }
              }}
              size={20}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Avatar></Avatar>
        </div>
      )}
    </div>
  )
}

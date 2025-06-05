import React from 'react'
import { LogOut, Settings } from 'lucide-react'
import { Avatar } from '../atoms/Avatar'
import { useSession } from '@/hooks/useSession'

interface SidebarFooterProps {
  expanded: boolean
  isMobile: boolean
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  expanded,
  isMobile,
}) => {
  const { logout } = useSession()
  return (
    <div className="relative p-4 select-none">
      {expanded || isMobile ? (
        <div className="flex items-center space-x-2 bg-background2">
          <Avatar></Avatar>
          <div>
            <p className="text-sm ">User Name</p>
            <p className="text-xs text-gray-400">user@example.com</p>
            <p className="text-sm text-gray-400">Docente</p>
          </div>

          <div className="flex flex-1 justify-around">
            <Settings
              className={`hover:opacity-60 `}
              onClick={() => alert('No action defined')}
            ></Settings>
            <LogOut className="hover:opacity-60 text-actiondanger" onClick={logout}></LogOut>
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

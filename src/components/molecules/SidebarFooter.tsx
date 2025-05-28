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
      {/*
      <ul
        className={`absolute ${open ? 'flex' : 'hidden'} bottom-full w-full left-0  z-10 shadow-md`}
      >
        <li 
        className="flex flex-1 flex-row p-4 text-actiondanger hover:bg-actionprimary hover:text-red-100 transition-colors"
        onClick={() =>}
        >
          <LogOut></LogOut>
          <p className="text-center flex-1">Cerrar sesión</p>
        </li>
      </ul>
*/}
    </div>
  )
}

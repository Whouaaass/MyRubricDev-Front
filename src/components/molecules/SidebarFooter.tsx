import { Avatar } from '../atoms/Avatar'

interface SidebarFooterProps {
  expanded: boolean
  isMobile: boolean
}

export const SidebarFooter: React.FC<SidebarFooterProps> = ({
  expanded,
  isMobile,
}) => (
  <div className="p-4">
    {expanded || isMobile ? (
      <div className="flex items-center space-x-2">
        <Avatar></Avatar>
        <div>          
            <p className="text-sm ">User Name</p>
            <p className="text-xs text-gray-400">user@example.com</p>
            <p className="text-sm text-gray-400">Docente</p>
          
        </div>
      </div>
    ) : (
      <div className="flex justify-center">
        <Avatar></Avatar>
      </div>
    )}
  </div>
)

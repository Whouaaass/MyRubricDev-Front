import { BookOpen, Briefcase, Home, UserCheck } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { SidebarLink } from '../atoms/SidebarLink'

interface SidebarNavProps {
  expanded: boolean
  isMobile: boolean
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  expanded,
  isMobile,
}) => {

  const navigate = useNavigate()
  const handleNavigation = (href: string) => {
    console.log('Navigating to:', href)
    navigate({ to: href })
  }
  
  const items = [
    { name: 'Inicio', icon: <Home />, onClick: () => handleNavigation('/dashboard') },
    { name: 'Personal', icon: <UserCheck />, onClick: () => handleNavigation('/dashboard/staff') },
    { name: 'Programa', icon: <Briefcase />, onClick: () => handleNavigation('/dashboard/program') },
    { name: 'Asignaturas', icon: <BookOpen />, onClick: () => handleNavigation('/dashboard/subject') },
  ]

  return (
    <nav className="flex-1 overflow-y-auto">
      <ul className="py-4">
        {items.map((item, index) => (
          <SidebarLink
            key={index}
            onClick={item.onClick}            
            label={item.name}
            expanded={expanded || isMobile}
            icon={item.icon}
          />
        ))}
      </ul>
    </nav>
  )
}

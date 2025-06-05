import { BookOpen, Briefcase, Home, UserCheck } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { SidebarLink } from '../atoms/SidebarLink'
import { useSessionStore } from '@/store/sessionStore'

interface SidebarNavProps {
  expanded: boolean
  isMobile: boolean
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  expanded,
  isMobile,
}) => {
  const navigate = useNavigate()

  const session = useSessionStore()

  const handleNavigation = (href: string) => {
    console.log('Navigating to:', href)
    navigate({ to: href })
  }

  const items: Array<any> = []

  items.push({
    name: 'Inicio',
    icon: <Home />,
    onClick: () => handleNavigation('/dashboard'),
  })
  if (session.rol === 'COORDINADOR') {
    items.push({
      name: 'Personal',
      icon: <UserCheck />,
      onClick: () => handleNavigation('/dashboard/staff'),
    })
  }
  if (session.rol === 'COORDINADOR') {
    items.push({
      name: 'Programa',
      icon: <Briefcase />,
      onClick: () => handleNavigation('/dashboard/program'),
    })
  }
  items.push({
    name: 'Asignaturas',
    icon: <BookOpen />,
    onClick: () => handleNavigation('/dashboard/subject'),
  })

  return (
    <nav className="flex-1 overflow-y-auto overflow-x-hidden">
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

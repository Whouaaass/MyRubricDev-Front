import { useCallback, useEffect } from 'react'
import { SidebarHeader } from '../molecules/SidebarHeader'
import { SidebarNav } from '../molecules/SidebarNav'
import { SidebarFooter } from '../molecules/SidebarFooter'
import useLayoutStore from '@/store/layoutStore'

interface SidebarProps {
  appName?: string
  logo?: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ appName, logo }) => {
  const { sidebarExpanded, toggleSidebar, setSidebarExpanded, isMobile } =
    useLayoutStore()

  // Close sidebar when touching outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isMobile && sidebarExpanded) {
        const sidebar = document.getElementById('sidebar')
        if (sidebar && !sidebar.contains(event.target)) {
          setSidebarExpanded(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobile, sidebarExpanded, setSidebarExpanded])

  const handleMouseEnter = useCallback(() => {
    console.log("isMobile", isMobile)
    if (isMobile) return
    setSidebarExpanded(true)
  }, [isMobile, setSidebarExpanded])

  const handleMouseLeave = useCallback(() => {
    console.log("isMobile", isMobile)
    if (isMobile) return
    setSidebarExpanded(false)
  }, [isMobile, setSidebarExpanded])

  return (
    <aside
      id="sidebar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        ${sidebarExpanded ? 'bg-background ' : undefined}
        ${
          isMobile
            ? `fixed inset-y-0 left-0 z-30 transform ${sidebarExpanded ? 'translate-x-0' : '-translate-x-full'}
             transition-transform duration-300 ease-in-out w-64 shadow-lg`
            : `fixed md:relative top-0 left-0 h-full md:h-screen transition-all duration-300 z-10
             ${sidebarExpanded ? 'w-64' : 'w-16'}`
        }
        text-primary font-regular flex flex-col
      `}
    >
      <SidebarHeader
        appName={appName}
        logo={logo}
        expanded={sidebarExpanded}
        isMobile={isMobile}
        toggle={toggleSidebar}
      />
      <SidebarNav expanded={sidebarExpanded} isMobile={isMobile} />
      <SidebarFooter expanded={sidebarExpanded} isMobile={isMobile} />
    </aside>
  )
}

export default Sidebar

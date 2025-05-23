import { useEffect } from 'react'
import Sidebar from '../organisms/Sidebar'
import Header from '../organisms/DashboardHeader'
import useLayoutStore from '@/store/layoutStore'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  appName?: string
  logo?: React.ReactNode
}

const DashboardLayout: React.FC<LayoutProps> = ({
  title,
  children,
  appName = 'ReactApp',
  logo,
}) => {
  const { setSidebarExpanded, setIsMobile } = useLayoutStore()

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      // On mobile devices, sidebar is hidden by default
      if (mobile) {
        setSidebarExpanded(false)
      }
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setSidebarExpanded, setIsMobile])

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      <div
        className="fixed inset-0 bg-blend-hue bg-opacity-50 z-20 md:hidden transition-opacity duration-300"
        style={{
          opacity:
            useLayoutStore.getState().sidebarExpanded &&
            useLayoutStore.getState().isMobile
              ? 1
              : 0,
          pointerEvents:
            useLayoutStore.getState().sidebarExpanded &&
            useLayoutStore.getState().isMobile
              ? 'auto'
              : 'none',
        }}
        onClick={() => setSidebarExpanded(false)}
      />

      {/* Sidebar */}
      <Sidebar appName={appName} logo={logo} />

      {/* Main content container */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        {/* Header */}
        <Header title={title} appName={appName} logo={logo} />

        {/* Main content */}
        <main className="font-regular flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout

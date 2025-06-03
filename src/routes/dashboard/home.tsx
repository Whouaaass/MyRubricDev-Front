import { createFileRoute } from '@tanstack/react-router'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import DashboardLayout from '@/components/templates/DashboardLayout'
import { APP_NAME } from '@/constants/app.constants'
import ToastTextContent from '@/components/molecules/toast/ToastTextContent'

export const Route = createFileRoute('/dashboard/home')({
  component: RouteComponent,
})

function RouteComponent() {

  useEffect(() => {
    toast(() => <ToastTextContent title="Bienvenido" message="Disfruta tu estadia" />)
  }, [])

  return (
    <DashboardLayout appName={APP_NAME} logo={<UniversityLogo />}>
      <div>Hello "/dashboard/home"!</div>
    </DashboardLayout>
  )
}

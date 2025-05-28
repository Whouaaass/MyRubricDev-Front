import { createFileRoute } from '@tanstack/react-router'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import DashboardLayout from '@/components/templates/DashboardLayout'
import { APP_NAME } from '@/constants/app.constants'

export const Route = createFileRoute('/dashboard/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DashboardLayout appName={APP_NAME} logo={<UniversityLogo />}>
      <div>Hello "/dashboard/home"!</div>
    </DashboardLayout>
  )
}

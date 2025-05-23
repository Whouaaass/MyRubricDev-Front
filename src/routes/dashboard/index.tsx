import { createFileRoute } from '@tanstack/react-router'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import DashboardLayout from '@/components/templates/DashboardLayout'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DashboardLayout appName="MyRubricDev" title="Inicio" logo={<UniversityLogo />}>
      <div></div>
    </DashboardLayout>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import Layout from '@/components/templates/Layout'

export const Route = createFileRoute('/dashboard/subjects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Layout appName="MyRubricDev" title="Gestión de Asignaturas" logo={<UniversityLogo />}>
      <div></div>
    </Layout>
  )
}

import { createFileRoute } from '@tanstack/react-router'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import Layout from '@/components/templates/Layout'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Layout appName="MyRubricDev" title="Inicio" logo={<UniversityLogo />}>
      <div></div>
    </Layout>
  )
}

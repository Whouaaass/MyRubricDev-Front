import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import DashboardLayout from '@/components/templates/DashboardLayout'
import { listAsignacionesQueryOptions } from '@/integrations/tanstack-query/queries'
import SubjectsTemplate from '@/components/templates/SubjectsTemplate'

export const Route = createFileRoute('/dashboard/subject/')({
  component: RouteComponent,
  loader: () => ({
    crumb: 'Asignaturas',
  }),
})


function RouteComponent() { 

  const asignacionesQuery = useQuery(listAsignacionesQueryOptions())
  

  return (
    <DashboardLayout
      appName="MyRubricDev"
      title="Gestión de Asignaturas"
      logo={<UniversityLogo />}
    >
      <SubjectsTemplate asignaciones={asignacionesQuery.data} />
    </DashboardLayout>
  )
}

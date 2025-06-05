import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import type { StaffProps } from '@/components/templates/Staff'
import Staff from '@/components/templates/Staff'
import DashboardLayout from '@/components/templates/DashboardLayout'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import { usuariosApi } from '@/integrations/api'
import { listDocentesQueryOptions } from '@/integrations/tanstack-query/queries'
import ToastTextContent from '@/components/molecules/toast/ToastTextContent'

export const Route = createFileRoute('/dashboard/staff')({
  component: RouteComponent,
})

function RouteComponent() {
  const docentesQuery = useQuery(listDocentesQueryOptions())

  const createDocente: StaffProps['createDocente'] = async (vals) => {
    const docente = await usuariosApi.createDocente({
      ...vals,
      tipoDocente: vals.tipoDocente as DocenteType,
    })
    toast(
      <ToastTextContent
        title="Docente creado"
        message={`Docente ${docente.nombre} creado`}
      ></ToastTextContent>,
    )
    docentesQuery.refetch()
  }

  const editarDocente: StaffProps['editDocente'] = async (vals, id) => {
    if (!id) throw Error('No se ha ingresado id')
    const docente = await usuariosApi.editDocente(id, {
      ...vals,
      tipoDocente: vals.tipoDocente as DocenteType,
    })
    toast(
      <ToastTextContent
        title="Docente editado"
        message={`Docente ${docente.nombre} editado`}
      ></ToastTextContent>,
    )
    docentesQuery.refetch()
  }

  return (
    <DashboardLayout
      appName="MyRubricDev"
      title="Personal Académico"
      logo={<UniversityLogo />}
    >
      <Staff
        professors={docentesQuery.data}
        createDocente={createDocente}
        editDocente={editarDocente}
      />
    </DashboardLayout>
  )
}

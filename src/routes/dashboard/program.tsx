import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import type { ProgramaProps } from '@/components/templates/Programa'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import DashboardLayout from '@/components/templates/DashboardLayout'
import Program from '@/components/templates/Programa'
import {
  listAsignaturasQueryOptions,
  listCompetenciasProgramaQueryOptions,
} from '@/integrations/tanstack-query/queries'
import { asignaturaApi, programaApi } from '@/integrations/api'
import ToastTextContent from '@/components/molecules/toast/ToastTextContent'

export const Route = createFileRoute('/dashboard/program')({
  component: RouteComponent,
})

function RouteComponent() {
  const competenciasQuery = useQuery(listCompetenciasProgramaQueryOptions())
  const asignaturasQuery = useQuery(listAsignaturasQueryOptions())

  function toastMessage(title: string, message: string) {
    toast(<ToastTextContent title={title} message={message} />)
  }

  const crearCompetencia: ProgramaProps['crearCompetencia'] = async (data) => {
    const competencia = await programaApi.createCompetenciaPrograma(data)
    toastMessage('Competencia creada', `Docente ${competencia.codigo} creada`)
    competenciasQuery.refetch()
  }
  const crearAsignatura: ProgramaProps['crearAsignatura'] = async (data) => {
    const asignatura = await asignaturaApi.createAsignatura(data)
    toastMessage('Asignatura creada', `Asignatura ${asignatura.codigo} creada`)
    asignaturasQuery.refetch()
  }

  const crearRA: ProgramaProps['crearRA'] = async (data) => {
    const ra = await programaApi.createRAPrograma(data)
    toastMessage(
      'Resultado de aprendizaje asociado',
      `Resultado de aprendizaje ${ra.codigo} creado`,
    )
  }

  const modificarCompetencia: ProgramaProps['editarCompetencia'] = async (
    data,
    id,
  ) => {
    if (!id) throw new Error('No se proporciono id')
    const competencia = await programaApi.editCompetenciaPrograma(id, data)
    toastMessage('Competencia creada', `Docente ${competencia.codigo} creada`)
    competenciasQuery.refetch()
  }

  const modificarAsignatura: ProgramaProps["editarAsignatura"] = async (data, id) => {
    if (!id) throw new Error('No se proporciono id')
    const asignatura = await asignaturaApi.editAsignatura(id, data)
    toastMessage('Asignatura modificada', `Asignatura ${asignatura.codigo} creada`)
    asignaturasQuery.refetch() 
  }

  const asignarDocenteCompetencia: ProgramaProps['asignarDocenteCompetencia'] =
    async (data, asignaturaId) => {
      const asignacion = await asignaturaApi.asignarAsignatura({
        ...data,
        asignaturaId,
      })
      toastMessage('Competencia asociada', `Docente ${asignacion} creada`)
    }

  return (
    <DashboardLayout
      appName="MyRubricDev"
      title="Gestión de Programa"
      logo={<UniversityLogo />}
    >
      <Program
        asignatures={asignaturasQuery.data}
        competencies={competenciasQuery.data}
        crearCompetencia={crearCompetencia}
        editarCompetencia={modificarCompetencia}
        crearAsignatura={crearAsignatura}
        editarAsignatura={modificarAsignatura}
        crearRA={crearRA}
        asignarDocenteCompetencia={asignarDocenteCompetencia}
      />
    </DashboardLayout>
  )
}

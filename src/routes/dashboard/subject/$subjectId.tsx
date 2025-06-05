import { createFileRoute, useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import type {SubjectTemplateProps} from '@/components/templates/Subject';
import UniversityLogo from '@/components/atoms/UniversityLogo'
import DashboardLayout from '@/components/templates/DashboardLayout'
import { APP_NAME } from '@/constants/app.constants'
import SubjectTemplate from '@/components/templates/Subject'
import {
  asignacionQueryOptions,
  listRAsAsignaturaByCompetenciaQueryOptions,
} from '@/integrations/tanstack-query/queries'
import { asignaturaApi } from '@/integrations/api'
import ToastTextContent from '@/components/molecules/toast/ToastTextContent'

export const Route = createFileRoute('/dashboard/subject/$subjectId')({
  component: RouteComponent,
})



const STUDENTS_DUMMY = [
  {
    id: 1,
    name: 'Juan Pablo Martínez',
  },
  {
    id: 2,
    name: 'María José García',
  },
  {
    id: 3,
    name: 'Carlos Andrés López',
  },
  {
    id: 4,
    name: 'Ana Sofía Pérez',
  },
  {
    id: 5,
    name: 'Luis Eduardo Ramírez',
  },
]

const SUBJECT_DUMMY = {
  name: 'Teoría de la Computación',
}

function RouteComponent() {
  const params = useParams({ from: '/dashboard/subject/$subjectId' })

  function toastMessage(title: string, message: string) {
    toast(<ToastTextContent title={title} message={message} />)
  }

  const asignacionQuery = useQuery(
    asignacionQueryOptions(parseInt(params.subjectId)),
  )
  const resultadosQuery = useQuery(
    listRAsAsignaturaByCompetenciaQueryOptions(
      asignacionQuery.data?.competencia.id,
    ),
  )

  const createRA: SubjectTemplateProps['onCreateRA'] = async (data) => {
    const ra = await asignaturaApi.createRAAsignatura(data)
    toastMessage('Ra Creada', 'Se ha creado un ra: ' + ra.codigo)
    resultadosQuery.refetch()
  }

  const nombre = asignacionQuery.data?.asignatura.nombre ?? '...'
  const competencias = asignacionQuery.data?.competencia
    ? [asignacionQuery.data.competencia]
    : []

  return (
    <DashboardLayout
      appName={APP_NAME}
      title={`Asignatura > ${nombre}`}
      logo={<UniversityLogo />}
    >
      <SubjectTemplate
        competencies={competencias}
        ras={resultadosQuery.data}
        subject={SUBJECT_DUMMY}
        students={STUDENTS_DUMMY}
        onCreateRA={createRA}
      ></SubjectTemplate>
    </DashboardLayout>
  )
}

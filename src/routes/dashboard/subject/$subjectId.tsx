import { createFileRoute, useParams } from '@tanstack/react-router'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import DashboardLayout from '@/components/templates/DashboardLayout'
import { APP_NAME } from '@/constants/app.constants'
import SubjectTemplate from '@/components/templates/Subject'

export const Route = createFileRoute('/dashboard/subject/$subjectId')({
  component: RouteComponent,
})

const RAS_DUMMY: Array<
  LearningResultProp & { competencyId: number; code: string }
> = [
  {
    id: 1,
    title: 'RA01',
    description:
      'Analiza problemas computacionales complejos y diseña soluciones algorítmicas eficientes.',
    competencyId: 1,
    code: 'RA01',
  },
  {
    id: 2,
    title: 'RA02',
    description:
      'Implementa estructuras de datos avanzadas y algoritmos optimizados para resolver problemas específicos.',
    competencyId: 1,
    code: 'RA02',
  },
  {
    id: 3,
    title: 'RA03',
    description:
      'Utiliza metodologías ágiles y herramientas modernas en el desarrollo de software.',
    competencyId: 2,
    code: 'RA03',
  },
  {
    id: 4,
    title: 'RA04',
    description:
      'Aplica principios de diseño y patrones arquitectónicos en el desarrollo de sistemas.',
    competencyId: 2,
    code: 'RA04',
  },
  {
    id: 5,
    title: 'RA05',
    description:
      'Demuestra comprensión de la teoría computacional y su aplicación en problemas prácticos.',
    competencyId: 3,
    code: 'RA05',
  },
]

const COMPETENCIES_DUMMY = [
  {
    id: 1,
    title: 'CE01',
    description:
      'Diseñar soluciones computacionales aplicando principios de matemáticas, ciencias de la computación y disciplinas afines.',
    code: 'CE01',
    ras: RAS_DUMMY,
  },
  {
    id: 2,
    title: 'CE02',
    description:
      'Desarrollar software de calidad aplicando metodologías de desarrollo, estándares y métricas internacionales.',
    code: 'CE02',
  },
  {
    id: 3,
    title: 'CE03',
    description:
      'Aplicar fundamentos matemáticos, principios algorítmicos y teorías de Ciencias de la Computación en la modelación y diseño de soluciones computacionales.',
    code: 'CE03',
  },
]

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

  return (
    <DashboardLayout
      appName={APP_NAME}
      title={`Asignatura > ${params.subjectId}`}
      logo={<UniversityLogo />}
    >
      <SubjectTemplate
        competencies={COMPETENCIES_DUMMY}
        ras={RAS_DUMMY}
        subject={SUBJECT_DUMMY}
        students={STUDENTS_DUMMY}
      ></SubjectTemplate>
    </DashboardLayout>
  )
}

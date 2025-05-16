import { createFileRoute } from '@tanstack/react-router'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import SectionHeader from '@/components/molecules/SectionHeader'
import Layout from '@/components/templates/Layout'
import CompetencyCard from '@/components/molecules/CompetencyCard'
import Program from '@/components/templates/Programa'

export const Route = createFileRoute('/dashboard/program')({
  component: RouteComponent,
})

const COMPETENCIES_DUMMY_DATA = [
  {
    id: 1,
    title: 'Competency 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Competency 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const ASIGNATURAS_DUMMY_DATA = [
  {
    id: 1,
    title: 'Asignatura 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Asignatura 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
]

function RouteComponent() {
  const buttons = [
    { label: "Crear", onClick: () => console.log("Crear") },
  ]
  return <Layout appName="MyRubricDev" title='Gestión de Programa' logo={<UniversityLogo/>}>
     <Program asignatures={ASIGNATURAS_DUMMY_DATA} competencies={COMPETENCIES_DUMMY_DATA} />
  </Layout>
}

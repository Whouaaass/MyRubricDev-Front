import { createFileRoute } from '@tanstack/react-router'
import UniversityLogo from '@/components/atoms/UniversityLogo'
import DashboardLayout from '@/components/templates/DashboardLayout'
import AsignatureCard from '@/components/molecules/AsignatureCard'
import { ElementGrid } from '@/components/layout/ElementGrid'
import OptionsHover from '@/components/molecules/decorators/OptionsHover'

export const Route = createFileRoute('/dashboard/subject/')({
  component: RouteComponent,
})

const ASINGATURES_DUMMY = [
  {
    id: '1',
    name: 'Matemáticas',
    description: 'Asignatura de matemáticas avanzadas',
  },
  {
    id: '2',
    name: 'Historia',
    description: 'Asignatura de historia moderna',
  },
  {
    id: '3',
    name: 'Biología',
    description: 'Asignatura de biología celular',
  },
  {
    id: '4',
    name: 'Química',
    description: 'Asignatura de química orgánica',
  },
  {
    id: '5',
    name: 'Física',
    description: 'Asignatura de física cuántica',
  },
  {
    id: '6',
    name: 'Literatura',
    description: 'Asignatura de literatura contemporánea',
  },
  {
    id: '7',
    name: 'Arte',
    description: 'Asignatura de arte moderno',
  },
  {
    id: '8',
    name: 'Música',
    description: 'Asignatura de teoría musical',
  }
]

function RouteComponent() {
  return (
    <DashboardLayout
      appName="MyRubricDev"
      title="Gestión de Asignaturas"
      logo={<UniversityLogo />}
    >
      <ElementGrid>
        {ASINGATURES_DUMMY.map((asignature) => (
          <OptionsHover>
            <AsignatureCard
              key={asignature.id}
              title={asignature.name}
              description={asignature.description}
            />
          </OptionsHover>
        ))}
      </ElementGrid>
    </DashboardLayout>
  )
}

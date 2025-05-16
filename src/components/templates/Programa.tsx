import AsignatureCard from '../molecules/AsignatureCard'
import CompetencyCard from '../molecules/CompetencyCard'
import SectionHeader from '../molecules/SectionHeader'
import type { PropsWithChildren } from 'react'

interface ProgramaProps {
  competencies: Array<{
    id: number
    title: string
    description: string
  }>
  asignatures: Array<{
    id: number
    title: string
    description: string
  }>
}

const Program: React.FC<ProgramaProps> = ({ competencies, asignatures }) => {
  const asignatureButtons = [{ label: 'Agregar', onClick: () => {} }]
  const competencyButtons = [{ label: 'Agregar', onClick: () => {} }]
  return (
    <div>
      <SectionHeader title="Competencias" buttons={competencyButtons} />
      <ElementGrid>
        {competencies.map((competency) => (
          <CompetencyCard
            title={competency.title}
            description={competency.description}
            key={competency.id}
          ></CompetencyCard>
        ))}
      </ElementGrid>
      <SectionHeader title="Asignaturas" buttons={asignatureButtons} />
      <ElementGrid>
        {asignatures.map((asignature) => (
          <AsignatureCard
            title={asignature.title}
            description={asignature.description}
            key={asignature.id}
          ></AsignatureCard>
        ))}
      </ElementGrid>
    </div>
  )
}

function ElementGrid({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      {children}
    </div>
  )
}

export default Program

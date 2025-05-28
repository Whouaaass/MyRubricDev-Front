import { ElementGrid } from '../layout/ElementGrid'
import AsignatureCard from '../molecules/AsignatureCard'
import CompetencyCard from '../molecules/CompetencyCard'
import SectionHeader from '../molecules/SectionHeader'

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

export default Program

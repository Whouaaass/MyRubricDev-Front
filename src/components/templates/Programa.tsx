import { ElementGrid } from '../layout/ElementGrid'
import AsignatureCard from '../molecules/AsignatureCard'
import CompetencyCard from '../molecules/CompetencyCard'
import SectionHeader from '../molecules/SectionHeader'

type CompetencyProp = {
  id: number
  title: string
  description: string
}

type AsignatureProp = {
  id: number
  title: string
  description: string
}

interface ProgramaProps {
  competencies: Array<CompetencyProp>
  asignatures: Array<AsignatureProp>
}

const Program: React.FC<ProgramaProps> = ({ competencies, asignatures }) => {
  const asignatureButtons = [{ label: 'Agregar', onClick: () => {} }]
  const competencyButtons = [{ label: 'Agregar', onClick: () => {} }]
  return (
    <div>
      <SectionHeader title="Competencias" buttons={competencyButtons} />
      <ElementGrid>
        {competencies.map((competency) => (
          <div
            key={competency.id}
            className="cursor-pointer"
            onClick={() => {}}
          >
            <CompetencyCard
              title={competency.title}
              description={competency.description}
            ></CompetencyCard>
          </div>
        ))}
      </ElementGrid>
      <SectionHeader title="Asignaturas" buttons={asignatureButtons} />
      <ElementGrid>
        {asignatures.map((asignature) => (
          <div
            key={asignature.id}
            className="cursor-pointer"
            onClick={() => {}}
          >
            <AsignatureCard
              title={asignature.title}
              description={asignature.description}
            ></AsignatureCard>
          </div>
        ))}
      </ElementGrid>
    </div>
  )
}

export default Program

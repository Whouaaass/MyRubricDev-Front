import { useMemo } from 'react'
import SectionHeader from '../molecules/SectionHeader'
import CompetencyCard from '../molecules/CompetencyCard'
import { ElementGrid } from '../layout/ElementGrid'
import ShadowHover from '../molecules/decorators/ShadowHover'
import LearningResultCard from '../molecules/LearningResultCard'
import StudentCard from '../molecules/StudentCard'

type SubjectProp = {
  name: string
}

interface SubjectTemplateProps {
  subject: SubjectProp
  competencies: Array<CompetencyProp>
  ras: Array<LearningResultProp>
  students: Array<StudentProp>
}

const SubjectTemplate: React.FC<SubjectTemplateProps> = ({
  subject,
  competencies = [],
  ras = [],
  students = [],
}) => {
  // Section Buttons
  const competenciesButtons = useMemo(
    () => [{ label: 'Agregar', onClick: () => {} }],
    [],
  )
  const rasButtons = useMemo(
    () => [{ label: 'Agregar', onClick: () => {} }],
    [],
  )

  return (
    <div>
      <SectionHeader
        title="Competencias asociadas"
        buttons={competenciesButtons}
      />
      <ElementGrid>
        {competencies.map((competency) => (
          <CompetencyCard
            title={competency.title}
            description={competency.description}
            key={competency.id}
            ras={competency.ras}
            className="hover:shadow-md cursor-pointer"
          ></CompetencyCard>
        ))}
      </ElementGrid>
      <SectionHeader title="Resultados de aprendizaje" buttons={rasButtons} />
      <ElementGrid>
        {ras.map((competency) => (
          <LearningResultCard
            title={competency.title}
            description={competency.description}
            key={competency.id}
            className="hover:shadow-md cursor-pointer"
          ></LearningResultCard>
        ))}
      </ElementGrid>
      <SectionHeader
        title="Estudiantes"
        buttons={[
          { label: 'Generar Reporte', onClick: () => {}, variant: 'outlined' },
        ]}
      ></SectionHeader>
      <div>
        {students.map((student) => (
          <StudentCard name={student.name}></StudentCard>
        ))}
      </div>
    </div>
  )
}

export default SubjectTemplate

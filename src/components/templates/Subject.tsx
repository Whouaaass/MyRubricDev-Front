import { useMemo, useRef, useState } from 'react'
import SectionHeader from '../molecules/SectionHeader'
import CompetencyCard from '../molecules/CompetencyCard'
import { ElementGrid } from '../layout/ElementGrid'
import LearningResultCard from '../molecules/LearningResultCard'
import StudentCard from '../molecules/StudentCard'
import CreateRAAsignaturaDialog from '../organisms/dialogs/CreateRAAsignaturaDialog'
import type {
  CreateRAAsignaturaDialogProps,
  RAAsignaturaFormData,
} from '../organisms/dialogs/CreateRAAsignaturaDialog'

type SubjectProp = {
  name: string
}

export interface SubjectTemplateProps {
  subject: SubjectProp
  competencies: Array<CompetenciaAsignatura>
  ras: Array<RAAsignatura>
  students: Array<StudentProp>
  onCreateRA?: CreateRAAsignaturaDialogProps['onSubmit']
}

const SubjectTemplate: React.FC<SubjectTemplateProps> = ({
  competencies = [],
  ras = [],
  students = [],
  onCreateRA,
}) => {
  const createRaDialogRef = useRef<HTMLDialogElement>(null)
  const [selectedCompetencia, setSelectedCompetencia] =
    useState<CompetenciaAsignatura>()

  // Section Buttons
  const competenciesButtons = useMemo(
    () => [{ label: 'Agregar', onClick: () => {} }],
    [],
  )
  const rasButtons = useMemo(
    () => [
      {
        label: 'Agregar',
        onClick: () => {
          if (competencies.length > 0) {
            setSelectedCompetencia(competencies[0])
            createRaDialogRef.current?.show()
          }
        },
      },
    ],
    [competencies],
  )

  const handleCompetenciaClick = (competencia: CompetenciaAsignatura) => {
    setSelectedCompetencia(competencia)
  }

  return (
    <>
      <dialog ref={createRaDialogRef}>
        {selectedCompetencia && (
          <CreateRAAsignaturaDialog
            onSubmit={onCreateRA}
            onClose={() => {
              createRaDialogRef.current?.close()
              setSelectedCompetencia(undefined)
            }}
            idCompetenciaAsignatura={selectedCompetencia.id}
          />
        )}
      </dialog>

      <div>
        <SectionHeader
          title="Competencias asociadas"
          buttons={competenciesButtons}
        />
        <ElementGrid>
          {competencies.map((competency) => (
            <CompetencyCard
              title={competency.codigo}
              description={competency.descripcion}
              key={competency.id}
              ras={[]}
              className="hover:shadow-md cursor-pointer"
              onClick={() => handleCompetenciaClick(competency)}
            ></CompetencyCard>
          ))}
        </ElementGrid>
        <SectionHeader title="Resultados de aprendizaje" buttons={rasButtons} />
        <ElementGrid>
          {ras.map((ra) => (
            <LearningResultCard
              title={ra.codigo}
              description={ra.descripcion}
              key={ra.id}
              className="hover:shadow-md cursor-pointer"
            ></LearningResultCard>
          ))}
        </ElementGrid>
        {/*
        <SectionHeader
          title="Estudiantes"
          buttons={[
            { label: 'Generar Reporte', onClick: () => {}, variant: 'outlined' },
          ]}
        ></SectionHeader>
        <div>
          {students.map((student) => (
            <StudentCard key={student.name} name={student.name}></StudentCard>
          ))}
        </div>
*/}
      </div>
    </>
  )
}

export default SubjectTemplate

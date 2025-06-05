import { useRef, useState } from 'react'
import { ElementGrid } from '../layout/ElementGrid'
import AsignatureCard from '../molecules/AsignatureCard'
import CompetencyCard from '../molecules/CompetencyCard'
import SectionHeader from '../molecules/SectionHeader'
import EditViewCompetenciaDialog from '../organisms/dialogs/EditViewCompetenciaDialog'
import EditViewAsignaturaDialog from '../organisms/dialogs/EditViewAsignaturaDialog'
import CreateCompetenciaDialog from '../organisms/dialogs/CreateCompetenciaProgramaDialog'
import CreateAsignaturaDialog from '../organisms/dialogs/CreateAsignaturaDialog'
import AsignarDocenteCompetenciaDialog from '../organisms/dialogs/AsignarDocenteCompetenciaDialog'
import type { AsignarDocenteCompetenciaDialogProps } from '../organisms/dialogs/AsignarDocenteCompetenciaDialog'
import type { EditViewCompetenciaDialogProps } from '../organisms/dialogs/EditViewCompetenciaDialog'
import type { EditViewAsignaturaDialogProps } from '../organisms/dialogs/EditViewAsignaturaDialog'
import type { CreateAsignaturaDialogProps } from '../organisms/dialogs/CreateAsignaturaDialog'
import type { CreateCompetenciaDialogProps } from '../organisms/dialogs/CreateCompetenciaProgramaDialog'

export interface ProgramaProps {
  competencies: Array<CompetenciaPrograma>
  asignatures: Array<Asignatura>
  crearCompetencia: CreateCompetenciaDialogProps['onSubmit']
  crearAsignatura: CreateAsignaturaDialogProps['onSubmit']
  editarCompetencia?: EditViewCompetenciaDialogProps['onSubmit']
  editarAsignatura?: EditViewAsignaturaDialogProps['onSubmit']
  crearRA?: EditViewCompetenciaDialogProps['onCreateRA']
  asignarDocenteCompetencia?: AsignarDocenteCompetenciaDialogProps['onSubmit']
}

const Program: React.FC<ProgramaProps> = ({
  competencies,
  asignatures,
  crearCompetencia,
  crearAsignatura,
  editarCompetencia,
  editarAsignatura,
  crearRA,
  asignarDocenteCompetencia,
}) => {
  const createCompetenciaDialogRef = useRef<HTMLDialogElement>(null)
  const editViewCompetenciaDialogRef = useRef<HTMLDialogElement>(null)
  const createAsignaturaDialogRef = useRef<HTMLDialogElement>(null)
  const editViewAsignaturaDialogRef = useRef<HTMLDialogElement>(null)
  const asignacionAsignaturaDialogRef = useRef<HTMLDialogElement>(null)
  const [selectedCompetencia, setSelectedCompetencia] = useState<
    CompetenciaPrograma | undefined
  >()
  const [selectedAsignatura, setSelectedAsignatura] = useState<
    Asignatura | undefined
  >()

  const competencyButtons = [
    {
      label: 'Agregar',
      onClick: () => createCompetenciaDialogRef.current?.show(),
    },
  ]
  const asignatureButtons = [
    {
      label: 'Agregar',
      onClick: () => createAsignaturaDialogRef.current?.show(),
    },
  ]

  const handleCompetenciaClick = (competencia: CompetenciaPrograma) => {
    setSelectedCompetencia(competencia)
    editViewCompetenciaDialogRef.current?.show()
  }

  const handleAsignaturaClick = (asignatura: Asignatura) => {
    setSelectedAsignatura(asignatura)
    editViewAsignaturaDialogRef.current?.show()
  }

  return (
    <>
      <dialog ref={createCompetenciaDialogRef}>
        <CreateCompetenciaDialog
          onSubmit={crearCompetencia}
          onClose={() => createCompetenciaDialogRef.current?.close()}
        />
      </dialog>
      <dialog ref={editViewCompetenciaDialogRef}>
        {selectedCompetencia && (
          <EditViewCompetenciaDialog
            onClose={() => {
              editViewCompetenciaDialogRef.current?.close()
              setSelectedCompetencia(undefined)
            }}
            onSubmit={editarCompetencia}
            onCreateRA={crearRA}
            initialData={selectedCompetencia}
            viewMode={!editarCompetencia}
          />
        )}
      </dialog>
      <dialog ref={createAsignaturaDialogRef}>
        <CreateAsignaturaDialog
          onClose={() => createAsignaturaDialogRef.current?.close()}
          onSubmit={crearAsignatura}
        />
      </dialog>
      <dialog ref={editViewAsignaturaDialogRef}>
        {selectedAsignatura && (
          <EditViewAsignaturaDialog
            onClose={() => {
              editViewAsignaturaDialogRef.current?.close()
              setSelectedAsignatura(undefined)
            }}
            onSubmit={editarAsignatura}
            onAsignarDocenteCompetencia={() =>
              asignacionAsignaturaDialogRef.current?.show()
            }
            initialData={selectedAsignatura}
            viewMode={!editarAsignatura}
          />
        )}
      </dialog>
      <dialog ref={asignacionAsignaturaDialogRef}>
        {selectedAsignatura && (
          <AsignarDocenteCompetenciaDialog
            asignaturaId={selectedAsignatura.id}
            onClose={() => {
              asignacionAsignaturaDialogRef.current?.close()
            }}
            onSubmit={asignarDocenteCompetencia}
          />
        )}
      </dialog>

      <div>
        <SectionHeader title="Competencias" buttons={competencyButtons} />
        <ElementGrid>
          {competencies.map((competency) => (
            <div
              key={competency.id}
              className="cursor-pointer"
              onClick={() => handleCompetenciaClick(competency)}
            >
              <CompetencyCard
                title={competency.codigo}
                description={competency.descripcion}
              />
            </div>
          ))}
        </ElementGrid>
        <SectionHeader title="Asignaturas" buttons={asignatureButtons} />
        <ElementGrid>
          {asignatures.map((asignature) => (
            <div
              key={asignature.id}
              className="cursor-pointer"
              onClick={() => handleAsignaturaClick(asignature)}
            >
              <AsignatureCard
                title={asignature.codigo}
                description={asignature.objetivos}
              />
            </div>
          ))}
        </ElementGrid>
      </div>
    </>
  )
}

export default Program

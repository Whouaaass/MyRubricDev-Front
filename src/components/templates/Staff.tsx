import { useMemo, useRef, useState } from 'react'
import SectionHeader from '../molecules/SectionHeader'
import StaffCard from '../molecules/StaffCard'
import CreateDocenteDialog from '../organisms/dialogs/CreateDocenteDialog'
import EditViewDocenteDialog from '../organisms/dialogs/EditViewDocenteDialog'
import type { EditViewDocenteDialogProps } from '../organisms/dialogs/EditViewDocenteDialog'
import type { DocenteFormData } from '../organisms/dialogs/CreateDocenteDialog'

export interface StaffProps {
  createDocente: (values: DocenteFormData) => Promise<void>
  editDocente: EditViewDocenteDialogProps['onSubmit']
  professors: Array<Docente>
}

const Staff: React.FC<StaffProps> = ({ professors, createDocente, editDocente }) => {
  const createDialogRef = useRef<HTMLDialogElement>(null)
  const editViewDialogRef = useRef<HTMLDialogElement>(null)
  const [docente, setDocente] = useState<Docente | undefined>()

  const staffButtons = useMemo(
    () => [
      { label: 'Agregar', onClick: () => createDialogRef.current?.show() },
    ],
    [createDialogRef.current],
  )

  const handleDocenteClick = (d: Docente) => {
    setDocente(d)
    editViewDialogRef.current?.show()
  }

  return (
    <div>
      <dialog ref={createDialogRef}>
        <CreateDocenteDialog
          onSubmit={createDocente}
          onClose={() => createDialogRef.current?.close()}
        ></CreateDocenteDialog>
      </dialog>
      <dialog ref={editViewDialogRef}>
        <EditViewDocenteDialog
          onSubmit={editDocente}
          onClose={() => editViewDialogRef.current?.close()}
          initialData={docente}
        ></EditViewDocenteDialog>
      </dialog>
      <SectionHeader title="Docentes" buttons={staffButtons} />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
        {professors.map((staffMember) => (
          <StaffCard
            key={staffMember.id}
            name={staffMember.nombre + " " + staffMember.apellido}
            position={staffMember.tipoDocente}
            imageUrl={`https://picsum.photos/id/${staffMember.id}/200/200`}
            onClick={() => handleDocenteClick(staffMember)}
          />
        ))}
      </div>
    </div>
  )
}

export default Staff

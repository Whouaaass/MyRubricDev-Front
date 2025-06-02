import {  useMemo, useRef } from 'react'
import SectionHeader from '../molecules/SectionHeader'
import StaffCard from '../molecules/StaffCard'
import CreateDocenteDialog from '../organisms/dialogs/CreateDocenteDialog'

interface StaffProps {
  professors: Array<{
    id: number
    name: string
    position: string
    description: string
  }>
}

const Staff: React.FC<StaffProps> = ({ professors }) => {
  const docenteDialogRef = useRef<HTMLDialogElement>(null)

  const staffButtons = useMemo(
    () => [
      { label: 'Agregar', onClick: () => docenteDialogRef.current?.show() },
    ],
    [docenteDialogRef.current],
  )

  return (
    <div>
      <dialog ref={docenteDialogRef}>
        <CreateDocenteDialog
          onSubmit={async (vals) => console.log('vals', vals)}
          onClose={() => docenteDialogRef.current?.close()}
        ></CreateDocenteDialog>
      </dialog>
      <SectionHeader title="Docentes" buttons={staffButtons} />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
        {professors.map((staffMember) => (
          <StaffCard
            key={staffMember.id}
            name={staffMember.name}
            position={staffMember.position}
            imageUrl={`https://picsum.photos/id/${staffMember.id}/200/200`}
            onClick={() => console.log(`Clicked on ${staffMember.name}`)}
          />
        ))}
      </div>
    </div>
  )
}

export default Staff

import SectionHeader from '../molecules/SectionHeader'
import StaffCard from '../molecules/StaffCard'

interface StaffProps {
  professors: Array<{
    id: number
    name: string
    position: string
    description: string
  }>
}

const Staff: React.FC<StaffProps> = ({ professors }) => {
  const staffButtons = [{ label: 'Agregar', onClick: () => {} }]
  return (
    <div>
      <SectionHeader title="Docentes" buttons={staffButtons} />
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-4 mb-4">
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

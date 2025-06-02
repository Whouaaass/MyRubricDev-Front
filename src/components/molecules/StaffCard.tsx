import { Pencil, UserX } from 'lucide-react'
import { IconButton } from '../atoms/IconButton'

interface StaffProps {
  name: string
  position: string
  imageUrl: string
  onClick: () => void
}

const StaffCard: React.FC<StaffProps> = ({
  name,
  //  position,
  imageUrl,
  onClick,
}) => {

  return (
    <div
      className="bg-background2 rounded-2xl shadow shadow-actionprimary p-4 flex flex-col cursor-pointer hover:shadow-actionprimary hover:shadow-lg transition-all duration-300"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-32 object-cover rounded-2xl"
      />
      <h4 className="text-center font-semibold mt-2">{name}</h4>
      <div className="self-end-safe">
        <IconButton
          icon={Pencil}
          className="text-actionprimary text-2xl cursor-pointer hover:text-actionprimary"
        />
        <IconButton
          icon={UserX}
          className="text-actionprimary cursor-pointer hover:text-actiondanger"
        />
      </div>
    </div>
  )
}

export default StaffCard

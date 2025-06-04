import type { MouseEventHandler } from "react"

interface AsignatureCardProps {
  title: string
  description: string
  className?: string
  onClick?: MouseEventHandler
}

const AsignatureCard: React.FC<AsignatureCardProps> = ({
  title,
  description,
  className,
  onClick
}) => {
  return (
    <div
      className={`bg-background2 rounded-t-2xl shadow shadow-actionprimary p-4 flex flex-col ${className}`}
      onClick={onClick}
    >
      <p>{description}</p>
      <h4 className="text-end font-semibold mt-2">{title}</h4>
    </div>
  )
}

export default AsignatureCard

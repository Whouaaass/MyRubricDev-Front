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
      className={`bg-background2 rounded-t-2xl shadow shadow-actionprimary p-4 flex flex-col hover:shadow-md ${className}`}
      onClick={onClick}
    >
      <h4 className="text-starts font-semibold">{title}</h4>
      <p className="mt-1">{description}</p>
    </div>
  )
}

export default AsignatureCard

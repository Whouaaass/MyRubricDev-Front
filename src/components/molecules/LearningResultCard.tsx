import type { MouseEventHandler } from "react"

interface LearningResultCardProps {
  title: string
  description?: string
  className?: string
  onClick?: MouseEventHandler
}

const LearningResultCard: React.FC<LearningResultCardProps> = ({
  title,
  description,
  className,
  onClick
}) => {
  return (
    <div
      className={`bg-background2 rounded-2xl rounded-l-none border-l-2 border-l-actionprimary shadow shadow-actionprimary p-2 flex flex-col ${className}`}
      onClick={onClick}
    >
      <h4 className="text-start font-semibold ">{title}</h4>
      {description && <p>{description}</p>}
    </div>
  )
}

export default LearningResultCard

import LearningResultCard from './LearningResultCard'
import type { MouseEventHandler } from 'react'

interface CompetencyCardProps {
  title: string
  description: string
  className?: string  
  ras?: Array<LearningResultProp>
  onClick?: MouseEventHandler
}

const CompetencyCard: React.FC<CompetencyCardProps> = ({
  title,
  description,
  className,
  ras,
  onClick
}) => {
  return (
    <div className='group'>
      <div
        className={`bg-background2 rounded-2xl border border-actionprimary shadow shadow-actionprimary p-4 flex flex-col group-hover:shadow-md ${className}`}
      >
        <p>{description}</p>
        <h4 className="text-end font-semibold mt-2">{title}</h4>
      </div>
      <div className="px-3 pr-12">
        {ras?.map((ra) => (
          <LearningResultCard
            title={ra.title}            
            onClick={onClick}
            className='group-hover:shadow-md'
          ></LearningResultCard>
        ))}
      </div>
    </div>
  )
}

export default CompetencyCard

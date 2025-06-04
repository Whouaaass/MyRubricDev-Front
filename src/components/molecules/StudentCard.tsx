import Button from '../atoms/form/Button'
import Text from '../atoms/Text'
import type { MouseEventHandler } from 'react'

interface LearningResultCardProps {
  name: string
  className?: string
  onClick?: MouseEventHandler
}

const StudentCard: React.FC<LearningResultCardProps> = ({
  name,
  className,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-row justify-between p-2 items-center rounded-2xl rounded-r-none border-1 border-actionprimary  ${className}`}
    >
      <Text variant="body">{name}</Text>
      <Button variant="primary" className='min-w-50'>{'Evaluar'}</Button>
    </div>
  )
}

export default StudentCard

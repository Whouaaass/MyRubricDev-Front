import type {ButtonProps} from '@/components/atoms/form/Button';
import Button from '@/components/atoms/form/Button'

interface SectionHeaderProps {
  title: string
  description?: string
  buttons?: Array<{
    label: string
    onClick: () => void
    variant?: ButtonProps['variant']
  }>
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  buttons = [],
}) => {
  return (
    <div className="flex flex-row justify-between items-center mb-4">
      <h2 className="text-2xl font-medium text-gray-800 truncate">{title}</h2>
      {description ?? <p>{description}</p>}
      <div className="flex flex-col">
        {buttons.map((button, index) => (
          <Button key={index} variant={button.variant} onClick={button.onClick}>
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default SectionHeader

import Text from '@/components/atoms/Text'

interface ToastTextContent {
  title: string
  message: string
  className?: string
}

const ToastTextContent: React.FC<ToastTextContent> = ({
  title,
  message,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Text variant="default" className='font-bold'>{title}</Text>
      <Text variant="body">{message}</Text>
    </div>
  )
}

export default ToastTextContent
 
interface ErrorMessageProps {
  message?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null
  return <span className="text-actiondanger px-3 text-sm block">{message}</span>
}

export default ErrorMessage

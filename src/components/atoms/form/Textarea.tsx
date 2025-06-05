interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  hasError = false,
  className = '',
  rows = 3,
  ...props
}) => {  
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
      onBlur={onBlur}
      rows={rows}
      className={`w-full px-4 py-2 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 transition-colors ${
        hasError
          ? 'border-actiondanger focus:ring-actiondanger focus:border-actiondanger'
          : 'border-gray focus:ring-actionprimary focus:border-actionprimary'
      } ${className}`}
      {...props}
    />
  )
}

export default Textarea

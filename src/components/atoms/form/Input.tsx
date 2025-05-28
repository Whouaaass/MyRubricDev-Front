interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  hasError = false,
  className = '',
  ...props
}) => {  
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full px-4 py-2 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 transition-colors ${
        hasError
          ? 'border-actiondanger focus:ring-actiondanger focus:border-actiondanger'
          : 'border-gray focus:ring-actionprimary focus:border-actionprimary'
      } ${className}`}
      {...props}
    />
  )
}

export default Input

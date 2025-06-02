import React from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean
}

const Select: React.FC<SelectProps> = ({
  id,
  value,
  onChange,
  onBlur,
  hasError = false,
  className = '',
  children,
  ...props
}) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full px-4 py-2 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 transition-colors ${
        hasError
          ? 'border-actiondanger focus:ring-actiondanger focus:border-actiondanger'
          : 'border-gray focus:ring-actionprimary focus:border-actionprimary'
      }
     ${value === '' ? 'text-gray-500' : undefined}
      ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

export default Select

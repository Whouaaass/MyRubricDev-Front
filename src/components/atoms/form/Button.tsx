import type React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outlined'
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'primary',
  children,
  disabled = false,
  onClick,
  className = '',
}) => {
  const baseClasses =
    'px-4 py-2 min-h-11 rounded-xl cursor-pointer hover:-translate-y-0.5 hover:shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 transition-all duration-200'
  const variants = {
    primary:
      'bg-actionprimary text-white hover:shadow-gray focus:ring-actionprimary disabled:bg-gray disabled:cursor-not-allowed',
    secondary:
      'bg-gray-200 text-gray-800 focus:ring-gray-500 disabled:bg-gray disabled:cursor-not-allowed',
    outlined:
      'border-2 border-actionprimary text-actionprimary hover:bg-actionprimary hover:text-white focus:ring-actionprimary disabled:bg-gray disabled:cursor-not-allowed',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

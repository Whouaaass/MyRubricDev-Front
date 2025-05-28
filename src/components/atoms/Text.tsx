import React from 'react'

type TextVariant =
  | 'title'
  | 'sectionTitle'
  | 'moduleTitle'
  | 'default'
  | 'body'
  | 'caption'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant
  children: React.ReactNode
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant = 'default', className = '', children, ...props }, ref) => {
    const variantStyles: Record<TextVariant, string> = {
      title: 'text-4xl font-title',
      sectionTitle: 'text-3xl font-regular font-semibold ',
      moduleTitle: 'text-2xl font-regular font-medium text-gray-800',
      default: 'text-base font-regular text-gray-700',
      body: 'text-base font-regular text-gray-600 leading-relaxed',
      caption: 'text-sm font-regular text-gray-500',
    }

    const combinedClassName = `${variantStyles[variant]} ${className}`.trim()

    return (
      <p ref={ref} className={combinedClassName} {...props}>
        {children}
      </p>
    )
  },
)

Text.displayName = 'Text'

export default Text

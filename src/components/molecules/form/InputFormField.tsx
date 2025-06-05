import type { FieldApi } from '@tanstack/react-form'
import Label from '@/components/atoms/form/Label'
import Input from '@/components/atoms/form/Input'
import Textarea from '@/components/atoms/form/Textarea'
import ErrorMessage from '@/components/atoms/form/ErrorMessage'

interface BaseFormFieldProps {
  label: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  required?: boolean
  disabled?: boolean
  multiline?: boolean
  rows?: number
}

interface WithFieldProps extends BaseFormFieldProps {
  field: FieldApi<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>
  id?: string
}

interface WithoutFieldProps extends BaseFormFieldProps {
  field?: never
  id: string
}

type FormFieldProps = WithFieldProps | WithoutFieldProps

function getErrorMessage(field?: any | undefined, error?: string) {
  if (!field) return error ?? ''
  if (error) return error

  const errors = field.state.meta.errors
  return errors[0]?.message ?? errors.join(', ')
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  field,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  multiline = false,
  rows = 4,
}) => {  
  const hasError = field ? (field.state.meta.errors.length > 0 && field.state.meta.isBlurred) : !!error
  
  const renderField = () => {
    if (multiline) {
      if (field) {
        return (
          <Textarea
            id={field.name}
            name={field.name}
            placeholder={placeholder}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            hasError={hasError}
            disabled={disabled}
            rows={rows}
          />
        )
      }
      return (
        <Textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          hasError={!!error}
          disabled={disabled}
          rows={rows}
        />
      )
    }
    
    if (field) {
      return (
        <Input
          id={field.name}
          name={field.name}
          type={type}
          placeholder={placeholder}
          value={field.state.value}
          onChange={(e) =>
            field.handleChange(
              type === 'number'
                ? parseFloat(e.target.value) || 0
                : e.target.value,
            )
          }
          onBlur={field.handleBlur}
          hasError={hasError}
          disabled={disabled}
        />
      )
    }
    
    return (
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        hasError={!!error}
        disabled={disabled}
      />
    )
  }

  return (
    <div className="mb-1">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {renderField()}
      {hasError && <ErrorMessage message={getErrorMessage(field, error)} />}
    </div>
  )
}

export default FormField

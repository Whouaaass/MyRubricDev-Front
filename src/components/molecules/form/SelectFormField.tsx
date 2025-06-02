import type { FieldApi } from '@tanstack/react-form'
import Label from '@/components/atoms/form/Label'
import Select from '@/components/atoms/form/Select'
import ErrorMessage from '@/components/atoms/form/ErrorMessage'

interface OptionProp {
  label: string
  value: string
}

interface BaseSelectFieldProps {
  label: string
  options: Array<OptionProp>
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void
  error?: string
  required?: boolean
}

interface WithFieldProps extends BaseSelectFieldProps {
  field: FieldApi<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >
  id?: string
}

interface WithoutFieldProps extends BaseSelectFieldProps {
  field?: never
  id: string
}

type SelectFormFieldProps = WithFieldProps | WithoutFieldProps

function getErrorMessage(field?: any | undefined, error?: string) {
  if (!field) return error ?? ''
  if (error) return error

  const errors = field.state.meta.errors
  return errors[0]?.message ?? errors.join(', ')
}

const SelectFormField: React.FC<SelectFormFieldProps> = ({
  id,
  label,
  field,
  options,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required = false,
}) => {
  const hasError = field
    ? field.state.meta.errors.length > 0 && field.state.meta.isBlurred
    : !!error
  const selectId = field?.name ?? id

  return (
    <div className="mb-1">
      <Label htmlFor={selectId} required={required}>
        {label}
      </Label>
      {field ? (
        <Select
          id={selectId}
          name={field.name}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
          hasError={hasError}
        >
          {placeholder && (
            <option disabled value="">
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      ) : (
        <Select
          id={selectId}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          hasError={hasError}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      )}
      {hasError && <ErrorMessage message={getErrorMessage(field, error)} />}
    </div>
  )
}

export default SelectFormField

import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import type { MouseEventHandler } from 'react'
import DialogContainer from '@/components/molecules/dialog/DialogContainer'
import InputFormField from '@/components/molecules/form/InputFormField'
import Button from '@/components/atoms/form/Button'
import { useErrorStore } from '@/integrations/error-display-handler/ErrorStore'
import CustomDialogHeader from '@/components/molecules/dialog/CustomDialogHeader'

export type AsignaturaFormData = Omit<Asignatura, "id">

export interface CreateAsignaturaDialogProps {
  onClose: MouseEventHandler
  onSubmit?: (data: AsignaturaFormData) => Promise<void>
}

const CreateAsignaturaDialog: React.FC<CreateAsignaturaDialogProps> = ({
  onClose,
  onSubmit,
}) => {
  const errorStore = useErrorStore()

  const form = useForm({
    defaultValues: {
      nombre: '',
      creditos: 0,
      codigo: '',
      objetivos: '',
      semestre: 1,
    },
    onSubmit: async (props) => {
      const { value: values } = props
      console.log('Asignatura form submitted:', values)
      try {
        if (onSubmit) {
          await onSubmit(values)
        }
        // Close the dialog after successful submission
        onClose({} as React.MouseEvent)
      } catch (error) {
        errorStore.setError(error)
        throw error
      }
    },
    onSubmitInvalid(props) {
      console.log('Form submission invalid:', props)
    },
    onSubmitMeta: {
      resetOnSuccess: true,
      resetOnError: false,
      resetOnSubmit: false,
    },
    validators: { onChange: validationSchema },
  })

  return (
    <DialogContainer onClose={onClose} className="max-w-xl">
      <CustomDialogHeader
        title="Crear Asignatura"
        onClose={onClose}
      ></CustomDialogHeader>
      <div className="flex-1 overflow-y-auto p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <form.Field name="codigo">
              {(field) => (
                <InputFormField
                  field={field}
                  label="Código"
                  placeholder="Ingrese el código de la asignatura"
                  required
                />
              )}
            </form.Field>

            <form.Field name="nombre">
              {(field) => (
                <InputFormField
                  field={field}
                  label="Nombre"
                  placeholder="Ingrese el nombre de la asignatura"
                  required
                />
              )}
            </form.Field>

            <form.Field name="creditos">
              {(field) => (
                <InputFormField
                  field={field}
                  type="number"
                  label="Créditos"
                  placeholder="Ingrese el número de créditos"
                  required
                />
              )}
            </form.Field>

            <form.Field name="semestre">
              {(field) => (
                <InputFormField
                  field={field}
                  type="number"
                  label="Semestre"
                  placeholder="Ingrese el semestre"
                  required
                />
              )}
            </form.Field>

            <div className="md:col-span-2">
              <form.Field name="objetivos">
                {(field) => (
                  <InputFormField
                    field={field}
                    label="Objetivos"
                    placeholder="Ingrese los objetivos de la asignatura"
                    required
                    multiline
                    rows={4}
                  />
                )}
              </form.Field>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outlined" onClick={onClose}>
              Cancelar
            </Button>
            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? 'Guardando...' : 'Guardar'}
                </Button>
              )}
            />
          </div>
        </form>
      </div>
    </DialogContainer>
  )
}

// Validaciones del formulario
const validationSchema = z.object({
  codigo: z.string().min(1, 'El código es requerido'),
  nombre: z.string().min(1, 'El nombre es requerido'),
  creditos: z
    .number()
    .min(1, 'Los créditos deben ser mayores a 0')
    .max(20, 'La matería no puede tener más de 20 créditos'),
  objetivos: z.string().min(1, 'Los objetivos son requeridos'),
  semestre: z
    .number()
    .min(1, 'El semestre debe ser mayor a 0')
    .max(10, 'El semestre no debe de ser mayor a 10'),
})

export default CreateAsignaturaDialog

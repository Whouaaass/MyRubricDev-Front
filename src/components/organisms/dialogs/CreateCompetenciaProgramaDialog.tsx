import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import type { MouseEventHandler } from 'react'
import DialogContainer from '@/components/molecules/dialog/DialogContainer'
import InputFormField from '@/components/molecules/form/InputFormField'
import Button from '@/components/atoms/form/Button'
import { useErrorStore } from '@/integrations/error-display-handler/ErrorStore'
import SelectFormField from '@/components/molecules/form/SelectFormField'
import CustomDialogHeader from '@/components/molecules/dialog/CustomDialogHeader'

export type CompetenciaFormData = Omit<CompetenciaPrograma, 'id'>

interface CreateCompetenciaDialogProps {
  onClose: MouseEventHandler
  onSubmit?: (data: CompetenciaFormData) => Promise<void>
}

const CreateCompetenciaDialog: React.FC<CreateCompetenciaDialogProps> = ({
  onClose,
  onSubmit,
}) => {
  const errorStore = useErrorStore()

  const form = useForm({
    defaultValues: {
      codigo: '',
      descripcion: '',
      nivel: '',
    },
    onSubmit: async (props) => {
      const { value: values } = props
      console.log('Competencia form submitted:', values)
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
        title="Crear Competencia"
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
          <div className="grid grid-cols-1 gap-4">
            <form.Field name="codigo">
              {(field) => (
                <InputFormField
                  field={field}
                  label="Código"
                  placeholder="Ingrese el código de la competencia"
                  required
                />
              )}
            </form.Field>

            <form.Field name="descripcion">
              {(field) => (
                <InputFormField
                  field={field}
                  label="Descripción"
                  placeholder="Ingrese la descripción de la competencia"
                  required
                  multiline
                  rows={4}
                />
              )}
            </form.Field>

            <form.Field name="nivel">
              {(field) => (
                <SelectFormField
                  field={field}
                  label="Nivel"
                  placeholder="Seleccione el nivel de la competencia"
                  options={[
                    { label: 'Básico', value: 'BASICO' },
                    { label: 'Intermedio', value: 'INTERMEDIO' },
                    { label: 'Avanzado', value: 'AVANZADO' },
                  ]}
                  required
                />
              )}
            </form.Field>
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
  descripcion: z.string().min(1, 'La descripción es requerida'),
  nivel: z.string().min(1, 'El nivel es requerido'),
})

export default CreateCompetenciaDialog

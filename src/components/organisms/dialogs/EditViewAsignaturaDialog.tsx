import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import type { MouseEventHandler } from 'react'
import DialogContainer from '@/components/molecules/dialog/DialogContainer'
import InputFormField from '@/components/molecules/form/InputFormField'
import Button from '@/components/atoms/form/Button'
import CustomDialogHeader from '@/components/molecules/dialog/CustomDialogHeader'
import { useErrorStore } from '@/integrations/error-display-handler/ErrorStore'

type FormDataAsignatura = {
  nombre: string
  creditos: number
  codigo: string
  objetivos: string
  semestre: number
}

export interface EditViewAsignaturaDialogProps {
  onClose: MouseEventHandler
  onSubmit?: (
    data: FormDataAsignatura,
    id: number | undefined,
  ) => Promise<void> | void
  initialData?: { id: number } & FormDataAsignatura
  viewMode?: boolean
  onAsignarDocenteCompetencia?: (asignaturaId: number) => void
}

const EditViewAsignaturaDialog: React.FC<EditViewAsignaturaDialogProps> = ({
  onClose,
  onSubmit,
  initialData,
  viewMode = false,
  onAsignarDocenteCompetencia,
}) => {
  const errorStore = useErrorStore()

  const form = useForm({
    defaultValues: {
      nombre: initialData?.nombre ?? '',
      creditos: initialData?.creditos ?? 0,
      codigo: initialData?.codigo ?? '',
      objetivos: initialData?.objetivos ?? '',
      semestre: initialData?.semestre ?? 1,
    },
    onSubmit: async (props) => {
      const { value: values } = props
      console.log('Asignatura form submitted:', values)
      try {
        if (onSubmit) {
          await onSubmit(values, initialData?.id)
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
        title={viewMode ? 'Ver Asignatura' : 'Editar Asignatura'}
        onClose={onClose}
      />
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
                  disabled={viewMode}
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
                  disabled={viewMode}
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
                  disabled={viewMode}
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
                  disabled={viewMode}
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
                    disabled={viewMode}
                  />
                )}
              </form.Field>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mt-6">
            {initialData?.id && onAsignarDocenteCompetencia && (
              <div className="flex justify-center">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => onAsignarDocenteCompetencia(initialData.id)}
                  className="w-full md:w-auto"
                >
                  Asignar Docente y Competencia
                </Button>
              </div>
            )}

            <div className="flex justify-end gap-3">
              <Button variant="outlined" onClick={onClose}>
                {viewMode ? 'Cerrar' : 'Cancelar'}
              </Button>
              {!viewMode && (
                <form.Subscribe
                  selector={(state) => [state.canSubmit, state.isSubmitting]}
                  children={([canSubmit, isSubmitting]) => (
                    <Button type="submit" disabled={!canSubmit}>
                      {isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
                    </Button>
                  )}
                />
              )}
            </div>
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
  creditos: z.number().min(1, 'Los créditos deben ser mayores a 0'),
  objetivos: z.string().min(1, 'Los objetivos son requeridos'),
  semestre: z.number().min(1, 'El semestre debe ser mayor a 0'),
})

export default EditViewAsignaturaDialog

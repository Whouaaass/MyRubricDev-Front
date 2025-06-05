import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { useRef } from 'react'
import CreateRAProgramaDialog from './CreateRAProgramaDialog'
import type { CreateRADialogProps } from './CreateRAProgramaDialog'
import type { MouseEventHandler } from 'react'
import DialogContainer from '@/components/molecules/dialog/DialogContainer'
import InputFormField from '@/components/molecules/form/InputFormField'
import Button from '@/components/atoms/form/Button'
import SelectFormField from '@/components/molecules/form/SelectFormField'
import CustomDialogHeader from '@/components/molecules/dialog/CustomDialogHeader'
import { useErrorStore } from '@/integrations/error-display-handler/ErrorStore'

type FormDataCompetencia = Omit<CompetenciaPrograma, 'id'>

export interface EditViewCompetenciaDialogProps {
  onClose: MouseEventHandler
  onSubmit?: (
    data: FormDataCompetencia,
    id: number | undefined,
  ) => Promise<void> | void
  onCreateRA?: CreateRADialogProps['onSubmit']
  initialData?: CompetenciaPrograma
  viewMode?: boolean
}

const EditViewCompetenciaDialog: React.FC<EditViewCompetenciaDialogProps> = ({
  onClose,
  onSubmit,
  onCreateRA,
  initialData,
  viewMode = false,
}) => {
  const errorStore = useErrorStore()
  const createRaDialogRef = useRef<HTMLDialogElement>(null)

  const form = useForm({
    defaultValues: initialData as FormDataCompetencia,
    onSubmit: async (props) => {
      const { value: values } = props
      console.log('Competencia form submitted:', values)
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
    <>
      <DialogContainer onClose={onClose} className="max-w-xl">
        <CustomDialogHeader
          title={viewMode ? 'Ver Competencia' : 'Editar Competencia'}
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
            <div className="grid grid-cols-1 gap-4">
              <form.Field name="codigo">
                {(field) => (
                  <InputFormField
                    field={field}
                    label="Código"
                    placeholder="Ingrese el código de la competencia"
                    required
                    disabled={viewMode}
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
                    disabled={viewMode}
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
                    disabled={viewMode}
                  />
                )}
              </form.Field>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mt-6">
              {initialData && onCreateRA && (
                <Button
                  variant="secondary"
                  type="button"
                  onClick={() => createRaDialogRef.current?.show()}
                  className="w-full"
                >
                  Agregar Resultado de Aprendizaje
                </Button>
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
      <dialog ref={createRaDialogRef}>
        {initialData && (
          <CreateRAProgramaDialog
            onSubmit={onCreateRA}
            onClose={() => createRaDialogRef.current?.close()}
            idCompetencia={initialData.id}
          />
        )}
      </dialog>
    </>
  )
}

// Validaciones del formulario
const validationSchema = z.object({
  codigo: z.string().min(1, 'El código es requerido'),
  descripcion: z.string().min(1, 'La descripción es requerida'),
  nivel: z.string().min(1, 'El nivel es requerido'),
})

export default EditViewCompetenciaDialog

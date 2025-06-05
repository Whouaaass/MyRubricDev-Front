import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { useQuery } from '@tanstack/react-query'
import type { MouseEventHandler } from 'react'
import DialogContainer from '@/components/molecules/dialog/DialogContainer'
import Button from '@/components/atoms/form/Button'
import { useErrorStore } from '@/integrations/error-display-handler/ErrorStore'
import SelectFormField from '@/components/molecules/form/SelectFormField'
import CustomDialogHeader from '@/components/molecules/dialog/CustomDialogHeader'
import {
  listCompetenciasProgramaQueryOptions,
  listDocentesQueryOptions,
} from '@/integrations/tanstack-query/queries'

type FormDataAsignarDocenteCompetencia = {
  docenteId: number
  competenciaId: number
}

export interface AsignarDocenteCompetenciaDialogProps {
  onClose: MouseEventHandler
  onSubmit?: (data: FormDataAsignarDocenteCompetencia, asignaturaId: number) => Promise<void>
  asignaturaId: number
}

const AsignarDocenteCompetenciaDialog: React.FC<
  AsignarDocenteCompetenciaDialogProps
> = ({ onClose, onSubmit, asignaturaId }) => {
  const errorStore = useErrorStore()
  const docentesQuery = useQuery(listDocentesQueryOptions())
  const competenciasQuery = useQuery(listCompetenciasProgramaQueryOptions())

  const form = useForm({
    defaultValues: {
      docenteId: 0,
      competenciaId: 0,
    },
    onSubmit: async (props) => {
      const { value: values } = props
      console.log('Asignar form submitted:', values)
      try {
        if (onSubmit) {
          await onSubmit(values, asignaturaId)
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
    validators: { onChange: validationSchema as any },
  })

  console.log(form.getFieldValue("docenteId"))

  const docenteOptions = docentesQuery.data.map((docente) => ({
    label: `${docente.nombre} ${docente.apellido}`,
    value: docente.id.toString(),
  }))

  const competenciaOptions = competenciasQuery.data.map((competencia) => ({
    label: `${competencia.codigo} - ${competencia.descripcion}`,
    value: competencia.id.toString(),
  }))

  return (
    <DialogContainer onClose={onClose} className="max-w-xl">
      <CustomDialogHeader
        title="Asignar Docente y Competencia"
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
            <form.Field name="docenteId">
              {(field) => (
                <SelectFormField
                  field={field}
                  label="Docente"
                  placeholder="Seleccione el docente"
                  options={docenteOptions}
                  required
                />
              )}
            </form.Field>

            <form.Field name="competenciaId">
              {(field) => (
                <SelectFormField
                  field={field}
                  label="Competencia"
                  placeholder="Seleccione la competencia"
                  options={competenciaOptions}
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
                  {isSubmitting ? 'Guardando...' : 'Asignar'}
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
  docenteId: z.preprocess(
    (val) => parseInt(val as string),
    z.number().min(1, 'Debe seleccionar un docente'),
  ),
  competenciaId: z.preprocess(
    (val) => parseInt(val as string),
    z.number().min(1, 'Debe seleccionar una competencia'),
  ),
})

export default AsignarDocenteCompetenciaDialog

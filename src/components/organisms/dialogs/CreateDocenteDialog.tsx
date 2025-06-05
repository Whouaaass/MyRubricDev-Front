import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import type { MouseEventHandler } from 'react'
import DialogContainer from '@/components/molecules/dialog/DialogContainer'
import InputFormField from '@/components/molecules/form/InputFormField'
import Button from '@/components/atoms/form/Button'
import CustomZodValidations from '@/integrations/zod/CustomZodValidations'
import { useErrorStore } from '@/integrations/error-display-handler/ErrorStore'
import SelectFormField from '@/components/molecules/form/SelectFormField'
import CustomDialogHeader from '@/components/molecules/dialog/CustomDialogHeader'

export type DocenteFormData = Omit<Docente, 'id' | 'activo'>

interface CreateDocenteDialogProps {
  onClose: MouseEventHandler
  onSubmit?: (data: DocenteFormData) => Promise<void>
}

const CreateDocenteDialog: React.FC<CreateDocenteDialogProps> = ({
  onClose,
  onSubmit,
}) => {
  const errorStore = useErrorStore()

  const form = useForm({
    defaultValues: {
      nombre: '',
      apellido: '',
      correoAcademico: '',
      tipoIdentificacion: '',
      identificacion: '',
      tipoDocente: '',
      tituloAcademico: '',
    },
    onSubmit: async (props) => {
      const { value: values } = props
      console.log('Docente form submitted:', values)
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
        title="Crear Docentes"
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
            <form.Field name="nombre">
              {(field) => (
                <InputFormField
                  field={field}
                  label="Nombre"
                  placeholder="Ingrese el nombre"
                  required
                />
              )}
            </form.Field>

            <form.Field name="apellido">
              {(field) => (
                <InputFormField
                  field={field}
                  label="Apellido"
                  placeholder="Ingrese el apellido"
                  required
                />
              )}
            </form.Field>

            <form.Field name="correoAcademico">
              {(field) => (
                <InputFormField
                  field={field}
                  label="Correo académico"
                  placeholder="ejemplo@unicauca.edu.co"
                  type="email"
                  required
                />
              )}
            </form.Field>

            <form.Field name="tipoIdentificacion">
              {(field) => (
                <SelectFormField
                  field={field}
                  label="Tipo de Identificación"
                  placeholder="Seleccione el tipo de identificación"
                  options={[
                    { label: 'Cedula de Ciudadanía', value: 'CC' },
                    { label: 'Cedula de Extranjería', value: 'CE' },
                    { label: 'Tarjeta de Identidad', value: 'TI' },
                    { label: 'Pasaporte', value: 'PP' },
                  ]}
                  required
                />
              )}
            </form.Field>

            <form.Field name="identificacion">
              {(field) => (
                <InputFormField
                  field={field}
                  label="Número de identificación"
                  placeholder="Ingrese número de identificación"
                  required
                />
              )}
            </form.Field>

            <form.Field name="tipoDocente">
              {(field) => (
                <SelectFormField
                  field={field}
                  label="Tipo de docente"
                  placeholder="Selecciona tipo de docente"
                  options={[
                    { label: 'Cátedra', value: 'CATEDRA' },
                    { label: 'Tiempo Completo', value: 'TIEMPO_COMPLETO' },
                    { label: 'Planta', value: 'PLANTA' },
                  ]}
                  required
                />
              )}
            </form.Field>

            <form.Field name="tituloAcademico">
              {(field) => (
                <SelectFormField
                  field={field}
                  label="Grado académico"
                  placeholder="Selecciona grado académico"
                  options={[
                    { label: 'Pregrado', value: 'PREGRADO' },
                    { label: 'Especialización', value: 'ESPECIALIZACION' },
                    { label: 'Maestría', value: 'MAESTRIA' },
                    { label: 'Doctorado', value: 'DOCTORADO' },
                    { label: 'Postdoctorado', value: 'POSTDOCTORADO' },
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
  nombre: CustomZodValidations.name(),
  apellido: CustomZodValidations.lastname(),
  correoAcademico: CustomZodValidations.academicMail(),
  tipoIdentificacion: CustomZodValidations.identificationType(),
  identificacion: CustomZodValidations.identification(),
  tipoDocente: CustomZodValidations.docenteType(),
  tituloAcademico: CustomZodValidations.academicDegree(),
})

export default CreateDocenteDialog

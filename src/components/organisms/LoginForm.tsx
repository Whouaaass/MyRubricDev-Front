import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { useRouter } from '@tanstack/react-router'
import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/form/Button'
import FormField from '@/components/molecules/form/InputFormField'
import CustomZodValidations from '@/integrations/zod/CustomZodValidations'
import { useSessionStore } from '@/store/sessionStore'
import { useErrorStore } from '@/integrations/error-display-handler/ErrorStore'

interface LoginFormProps {
  title?: string
}

const LoginForm: React.FC<LoginFormProps> = ({
  title = 'Inicio de sesión',
}) => {
  const router = useRouter()
  const errorStore = useErrorStore()

  const { login } = useSessionStore()

  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    onSubmit: async (props) => {
      const { value: values } = props
      console.log('Form submitted:', values)
      // Handle form submission here
      try {
        const data = await login(values.username, values.password)
        console.log('Login successful:', data)
        // Navigate to the dashboard or another page after successful login
        router.navigate({
          to: '/dashboard/home',
        })
      } catch (error) {
        // this dispatchs the error and will be managed by a modal
        errorStore.setError(error)
      }
    },
    onSubmitInvalid(props) {
      console.log('Form submission invalid:', props)
      // Handle form submission error here
    },
    onSubmitMeta: {
      resetOnSuccess: true,
      resetOnError: false,
      resetOnSubmit: false,
    },
    validators: { onChange: validationSchema },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="flex flex-row flex-wrap max-w-2xl w-full gap-y-15"
    >
      <Text variant="title" className='self-center'>{title}</Text>
      <div className="w-full max-w-96 sm:w-auto sm:flex-1/2 flex flex-col m-auto gap-y-3">
        <form.Field name="username">
          {(field) => (
            <FormField
              field={field}
              label="Nombre de usuario"
              placeholder="Ingrese su nombre de usuario"
            ></FormField>
          )}
        </form.Field>
        <form.Field name="password">
          {(field) => (
            <FormField
              field={field}
              label="Contraseña"
              placeholder="Ingrese su contraseña"
              type="password"
            ></FormField>
          )}
        </form.Field>
      </div>
      <div className="m-auto flex flex-col gap-2 w-70 max-w-full">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" className="flex-2" disabled={!canSubmit}>
              {isSubmitting ? '...' : 'Entrar →'}
            </Button>
          )}
        ></form.Subscribe>
        <Button
          variant="outlined"
          onClick={() =>
            router.navigate({
              to: '/auth/register',
            })
          }
          className="w-1/2"
        >
          Crear cuenta
        </Button>
      </div>
    </form>
  )
}

// Validaciones del formulario
const validationSchema = z.object({
  username: CustomZodValidations.username(),
  password: CustomZodValidations.password(),
})

export default LoginForm

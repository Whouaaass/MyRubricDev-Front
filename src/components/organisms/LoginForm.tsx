import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { useRouter } from '@tanstack/react-router'
import Button from '../atoms/form/Button'
import FormField from '../molecules/FormField'
import { authApi } from '@/api/index'

interface LoginFormProps {
  title?: string
}

const validationSchema = z.object({
  email: z
    .string()
    .email('El correo electrónico no es válido')
    .min(1, 'El correo electrónico es requerido'),
  password: z
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(20, 'La contraseña no puede tener más de 20 caracteres'),
  // .regex(/[a-zA-Z]/, 'La contraseña debe contener al menos una letra')
  // .regex(/[0-9]/, 'La contraseña debe contener al menos un número'),
})

const LoginForm: React.FC<LoginFormProps> = ({
  title = 'Inicio de sesión',
}) => {
  const router = useRouter()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    onSubmit: async (props) => {
      const { value: values } = props
      console.log('Form submitted:', values)
      // Handle form submission here
      try {
        const data = await authApi.login(values.email, values.password)
        console.log('Login successful:', data)
        // Navigate to the dashboard or another page after successful login
        router.navigate({
          to: '/dashboard',
        })
      } catch (error) {
        console.error('Error during login:', error)
        // Handle login error here
      }
    },
    onSubmitInvalid(props) {
      console.log('Form submission invalid:', props)
      // Handle form submission error here
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
      <h1 className="w-full sm:w-auto sm:flex-1/2 text-4xl font-title text-center self-center text-gray-800">
        {title}
      </h1>
      <div className="w-full max-w-96 sm:w-auto sm:flex-1/2 flex flex-col m-auto gap-y-3">
        <form.Field name="email">
          {(field) => (
            <FormField
              field={field}
              label="Correo Electrónico"
              placeholder="Ingrese su correo electrónico"
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
              search: { register: true },
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

export default LoginForm

import { createFileRoute } from '@tanstack/react-router'
import AuthLayout from '@/components/templates/AuthLayout'
import Register from '@/components/templates/Register'

export const Route = createFileRoute('/auth/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  )
}

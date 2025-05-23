import { createFileRoute } from '@tanstack/react-router'
import AuthLayout from '@/components/templates/AuthLayout'
import Login from '@/components/templates/Login'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  )
}

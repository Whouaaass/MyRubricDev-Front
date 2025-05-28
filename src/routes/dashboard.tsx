import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { isAuthenticated } from '@/store/sessionStore'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  loader: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: '/auth/login',
      })
    }
  },
})

/**
 * This is the wrapper component for dashboard subtree
 * @returns
 */
function RouteComponent() {
  return <Outlet />
}

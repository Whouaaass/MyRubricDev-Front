import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { AppLocalStorage } from '@/integrations/localStorage/AppLocalStorage'
import { isAuthenticated, useSessionStore } from '@/store/sessionStore'

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
  beforeLoad: () => {    
    if (isAuthenticated()) {
      throw redirect({
        to: "/dashboard/home"
      })
    }
  },
})

/** auth subtree component wrapper */
function RouteComponent() {
  const session = useSessionStore.getState()
  const token = AppLocalStorage.getToken()
  console.log("authLoader", session)
  console.log("authLoader", token)

  return <Outlet />
}

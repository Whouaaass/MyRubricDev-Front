import { Outlet, createFileRoute, redirect } from '@tanstack/react-router'
import { AppLocalStorage } from '@/integrations/localStorage/AppLocalStorage'
import { useSessionStore } from '@/store/sessionStore'

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    const session = context.sessionStore.getState()
    const token = AppLocalStorage.getToken()
    console.log('auth Loader', session)
    console.log('auth Loader', token)
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

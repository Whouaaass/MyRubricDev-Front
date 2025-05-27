import { createFileRoute, redirect } from '@tanstack/react-router'
import { AppLocalStorage } from '@/integrations/localStorage/AppLocalStorage'

export const Route = createFileRoute('/')({
  loader: () => {
    const token = AppLocalStorage.getToken()
    if (token) {
      throw redirect({
        to: '/dashboard',
      })
    } else {
      throw redirect({
        to: '/auth/login',
      })
    }
  },
  component: App,
})

function App() {
  return <div>App Works!!!</div>
}

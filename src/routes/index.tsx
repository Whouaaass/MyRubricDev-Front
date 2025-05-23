import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: () => {
    throw redirect({
      to: '/auth/login',
    })
  },
  component: App,
})

function App() {
  return <div>
    App Works!!!
  </div>
}

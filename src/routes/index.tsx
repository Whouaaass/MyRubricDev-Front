import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({  
  component: App,
  beforeLoad: () => {
    throw redirect({
      to: "/auth/login"
    })
  }
})

function App() {
  return <div>App Works!!!</div>
}

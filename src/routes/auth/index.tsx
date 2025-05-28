import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
  beforeLoad: () => {
    throw redirect({
      to: "/auth/login"
    })
  }
})

function RouteComponent() {
  return <div>Hello "/auth/"!</div>
}

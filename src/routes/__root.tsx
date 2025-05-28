import { Outlet, createRootRoute } from '@tanstack/react-router'
import NotFoundPage from '@/components/pages/NotFoundPage'

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  component: () => (
    <>
      <Outlet />
    </>
  ),
})

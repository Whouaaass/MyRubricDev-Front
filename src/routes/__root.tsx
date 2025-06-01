import { Outlet, createRootRoute } from '@tanstack/react-router'
import NotFoundPage from '@/components/pages/NotFoundPage'
import ErrorDialog from '@/integrations/error-display-handler/ErrorDialog'

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  component: () => (
    <>
      <ErrorDialog />
      <Outlet />
    </>
  ),
})

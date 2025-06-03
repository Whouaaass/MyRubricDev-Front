import { Outlet, createRootRoute } from '@tanstack/react-router'
import { ToastContainer } from 'react-toastify'
import NotFoundPage from '@/components/pages/NotFoundPage'
import ErrorDialog from '@/integrations/error-display-handler/ErrorDialog'

export const Route = createRootRoute({
  notFoundComponent: NotFoundPage,
  component: () => (
    <>
      <Outlet />
      <ErrorDialog />
      <ToastContainer />
    </>
  ),
})

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createRouter as createTanstackRouter,
} from '@tanstack/react-router'

import { routeTree } from './routeTree.gen.ts'
import reportWebVitals from './reportWebVitals.ts'
import * as TanstackQuery from '@/integrations/tanstack-query/root-provider.tsx'
import * as SessionStore from '@/store/sessionStore'

// Import the generated route tree
import './styles.css'
import './integrations/toastify/toastify.css'

// Create a new router instance
const router = createTanstackRouter({
  routeTree,
  context: {
    ...TanstackQuery.getContext(),
    ...SessionStore.getContext(),
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TanstackQuery.Provider>
        <RouterProvider router={router} />
      </TanstackQuery.Provider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

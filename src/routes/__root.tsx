import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

import NotFoundPage from '@/components/pages/NotFoundPage'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  notFoundComponent: NotFoundPage,
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  component: () => (
    <RootDocument>

      <Outlet />
      {/* <TanStackRouterDevtools /> */}
      {/* <LayoutAddition /> */}
    </RootDocument>
  ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>        
        <link href="https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Karla:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

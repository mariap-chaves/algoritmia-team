import { createRootRoute, Outlet } from '@tanstack/react-router'
import Nav from '../components/Nav'

export const Route = createRootRoute({
  component: () => {
    return (
      <div className="flex min-h-screen flex-col bg-brand-bg">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-brand-cyan focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-bg"
        >
          Saltar al contenido
        </a>
        <Nav />
        <main id="contenido" tabIndex={-1} className="relative flex grow flex-col overflow-hidden outline-none">
          <Outlet />
        </main>
      </div>
    )
  },
})

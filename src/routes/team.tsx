import { createRoute } from '@tanstack/react-router'
import Team from '../pages/Team'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: '/equipo',
    component: Team,
})

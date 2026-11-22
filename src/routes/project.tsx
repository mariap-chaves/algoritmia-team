import { createRoute } from '@tanstack/react-router'
import Project from '../pages/Project'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
    getParentRoute: () => rootRoute,
    path: '/proyecto',
    component: Project,
})

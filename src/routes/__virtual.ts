export default {
    type: 'root',
    file: '__root.tsx',
    children: [
        { type: 'index', file: 'index.tsx' },
        { type: 'route', path: 'equipo', file: 'team.tsx' },
        { type: 'route', path: 'proyecto', file: 'project.tsx' },
    ],
}

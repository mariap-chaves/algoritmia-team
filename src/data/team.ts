import type { TeamMember } from '../types/team'
import maria from '../assets/team/maria.webp'
import yuliana from '../assets/team/yuliana.webp'
import fiorella from '../assets/team/fiorella.webp'
import hugo from '../assets/team/hugo.webp'

// El orden de esta lista es el orden del carrusel y de la vista Equipo.
export const teamMembers: TeamMember[] = [
    {
        id: 'maria',
        number: '01',
        name: 'María Chaves',
        role: 'Backend developer, Database architect & DevOps',
        description:
            'Construyendo los servicios, diseño y mantenimiento de la base de datos y gestionando el proceso en producción y futuras actualizaciones.',
        photo: maria,
        photoFrame: { left: -3.61, top: 3.24, width: 125.91, height: 104 },
    },
    {
        id: 'yuliana',
        number: '02',
        name: 'Yuliana Masís',
        role: 'Frontend developer, Infrastructure/Cloud engineer & Project manager',
        description:
            'Desarrollo del frontend, infraestructura en la nube y coordinación de tareas y entregas del equipo.',
        photo: yuliana,
        photoFrame: { left: -5.82, top: 3.2, width: 139.94, height: 104 },
    },
    {
        id: 'fiorella',
        number: '03',
        name: 'Fiorella Salazar',
        role: 'Designer & QA tester',
        description:
            'Diseño de la interfaz en Figma y pruebas QA, manuales y con Playwright, en cada versión del sistema.',
        photo: fiorella,
        photoFrame: { left: -8.85, top: 3.2, width: 117.7, height: 104 },
    },
    {
        id: 'hugo',
        number: '04',
        name: 'Hugo Ugalde',
        role: 'Frontend developer, Marketing & Security',
        description: 'Pantallas de la app, presencia en redes y revisión de la seguridad del sistema.',
        photo: hugo,
        photoFrame: { left: -13.05, top: 3.25, width: 113.74, height: 124.97 },
    },
]

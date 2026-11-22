import type { ProjectFeature } from '../types/project'

export const project = {
    eyebrow: 'EL PROYECTO',
    title: 'Gloriana US · app.algorit.website',
    description:
        'Una plataforma para que las pacientes de Gloriana US, fisioterapeuta en San Vito de Coto Brus, agenden, paguen y sigan su proceso, y para que ella lo administre todo desde un panel.',
}

export const projectFeatures: ProjectFeature[] = [
    {
        number: '01',
        title: 'Citas en línea',
        description: 'Horarios disponibles, anticipo en línea y Google Calendar. Se puede reagendar y cancelar.',
    },
    {
        number: '02',
        title: 'Recepcionista con IA',
        description: 'Un chat que responde dudas y ayuda a agendar, reagendar y cancelar citas.',
    },
    {
        number: '03',
        title: 'Membresías y cursos',
        description: 'Suscripciones con pago en línea y cursos grabados por capítulos.',
    },
    {
        number: '04',
        title: 'Panel de la paciente',
        description: 'Próximas citas, historial y expediente con notas y archivos.',
    },
    {
        number: '05',
        title: 'Comunidad',
        description: 'Blog, foro y preguntas frecuentes para acompañar a las pacientes.',
    },
    {
        number: '06',
        title: 'Panel de administración',
        description: 'Agenda, citas, cursos, suscriptores y estadísticas de ganancia.',
    },
]

// Herramientas con las que se construyó el sistema
export const projectTools = [
    'Figma',
    'React + TypeScript',
    'Spring Boot',
    'Hosting en la nube',
    'Pagos en línea',
    'Google Calendar',
    'Playwright',
    'ES / EN',
]

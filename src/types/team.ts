// Caja de la foto dentro de la tarjeta, en % del ancho y alto de la tarjeta.
// Sale del encuadre que se ajustó en Figma (frame "Inicio · 1 María").
export type PhotoFrame = {
    left: number
    top: number
    width: number
    height: number
}

export type TeamMember = {
    id: string
    number: string
    name: string
    role: string
    description: string
    photo: string
    photoFrame: PhotoFrame
}

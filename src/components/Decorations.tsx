import stripesTop from '../assets/stripes-top.svg'
import stripesBottom from '../assets/stripes-bottom.svg'

type DecorationsProps = {
    variant: 'home' | 'team' | 'project'
}

// Franjas azules de la landing original (Figma: nodos 2:47 y 2:62).
// En Inicio van en las cuatro esquinas; en Equipo y Proyecto, solo dos y más suaves.
const pieces = {
    home: [
        { src: stripesTop, className: 'right-0 top-0 w-[190px] -scale-x-100 md:w-[260px] xl:w-[388px]' },
        { src: stripesBottom, className: 'bottom-0 right-0 w-[220px] md:w-[300px] xl:w-[446px]' },
        { src: stripesBottom, className: 'left-0 top-0 w-[170px] rotate-180 md:w-[240px] xl:w-[360px]' },
        { src: stripesTop, className: 'bottom-0 left-0 w-[150px] -scale-y-100 md:w-[220px] xl:w-[320px]' },
    ],
    team: [
        { src: stripesBottom, className: 'bottom-0 right-0 w-[150px] opacity-55 md:w-[220px] xl:w-[300px]' },
        { src: stripesBottom, className: 'left-0 top-0 w-[120px] rotate-180 opacity-55 md:w-[180px] xl:w-[240px]' },
    ],
    project: [
        { src: stripesTop, className: 'right-0 top-0 w-[130px] -scale-x-100 opacity-55 md:w-[190px] xl:w-[260px]' },
        { src: stripesTop, className: 'bottom-0 left-0 w-[120px] -scale-y-100 opacity-55 md:w-[180px] xl:w-[240px]' },
    ],
}

export default function Decorations({ variant }: DecorationsProps) {
    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
            {pieces[variant].map((piece, index) => (
                <img key={index} src={piece.src} alt="" className={`absolute h-auto ${piece.className}`} />
            ))}
        </div>
    )
}

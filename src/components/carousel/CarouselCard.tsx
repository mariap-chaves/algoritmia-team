import type { CSSProperties } from 'react'
import type { TeamMember } from '../../types/team'

export type CardPosition = 'center' | 'right' | 'hidden' | 'left'

type CarouselCardProps = {
    member: TeamMember
    position: CardPosition
    reducedMotion: boolean
    onSelect: () => void
}

// Posición de cada tarjeta en el carrusel giratorio. --card-w lo define TeamCarousel.
const positionStyles: Record<CardPosition, CSSProperties> = {
    center: {
        transform: 'translateX(-50%) translateZ(0) rotateY(0deg) scale(1)',
        zIndex: 4,
        opacity: 1,
        filter: 'none',
    },
    right: {
        transform: 'translateX(calc(-50% + var(--card-w) * 1.06)) translateZ(-160px) rotateY(-32deg) scale(0.86)',
        zIndex: 3,
        opacity: 1,
        filter: 'grayscale(0.5) brightness(0.6)',
    },
    left: {
        transform: 'translateX(calc(-50% - var(--card-w) * 1.06)) translateZ(-160px) rotateY(32deg) scale(0.86)',
        zIndex: 3,
        opacity: 1,
        filter: 'grayscale(0.5) brightness(0.6)',
    },
    hidden: {
        transform: 'translateX(-50%) translateZ(-420px) scale(0.7)',
        zIndex: 1,
        opacity: 0,
        filter: 'brightness(0.4)',
    },
}

export default function CarouselCard({ member, position, reducedMotion, onSelect }: CarouselCardProps) {
    const isActive = position === 'center'
    const isHidden = position === 'hidden'
    const { photoFrame } = member

    return (
        <button
            type="button"
            onClick={onSelect}
            tabIndex={isActive || isHidden ? -1 : 0}
            aria-hidden={isHidden || undefined}
            className={`absolute left-1/2 top-0 w-(--card-w) cursor-pointer overflow-hidden border bg-linear-to-b from-brand-card-top to-brand-card p-0 text-left shadow-[0_30px_60px_rgba(0,0,0,0.55)] ${
                isActive ? 'cursor-default border-brand-cyan' : 'border-brand-line'
            } ${reducedMotion ? '' : 'transition-[transform,opacity,filter] duration-550 ease-[cubic-bezier(.2,.7,.2,1)]'}`}
            style={{ ...positionStyles[position], aspectRatio: '340 / 500' }}
        >
            <img
                src={member.photo}
                alt={isActive ? member.name : ''}
                draggable={false}
                className="absolute max-w-none select-none"
                style={{
                    left: `${photoFrame.left}%`,
                    top: `${photoFrame.top}%`,
                    width: `${photoFrame.width}%`,
                    height: `${photoFrame.height}%`,
                }}
            />
            {!isActive && !isHidden && <span className="sr-only">Ver a </span>}
            <span className="absolute inset-x-0 bottom-0 flex flex-col bg-linear-to-b from-brand-card/0 to-brand-card/95 to-50% px-[6.5%] pb-[6%] pt-[24%]">
                <span className="text-[clamp(1.375rem,1.2rem+0.8vw,1.875rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
                    {member.name}
                </span>
                <span aria-hidden="true" className="mb-2 mt-2.5 h-0.5 w-[70%] bg-brand-cyan" />
                <span className="text-[0.8125rem] font-semibold leading-[1.4] text-brand-cyan">{member.role}</span>
            </span>
        </button>
    )
}

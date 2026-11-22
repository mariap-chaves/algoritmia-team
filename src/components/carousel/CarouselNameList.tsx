import type { CSSProperties } from 'react'
import type { TeamMember } from '../../types/team'

type CarouselNameListProps = {
    members: TeamMember[]
    active: number
    onSelect: (index: number) => void
}

export default function CarouselNameList({ members, active, onSelect }: CarouselNameListProps) {
    return (
        <ol className="flex flex-col items-center gap-1 md:flex-row md:flex-wrap md:justify-center md:gap-x-5.5 md:gap-y-2">
            {members.map((member, index) => {
                const isActive = index === active

                return (
                    <li key={member.id} className="relative">
                        {/* Barra inclinada que marca a la persona activa */}
                        <span
                            aria-hidden="true"
                            className={`absolute -inset-x-2 inset-y-0.5 -skew-x-14 bg-linear-to-r from-brand-blue to-brand-cyan transition-opacity duration-300 ${
                                isActive ? 'opacity-100' : 'opacity-0'
                            }`}
                        />
                        <button
                            type="button"
                            onClick={() => onSelect(index)}
                            aria-current={isActive ? 'true' : undefined}
                            className="relative flex cursor-pointer items-baseline gap-2.5 px-1.5 py-2 text-white"
                        >
                            <span
                                className="font-mono text-base font-bold text-transparent [-webkit-text-stroke:1px_var(--number-color)]"
                                style={{ '--number-color': isActive ? '#ffffff' : 'var(--color-brand-muted)' } as CSSProperties}
                            >
                                {member.number}
                            </span>
                            <span className="whitespace-nowrap text-base font-bold">{member.name}</span>
                        </button>
                    </li>
                )
            })}
        </ol>
    )
}

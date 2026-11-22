import type { TeamMember } from '../../types/team'

type TeamMemberCardProps = {
    member: TeamMember
}

// Hasta 1280 px la tarjeta es horizontal (foto a la izquierda) para que las 4 entren en una pantalla.
// Desde 1280 px es vertical y la foto ajusta su alto según el alto de la pantalla.
export default function TeamMemberCard({ member }: TeamMemberCardProps) {
    return (
        <article className="flex w-full flex-row overflow-hidden border border-brand-line bg-brand-card xl:flex-col">
            <div className="relative w-[38%] shrink-0 overflow-hidden bg-linear-to-b from-brand-card-top to-brand-card xl:h-[clamp(150px,calc(100dvh-600px),260px)] xl:w-auto">
                <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="absolute left-1/2 top-3.5 h-[118%] w-auto max-w-none -translate-x-1/2"
                />
                <span
                    aria-hidden="true"
                    className="absolute left-3 top-3 font-mono text-base font-bold text-transparent [-webkit-text-stroke:1px_var(--color-brand-cyan)] xl:left-4 xl:top-3.5 xl:text-lg"
                >
                    {member.number}
                </span>
            </div>

            <div className="flex min-h-50 grow flex-col gap-1.5 border-l-2 border-brand-cyan px-4 py-4 xl:min-h-0 xl:gap-2 xl:border-l-0 xl:border-t-2 xl:px-5 xl:pb-5 xl:pt-4">
                <h2 className="text-lg font-extrabold leading-[1.15] tracking-[-0.01em] text-white xl:text-[1.3125rem]">{member.name}</h2>
                <p className="text-[0.8125rem] font-semibold leading-[1.4] text-brand-cyan">{member.role}</p>
                <p className="mt-1 text-sm leading-normal text-brand-soft">{member.description}</p>
            </div>
        </article>
    )
}

import type { CSSProperties } from 'react'
import Decorations from '../components/Decorations'
import PageHeader from '../components/PageHeader'
import TeamMemberCard from '../components/team/TeamMemberCard'
import { teamMembers } from '../data/team'

export default function Team() {
    return (
        <section className="relative flex grow flex-col justify-center overflow-hidden px-5 py-8 md:px-[clamp(20px,8vw,120px)]">
            <title>Quiénes somos · Algoritmia</title>
            <Decorations variant="team" />

            <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-7 xl:gap-8">
                <div className="animate-enter">
                    <PageHeader
                        eyebrow="EL EQUIPO"
                        title="Quiénes somos"
                        description="Cada integrante llevó una parte del sistema, del diseño a producción."
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
                    {teamMembers.map((member, index) => (
                        <div
                            key={member.id}
                            className="animate-enter flex"
                            style={{ '--enter-delay': `${120 + index * 80}ms` } as CSSProperties}
                        >
                            <TeamMemberCard member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

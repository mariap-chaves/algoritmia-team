import type { CSSProperties } from 'react'
import Decorations from '../components/Decorations'
import TeamCarousel from '../components/carousel/TeamCarousel'
import { teamMembers } from '../data/team'

export default function Home() {
    return (
        <section className="relative flex grow flex-col items-center justify-center gap-5.5 overflow-hidden px-5 py-10 md:px-[clamp(20px,8vw,120px)] md:pb-9 md:pt-7">
            <title>Algoritmia · Equipo</title>
            <Decorations variant="home" />

            <h1 className="animate-enter relative z-10 text-center text-[clamp(1.75rem,2.9vw,2.625rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
                Somos Algoritmia,
                <br />
                <span className="text-brand-cyan">tus necesidades son nuestra prioridad.</span>
            </h1>

            <div className="animate-enter relative z-10 w-full" style={{ '--enter-delay': '120ms' } as CSSProperties}>
                <TeamCarousel members={teamMembers} />
            </div>
        </section>
    )
}

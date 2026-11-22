import { useRef, type CSSProperties, type TouchEvent } from 'react'
import { useCarousel } from '../../hooks/carousel/useCarousel'
import type { TeamMember } from '../../types/team'
import CarouselCard, { type CardPosition } from './CarouselCard'
import CarouselNameList from './CarouselNameList'

type TeamCarouselProps = {
    members: TeamMember[]
}

const positions: CardPosition[] = ['center', 'right', 'hidden', 'left']
const SWIPE_DISTANCE = 40

export default function TeamCarousel({ members }: TeamCarouselProps) {
    const { active, goTo, next, prev, pause, resume, reducedMotion } = useCarousel(members.length)
    const touchStartX = useRef<number | null>(null)

    function handleTouchStart(event: TouchEvent) {
        touchStartX.current = event.touches[0].clientX
        pause()
    }

    function handleTouchEnd(event: TouchEvent) {
        if (touchStartX.current !== null) {
            const distance = event.changedTouches[0].clientX - touchStartX.current
            if (distance <= -SWIPE_DISTANCE) next()
            if (distance >= SWIPE_DISTANCE) prev()
        }
        touchStartX.current = null
        resume()
    }

    return (
        <div
            className="flex w-full flex-col items-center gap-5.5"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onFocus={pause}
            onBlur={resume}
        >
            <div
                role="region"
                aria-roledescription="carrusel"
                aria-label="Integrantes del equipo"
                className="relative w-full perspective-[1400px]"
                style={{ '--card-w': 'max(220px, min(340px, 68vw, calc((100dvh - 390px) * 0.68)))', height: 'calc(var(--card-w) * 500 / 340 + 20px)' } as CSSProperties}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {members.map((member, index) => {
                    const offset = (index - active + members.length) % members.length

                    return (
                        <CarouselCard
                            key={member.id}
                            member={member}
                            position={positions[offset]}
                            reducedMotion={reducedMotion}
                            onSelect={() => goTo(index)}
                        />
                    )
                })}
            </div>

            <p className="sr-only" aria-live="polite">
                {`${members[active].name}, ${members[active].role}`}
            </p>

            <CarouselNameList members={members} active={active} onSelect={goTo} />
        </div>
    )
}

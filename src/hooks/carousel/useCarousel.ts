import { useCallback, useEffect, useState } from 'react'

type UseCarouselOptions = {
    // Tiempo entre cada cambio automático, en milisegundos.
    interval?: number
}

function prefersReducedMotion() {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useCarousel(count: number, { interval = 3500 }: UseCarouselOptions = {}) {
    const [active, setActive] = useState(0)
    const [paused, setPaused] = useState(false)
    const [reducedMotion] = useState(prefersReducedMotion)

    const goTo = useCallback((index: number) => {
        setActive(((index % count) + count) % count)
    }, [count])

    const next = useCallback(() => setActive((current) => (current + 1) % count), [count])
    const prev = useCallback(() => setActive((current) => (current - 1 + count) % count), [count])

    // Avance automático: se detiene con el mouse encima, con foco dentro,
    // con la pestaña oculta o si la persona pidió reducir el movimiento.
    // Al cambiar "active" (también con un clic) el contador vuelve a empezar.
    useEffect(() => {
        if (paused || reducedMotion || count < 2) return

        const timer = window.setTimeout(() => {
            if (!document.hidden) next()
        }, interval)

        return () => window.clearTimeout(timer)
    }, [active, paused, reducedMotion, count, interval, next])

    return {
        active,
        goTo,
        next,
        prev,
        pause: () => setPaused(true),
        resume: () => setPaused(false),
        reducedMotion,
    }
}

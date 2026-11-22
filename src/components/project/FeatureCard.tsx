import type { ProjectFeature } from '../../types/project'

type FeatureCardProps = {
    feature: ProjectFeature
}

export default function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <article className="flex w-full items-start gap-4 border border-brand-line bg-brand-card/80 px-5.5 py-5">
            <span
                aria-hidden="true"
                className="font-mono text-xl font-bold leading-[1.2] text-transparent [-webkit-text-stroke:1px_var(--color-brand-cyan)]"
            >
                {feature.number}
            </span>
            <div className="flex flex-col gap-1.5">
                <h2 className="text-[1.0625rem] font-bold text-white">{feature.title}</h2>
                <p className="text-sm leading-normal text-brand-soft">{feature.description}</p>
            </div>
        </article>
    )
}

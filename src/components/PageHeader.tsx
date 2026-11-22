type PageHeaderProps = {
    eyebrow: string
    title: string
    description?: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
    return (
        <header className="flex flex-col items-center gap-2.5 text-center">
            <p className="font-mono text-xs tracking-[0.16em] text-brand-cyan">{eyebrow}</p>
            <h1 className="text-[clamp(1.75rem,3vw,2.625rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">{title}</h1>
            {description && <p className="max-w-180 text-base leading-normal text-brand-soft">{description}</p>}
        </header>
    )
}

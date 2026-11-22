import type { CSSProperties } from 'react'
import Decorations from '../components/Decorations'
import PageHeader from '../components/PageHeader'
import FeatureCard from '../components/project/FeatureCard'
import ToolChip from '../components/project/ToolChip'
import { project, projectFeatures, projectTools } from '../data/project'

export default function Project() {
    return (
        <section className="relative flex grow flex-col justify-center overflow-hidden px-5 py-10 md:px-[clamp(20px,8vw,120px)] md:pb-12">
            <title>Proyecto Gloriana US · Algoritmia</title>
            <Decorations variant="project" />

            <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-9">
                <div className="animate-enter">
                    <PageHeader eyebrow={project.eyebrow} title={project.title} description={project.description} />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {projectFeatures.map((feature, index) => (
                        <div
                            key={feature.number}
                            className="animate-enter flex"
                            style={{ '--enter-delay': `${120 + index * 60}ms` } as CSSProperties}
                        >
                            <FeatureCard feature={feature} />
                        </div>
                    ))}
                </div>

                <ul
                    aria-label="Herramientas que usamos"
                    className="animate-enter flex flex-wrap justify-center gap-2.5"
                    style={{ '--enter-delay': '520ms' } as CSSProperties}
                >
                    {projectTools.map((tool) => (
                        <ToolChip key={tool} label={tool} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

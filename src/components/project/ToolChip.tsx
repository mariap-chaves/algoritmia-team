type ToolChipProps = {
    label: string
}

export default function ToolChip({ label }: ToolChipProps) {
    return <li className="border border-brand-line px-3 py-1.5 font-mono text-xs text-brand-soft">{label}</li>
}

import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'
import { navLinks, SYSTEM_URL } from '../data/site'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    // El menú móvil se cierra con Escape
    useEffect(() => {
        if (!isOpen) return

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') setIsOpen(false)
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen])

    const linkClass = 'text-[0.9375rem] transition-colors duration-300'
    const inactiveLinkProps = { className: 'font-medium text-brand-ice hover:text-brand-cyan' }
    const activeLinkProps = { className: 'font-semibold text-brand-cyan', 'aria-current': 'page' as const }
    const systemButtonClass =
        'items-center gap-1.5 border-[1.5px] border-brand-cyan px-6 py-3 text-[0.9375rem] font-semibold text-brand-cyan hover:bg-brand-cyan hover:text-brand-bg'

    return (
        <>
            {/* Fondo con blur del menú móvil: fijo, para no alterar el alto de la página */}
            <div
                aria-hidden="true"
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-10 bg-brand-bg/40 transition-[opacity,backdrop-filter,visibility] duration-300 motion-reduce:transition-none lg:hidden ${
                    isOpen ? 'visible opacity-100 backdrop-blur-sm' : 'invisible opacity-0 backdrop-blur-none'
                }`}
            />
            <header className="site-nav relative z-20 border-b border-brand-line/60 bg-brand-bg">
                <nav aria-label="Principal" className="mx-auto flex max-w-360 items-center justify-between gap-6 px-5 py-5 md:px-[clamp(20px,8vw,120px)]">
                    <Link to="/" aria-label="Algoritmia, inicio" onClick={() => setIsOpen(false)}>
                        <img src={logo} alt="Algoritmia" className="block h-4.5 w-auto md:h-5.5" />
                    </Link>

                    <ul className="hidden items-center gap-9 lg:flex">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    activeOptions={{ exact: true }}
                                    className={linkClass}
                                    activeProps={activeLinkProps}
                                    inactiveProps={inactiveLinkProps}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <a href={SYSTEM_URL} target="_blank" rel="noreferrer" className={`hidden transition-colors duration-300 lg:inline-flex ${systemButtonClass}`}>
                        Ver el sistema
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-expanded={isOpen}
                        aria-controls="menu-movil"
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        className="flex size-11 items-center justify-center border border-brand-line text-brand-ice lg:hidden"
                    >
                        {/* El ícono gira al cambiar entre hamburguesa y X */}
                        <span className="relative size-5">
                            <Menu
                                aria-hidden="true"
                                className={`absolute inset-0 size-5 transition-[transform,opacity] duration-300 motion-reduce:transition-none ${
                                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                                }`}
                            />
                            <X
                                aria-hidden="true"
                                className={`absolute inset-0 size-5 transition-[transform,opacity] duration-300 motion-reduce:transition-none ${
                                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                                }`}
                            />
                        </span>
                    </button>
                </nav>

                {/* Menú móvil: siempre montado para poder animar la entrada y la salida */}
                <div
                    id="menu-movil"
                    className={`absolute inset-x-0 top-full z-20 origin-top border-b border-brand-line/60 bg-brand-bg/95 px-5 pb-6 pt-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
                        isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
                    }`}
                >
                    <ul className="flex flex-col">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.to}
                                className={`transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
                                    isOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
                                }`}
                                style={{ transitionDelay: isOpen ? `${80 + index * 50}ms` : '0ms' }}
                            >
                                <Link
                                    to={link.to}
                                    activeOptions={{ exact: true }}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-3 ${linkClass}`}
                                    activeProps={activeLinkProps}
                                    inactiveProps={inactiveLinkProps}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={SYSTEM_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-3 flex w-full justify-center ${systemButtonClass} transition-[opacity,transform,background-color,color] duration-300 ease-out motion-reduce:transition-none ${
                            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                        }`}
                        style={{ transitionDelay: isOpen ? `${80 + navLinks.length * 50}ms` : '0ms' }}
                    >
                        Ver el sistema
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                </div>
            </header>
        </>
    )
}

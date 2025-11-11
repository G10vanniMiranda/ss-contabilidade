'use client'

import React, { useState, useEffect } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (open) {
            const original = document.body.style.overflow
            document.body.style.overflow = 'hidden'
            return () => {
                document.body.style.overflow = original
            }
        }
    }, [open])

    return (
        <>
            {/* HEADER FIXO */}
            <header
                className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 ${
                    scrolled
                        ? 'backdrop-blur-md bg-[#1C1C1C]/90 shadow-[0_0_25px_rgba(255,255,255,0.05)] border-b border-[#3A3A3A]/50'
                        : 'bg-gradient-to-b from-[#2A2A2A]/80 via-[#1C1C1C]/60 to-transparent'
                }`}
            >
                <div className="flex items-center justify-between h-20 md:h-28 px-6 md:px-28">
                    {/* Logo */}
                    <Image src="/logo-branca.png" alt="logo" width={100} height={100} priority />

                    {/* Botão mobile */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center space-y-1"
                        onClick={() => setOpen(true)}
                        aria-label="Abrir menu"
                    >
                        <span className="block w-8 h-1 bg-gray-300 rounded"></span>
                        <span className="block w-8 h-1 bg-gray-300 rounded"></span>
                        <span className="block w-8 h-1 bg-gray-300 rounded"></span>
                    </button>

                    {/* Menu desktop */}
                    <nav className="hidden md:flex items-center gap-12">
                        {[
                            { href: '/', label: 'Início' },
                            { href: '/servico', label: 'Serviços' },
                            { href: '/sobre', label: 'Sobre' },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`relative text-gray-200 tracking-wide transition group ${
                                    pathname === href ? 'text-gray-100' : 'hover:text-gray-50'
                                }`}
                            >
                                {label}
                                <span
                                    className={`absolute bottom-[-6px] left-0 h-[2px] w-0 bg-gradient-to-r from-gray-400 to-gray-100 rounded-full transition-all duration-300 group-hover:w-full ${
                                        pathname === href ? 'w-full' : ''
                                    }`}
                                ></span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            {/* MODAL MOBILE (fora do header, z-index superior) */}
            {open && (
                <div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0E0E0E]/95 backdrop-blur-xl 
                    animate-fade-in overflow-hidden"
                >
                    {/* Botão fechar */}
                    <button
                        className="absolute top-8 right-8 z-20 text-gray-300 hover:text-white transition-transform hover:rotate-90 duration-300"
                        onClick={() => setOpen(false)}
                    >
                        <IoIosCloseCircleOutline className="text-4xl" />
                    </button>

                    {/* Links */}
                    <nav className="relative z-10 flex flex-col items-center justify-center gap-10 text-center">
                        {[
                            { href: '/', label: 'Início' },
                            { href: '/servico', label: 'Serviços' },
                            { href: '/sobre', label: 'Sobre' },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`text-3xl font-medium tracking-wide relative group transition-all duration-300 ${
                                    pathname === href ? 'text-white' : 'text-gray-300 hover:text-gray-100'
                                }`}
                            >
                                {label}
                                <span
                                    className={`absolute bottom-[-6px] left-0 h-[2px] w-0 bg-gradient-to-r from-gray-400 to-gray-100 rounded-full transition-all duration-300 group-hover:w-full ${
                                        pathname === href ? 'w-full' : ''
                                    }`}
                                ></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Efeito visual no fundo */}
                    <div className="absolute z-0 pointer-events-none w-[600px] h-[600px] bg-gray-400/10 blur-[200px] rounded-full animate-pulseSoft"></div>
                </div>
            )}
        </>
    )
}
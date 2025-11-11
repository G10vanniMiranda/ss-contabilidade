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
            <header
                className={`site-header fixed top-0 left-0 right-0 w-screen z-[100] transition-all duration-300 will-change-transform ${
                scrolled
                    ? 'backdrop-blur-md bg-[#1C1C1C]/90 shadow-[0_0_25px_rgba(255,255,255,0.05)] border-b border-[#3A3A3A]/50'
                    : 'bg-gradient-to-b from-[#2A2A2A]/80 via-[#1C1C1C]/60 to-transparent'
            }`}
        >
            <div className="flex items-center justify-between h-20 md:h-28 px-6 md:px-28">
                {/* Logo */}
                <Image src="/logo-branca.png" alt="logo" width={100} height={100} priority />

                {/* Botão hamburguer (mobile) */}
                <button
                    className="md:hidden flex flex-col justify-center items-center space-y-1"
                    onClick={() => setOpen(!open)}
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

            {/* Menu Mobile */}
                    {open && (
                        <div className="fixed inset-0 bg-[#1C1C1C]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 z-[110] animate-fade-in">
                    <button
                        className="absolute top-6 right-6 text-gray-300 hover:text-white transition"
                        onClick={() => setOpen(false)}
                    >
                        <IoIosCloseCircleOutline className="text-4xl" />
                    </button>

                    {[
                        { href: '/', label: 'Início' },
                        { href: '/servico', label: 'Serviços' },
                        { href: '/sobre', label: 'Sobre' },
                    ].map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            className={`text-gray-200 text-2xl tracking-wide relative group ${
                                pathname === href ? 'text-white' : 'hover:text-gray-50'
                            }`}
                        >
                            {label}
                            <span
                                className={`absolute bottom-[-4px] left-0 h-[2px] w-0 bg-gradient-to-r from-gray-400 to-gray-100 rounded-full transition-all duration-300 group-hover:w-full ${
                                    pathname === href ? 'w-full' : ''
                                }`}
                            ></span>
                        </Link>
                    ))}
                </div>
            )}
        </header>
    )
}
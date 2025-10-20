'use client'

import React, { useState, useEffect } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open (mobile)
    useEffect(() => {
        if (open) {
            const original = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = original;
            };
        }
    }, [open]);

    return (
        <div className={`fixed top-0 left-0 w-full h-20 md:h-28 z-50 bg-white flex items-center justify-between p-8 md:px-28 transition-shadow duration-300 ${scrolled ? "shadow-md border-b border-gray-200" : ""}`}>
            <Image src="/logo.png" alt="logo" width={100} height={100} />

            <button
                className="md:hidden flex flex-col justify-center items-center"
                onClick={() => setOpen(!open)}
                aria-label="Abrir menu"
            >
                <span className="block w-8 h-1 bg-black mb-1 rounded"></span>
                <span className="block w-8 h-1 bg-black mb-1 rounded"></span>
                <span className="block w-8 h-1 bg-black mb-1 rounded"></span>

            </button>

            <div className='hidden md:flex items-center gap-10'>
                <Link
                    href="/"
                    className={`text-black border-b-2 transition ${pathname === "/" ? "border-black" : "border-transparent hover:border-black"
                        }`}
                >
                    Inicio
                </Link>

                <Link
                    href="/servico"
                    className={`text-black border-b-2 transition ${pathname === "/servico" ? "border-black" : "border-transparent hover:border-black"
                        }`}
                >
                    Serviços
                </Link>

                <Link
                    href="/sobre"
                    className={`text-black border-b-2 transition ${pathname === "/sobre" ? "border-black" : "border-transparent hover:border-black"
                        }`}
                >
                    Sobre
                </Link>
            </div>

            {open && (
                <div role="dialog" aria-modal="true" className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur flex flex-col items-center justify-center gap-6 z-50">

                    <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setOpen(false)}>
                        <IoIosCloseCircleOutline className='text-black text-3xl' />
                    </div>

                    <div className='flex flex-col items-center gap-4 mt-10'>
                        <Link
                            href="/"
                            onClick={() => setOpen(false)}
                            className={`text-black border-b-2 transition ${pathname === "/" ? "border-black" : "border-transparent hover:border-black"
                                }`}
                        >
                            Inicio
                        </Link>

                        <Link
                            href="/servico"
                            onClick={() => setOpen(false)}
                            className={`text-black border-b-2 transition ${pathname === "/servico" ? "border-black" : "border-transparent hover:border-black"
                                }`}
                        >
                            Serviços
                        </Link>

                        <Link
                            href="/sobre"
                            onClick={() => setOpen(false)}
                            className={`text-black border-b-2 transition ${pathname === "/sobre" ? "border-black" : "border-transparent hover:border-black"
                                }`}
                        >
                            Sobre
                        </Link>
                    </div>

                </div>
            )}

        </div>
    )
}
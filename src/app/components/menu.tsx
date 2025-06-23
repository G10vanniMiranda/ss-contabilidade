'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-white w-full h-26 flex items-center justify-between px-10'>

            <Image src="/logo.png" alt="logo" width={100} height={100} />

            <button
                className="md:hidden flex flex-col justify-center items-center"
                onClick={() => setOpen(!open)}
                aria-label="Abrir menu"
            >
                <span className="block w-8 h-1 bg-black mb-1 rounded"></span>
                <span className="block w-8 h-1 bg-black mb-1 rounded"></span>
                <span className="block w-8 h-1 bg-black rounded"></span>
            </button>

            <div className='hidden md:flex items-center gap-6'>
                <Link href="/" className='text-black'>Inicio</Link>
                <Link href="/servico" className='text-black'>Serviços</Link>
                <Link href="/sobre" className='text-black'>Sobre</Link>
                <Link href="/contato" className='text-black'>Contato</Link>
            </div>

            {open && (
                <div className="md:hidden absolute top-0 left-0 w-full h-96 bg-white flex flex-col items-center justify-center gap-6">
                    <Link href="/" className='text-black'>Inicio</Link>
                    <Link href="/servico" className='text-black'>Serviços</Link>
                    <Link href="/sobre" className='text-black'>Sobre</Link>
                    <Link href="/contato" className='text-black'>Contato</Link>
                </div>
            )}

        </div>
    )
}

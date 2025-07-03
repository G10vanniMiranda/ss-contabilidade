'use client'

import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <div className='fixed top-0 left-0 w-full h-20 md:h-28 z-50 bg-white flex items-center justify-between p-8 md:px-28'>

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
                <Link href="/" className='text-black'>Inicio</Link>
                <Link href="/servico" className='text-black'>Serviços</Link>
                <Link href="/sobre" className='text-black'>Sobre</Link>
            </div>

            {open && (
                <div className="md:hidden absolute top-0 left-0 w-full h-96 bg-white flex flex-col items-center justify-center gap-6">
                    <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setOpen(false)}>
                        <IoIosCloseCircleOutline className='text-black text-3xl' />
                    </div>

                    <div className='flex flex-col items-center gap-4'>
                        <Link href="/" className='text-black'>Inicio</Link>
                        <Link href="/servico" className='text-black'>Serviços</Link>
                        <Link href="/sobre" className='text-black'>Sobre</Link>
                    </div>
                </div>
            )}

        </div>
    )
}

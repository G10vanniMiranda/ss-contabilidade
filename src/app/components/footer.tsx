import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='bg-black w-full h-auto flex flex-col md:flex-row gap-4 p-6'>

            <div className='flex flex-col gap-4'>

                <h1 className='text-white text-2xl font-bold'>Serviços</h1>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-white'>Contabilidade e consultoria para todo o Brasil.</h2>
                    <h2 className='text-white'>Localização: Avenida Presidente Dutra, 3500</h2>
                    <h2 className='text-white'>Bairro Olaria - Porto Velho - RO</h2>
                </div>

                <div className='flex gap-4 py-2'>

                    <FaFacebook className='text-white text-3xl' />

                    <FaInstagram className='text-white text-3xl' />

                    <FaWhatsapp className='text-white text-3xl' />

                </div>

            </div>

            <div className='flex flex-col gap-4'>

                <h2 className='text-white text-2xl font-bold'>Entre em contato:</h2>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-white'>Telefone: +55 (69) 99353-3868</h2>
                    <h2 className='text-white'>Telefone: +55 (69) 99386-6168</h2>
                    <h2 className='text-white'>williansscontabilidade@gmail.com</h2>
                    <h2 className='text-white'>atendimento.sscontabilidade@gmail.com</h2>
                </div>

            </div>

            <div className="flex justify-center items-center pt-4">
                <p className="text-white text-sm flex gap-1 justify-center text-center">Copyright 2025 |<Link className="border-b hover:text-green-600" href={"https://wa.me/5569999787798"}>Mi7anda.</Link></p>
            </div>

        </div>
    )
}

'use client'

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center relative pt-10">

            {/* SOBRE */}
            <section className="w-full h-auto flex flex-col items-center gap-10 md:mt-20 p-2 md:p-4">

                <div className="w-80 h-24 md:w-full flex flex-col items-center md:items-start md:px-20 justify-end">

                    <h1 className="text-3xl md:text-4xl font-semibold">Conheça a SS Contabilidade</h1>

                </div>

                <div className="w-80 md:w-full h-[400px] md:h-60 lg:h-44 flex flex-col md:flex-row gap-8 md:gap-28 md:px-20">

                    <div className="flex flex-col gap-2">

                        <h1 className="text-black text-xl font-semibold">Nossa Missão</h1>

                        <p className="text-black w-72 md:w-[278px] lg:w-[400px] xl:w-[530px] 2xl:w-[600px]">
                            Somos um escritório de contabilidade especializado em incentivos e benefícios fiscais, atuando em todo o Brasil para recuperação de créditos tributários e serviços nas áreas contábil, fiscal e de recursos humanos.
                        </p>

                    </div>

                    <div className="flex flex-col gap-2">

                        <h1 className="text-black text-xl font-semibold">Eficiência Contábil</h1>

                        <p className="text-black w-72 md:w-[278px] lg:w-[400px] xl:w-[530px] 2xl:w-[600px]">
                            Comprometemo-nos a oferecer soluções contábeis eficientes, garantindo a legalização e a otimização de recursos para nossos clientes, sempre com ética e transparência em todos os serviços prestados.
                        </p>

                    </div>

                </div>

            </section>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: .8, ease: "easeInOut" }}
                className="w-full h-64 md:h-[690px]
                bg-[url(/imagem.jpg)] bg-cover bg-center bg-no-repeat"
            >
            </motion.div>

            {/* LOCALIZAÇÃO */}
            <section className="w-full h-auto flex flex-col md:flex-row items-center md:mt-10 gap-10 md:gap-0 p-2">

                <div className="w-80 h-24 md:w-[580px] flex flex-col justify-end gap-4 mt-64 md:mt-36 md:px-20">

                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-semibold">Localização</h1>
                        <p className="text-black w-720">
                            Atendemos clientes em todo o Brasil, oferecendo serviços de contabilidade, recuperação de créditos tributários e incentivos fiscais.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-black text-xl font-semibold">Endereço</h1>
                        <p className="text-black w-720">
                            Rua José de Alencar, 2322 - Sala 12, Centro - Porto Velho, RO
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-black text-xl font-semibold">Horário</h1>
                        <p className="text-black w-720">
                            Seg a Sex - 08:00 até 12:00 e 14:00 até as 18:00
                        </p>
                    </div>

                </div>

                <div className="w-[350px] md:w-96 lg:w-[700px] flex justify-center p-2 mb-6">

                    <iframe
                        title="Mapa SS Contabilidade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.1902701955!2d-63.90709522423679!3d-8.768161989550425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cdde5b590af%3A0xc5151e8ec61ebe79!2sR.%20Jos%C3%A9%20de%20Alencar%2C%202322%20-%20Baixa%20da%20Uni%C3%A3o%2C%20Porto%20Velho%20-%20RO%2C%2076805-880!5e0!3m2!1spt-BR!2sbr!4v1759327750943!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="320"
                        style={{ border: 0, borderRadius: '12px', maxWidth: 600 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

            </section>

            {/** Botão do WhatsApp */}
            <div className="fixed bottom-10 right-10 z-50">

                <Link
                    href="https://wa.me/5569993533868"
                    className="flex items-center relative animate-pulse"
                    aria-label="Abrir conversa no WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="hidden md:block text-lg md:text-2xl text-white font-semibold bg-green-500 py-1 absolute right-[60px] w-48 px-3 rounded-l-full z-10">
                        Contato rápido
                    </p>
                    <Image
                        src="/whatsApp2.webp"
                        alt="Ícone do WhatsApp"
                        width={70}
                        height={70}
                        className="z-20"
                        priority
                    />
                </Link>

            </div>

        </div>
    );
}

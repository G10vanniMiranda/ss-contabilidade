'use client'

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Sobre() {
    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1C1C1C] via-[#2A2A2A] to-[#1C1C1C] text-gray-100 relative overflow-hidden pt-20">

            {/* Luz IA flutuante */}
            <motion.div
                className="absolute -top-32 left-10 w-[400px] h-[400px] bg-gray-400/10 blur-[180px] rounded-full"
                animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Cabeçalho */}
            <section className="relative w-full flex flex-col items-center text-center mb-20 px-4">
                <h1 className="text-metallic text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                    Conheça a SS Contabilidade
                </h1>
                <p className="text-gray-400 max-w-2xl leading-relaxed">
                    Transformamos números em estratégia. Atuamos com ética, tecnologia e foco em resultados para empresas em todo o Brasil.
                </p>
            </section>

            {/* Missão & Eficiência */}
            <section className="relative flex flex-col md:flex-row gap-16 md:gap-32 items-start justify-center w-full max-w-6xl px-6 md:px-20 mb-24">

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-4 md:w-1/2"
                >
                    <h2 className="text-2xl font-semibold text-metallic">Nossa Missão</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Somos um escritório contábil especializado em incentivos e benefícios fiscais, atuando em todo o Brasil com foco em recuperação de créditos tributários e consultoria nas áreas contábil, fiscal e de RH.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-4 md:w-1/2"
                >
                    <h2 className="text-2xl font-semibold text-metallic">Eficiência Contábil</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Oferecemos soluções contábeis eficientes, garantindo legalização, conformidade fiscal e otimização de recursos para nossos clientes, com ética, transparência e inovação.
                    </p>
                </motion.div>

            </section>

            {/* Imagem Institucional */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-full h-64 md:h-[600px] bg-[url(/imagem.jpg)] bg-cover bg-center bg-no-repeat mb-28"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/90 via-transparent to-transparent" />
            </motion.div>

            {/* Localização */}
            <section className="relative w-full flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20 px-6 md:px-20 mb-24">

                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 md:w-1/2"
                >
                    <h2 className="text-3xl font-bold text-metallic">Localização</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Atendemos clientes em todo o Brasil com consultoria fiscal e contábil especializada. Nossa sede está localizada em Porto Velho - RO.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-1">Endereço</h3>
                        <p className="text-gray-400">Rua José de Alencar, 2322 - Sala 12, Centro - Porto Velho, RO</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-1">Horário de Atendimento</h3>
                        <p className="text-gray-400">Seg a Sex: 08:00 às 12:00 | 14:00 às 18:00</p>
                    </div>
                </motion.div>

                {/* Mapa */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center w-full md:w-1/2"
                >
                    <div className="glass border border-gray-700/50 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.05)] p-2 md:p-3 w-[350px] md:w-[600px]">
                        <iframe
                            title="Mapa SS Contabilidade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.1902701955!2d-63.90709522423679!3d-8.768161989550425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cdde5b590af%3A0xc5151e8ec61ebe79!2sR.%20Jos%C3%A9%20de%20Alencar%2C%202322%20-%20Baixa%20da%20Uni%C3%A3o%2C%20Porto%20Velho%20-%20RO%2C%2076805-880!5e0!3m2!1spt-BR!2sbr!4v1759327750943!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="340"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </section>

            {/* Botão WhatsApp */}
            <WhatsAppButton />
        </main>
    );
}

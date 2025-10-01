'use client';

import { motion } from "motion/react";
import ServicoCard from "../components/ServicoCard";
import Image from "next/image";
import Link from "next/link";

export default function Servico() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center relative">

            <section className="w-full md:max-w-[1280px] mx-auto h-auto flex flex-col items-center mt-20 md:mt-28 p-4 pb-32">

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="w-80 h-auto md:w-[580px] flex flex-col items-center justify-center text-center"
                >
                    <h1 className="text-3xl font-bold">Nossos Serviços</h1>
                    <p className="mt-2">
                        Contabilidade especializada com foco em créditos tributários e incentivos fiscais, atendendo empresas em todo o Brasil com soluções inteligentes e personalizadas.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="w-full h-auto flex flex-col md:flex-row gap-20 md:gap-8 items-center justify-center"
                >
                    <ServicoCard
                        imagem="/anexo1.avif"
                        titulo="Recuperação de Créditos"
                        descricao="Identificamos e recuperamos créditos tributários que podem beneficiar sua empresa financeiramente."
                    />
                    <ServicoCard
                        imagem="/anexo2.avif"
                        titulo="Consultoria Fiscal"
                        descricao="Ajudamos empresas a maximizar benefícios fiscais e a entender suas obrigações tributárias."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="w-full h-auto flex flex-col md:flex-row gap-20 md:gap-8 items-center justify-center mt-20"
                >
                    <ServicoCard
                        imagem="/anexo3.avif"
                        titulo="Incentivos Fiscais"
                        descricao="Recuperação de créditos tributários e benefícios fiscais."
                    />
                    <ServicoCard
                        imagem="/anexo4.avif"
                        titulo="Regularização Fiscal"
                        descricao="Apoio completo em legalização e contabilidade para empresas."
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    className="w-full h-auto flex flex-col md:flex-row gap-20 md:gap-8 items-center justify-center mt-20"
                >
                    <ServicoCard
                        imagem="/anexo5.avif"
                        titulo="RH e Folha de Pagamento"
                        descricao="Gestão estratégica de pessoas e processos salariais, garantindo conformidade legal, eficiência e valorização dos colaboradores."
                    />
                    <ServicoCard
                        imagem="/anexo6.avif"
                        titulo="Contabilidade"
                        descricao="Organização financeira, cumprimento de obrigações fiscais e apoio estratégico para a saúde e crescimento do negócio."
                    />
                </motion.div>

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
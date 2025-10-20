import ServicoCard from "../components/ServicoCard";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import MotionFadeIn from "../components/MotionFadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Serviços | SS Contabilidade",
    description: "Conheça os serviços da SS Contabilidade: recuperação de créditos, consultoria fiscal, incentivos, regularização, RH e contabilidade.",
};

export default function Servico() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center relative">

            <section className="w-full md:max-w-[1280px] mx-auto h-auto flex flex-col items-center mt-20 md:mt-28 p-4 pb-32">

                <SectionHeader
                  title="Nossos Serviços"
                  subtitle="Contabilidade especializada com foco em créditos tributários e incentivos fiscais, atendendo empresas em todo o Brasil com soluções inteligentes e personalizadas."
                  className="w-80 md:w-[580px]"
                />

                <MotionFadeIn delay={0.1} className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 items-start justify-items-center mt-10">
                    <ServicoCard
                        imagem="/anexo1.avif"
                        titulo="Recuperação de Créditos"
                        descricao="Identificamos e recuperamos créditos tributários que podem beneficiar sua empresa financeiramente."
                        ctaHref="/contato"
                        ctaLabel="Solicitar análise"
                        priorityImage
                    />
                    <ServicoCard
                        imagem="/anexo2.avif"
                        titulo="Consultoria Fiscal"
                        descricao="Ajudamos empresas a maximizar benefícios fiscais e a entender suas obrigações tributárias."
                        ctaHref="/contato"
                        ctaLabel="Falar com especialista"
                    />
                </MotionFadeIn>

                <MotionFadeIn delay={0.2} className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 items-start justify-items-center mt-20">
                    <ServicoCard
                        imagem="/anexo3.avif"
                        titulo="Incentivos Fiscais"
                        descricao="Recuperação de créditos tributários e benefícios fiscais."
                        ctaHref="/contato"
                    />
                    <ServicoCard
                        imagem="/anexo4.avif"
                        titulo="Regularização Fiscal"
                        descricao="Apoio completo em legalização e contabilidade para empresas."
                        ctaHref="/contato"
                    />
                </MotionFadeIn>

                <MotionFadeIn delay={0.3} className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 items-start justify-items-center mt-20">
                    <ServicoCard
                        imagem="/anexo5.avif"
                        titulo="RH e Folha de Pagamento"
                        descricao="Gestão estratégica de pessoas e processos salariais, garantindo conformidade legal, eficiência e valorização dos colaboradores."
                        ctaHref="/contato"
                    />
                    <ServicoCard
                        imagem="/anexo6.avif"
                        titulo="Contabilidade"
                        descricao="Organização financeira, cumprimento de obrigações fiscais e apoio estratégico para a saúde e crescimento do negócio."
                        ctaHref="/contato"
                    />
                </MotionFadeIn>

            </section>

            {/** Botão do WhatsApp */}
            <div className="fixed bottom-10 right-10 z-50">

                <Link
                    href="https://wa.me/5569993533868"
                    className="flex items-center relative animate-pulse focus:outline-none focus:ring-4 focus:ring-green-300"
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
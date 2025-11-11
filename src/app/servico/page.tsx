import ServicoCard from "../components/ServicoCard";
// removed unused Image and Link imports
import WhatsAppButton from "../components/WhatsAppButton";
import SectionHeader from "../components/SectionHeader";
import MotionFadeIn from "../components/MotionFadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Serviços | SS Contabilidade",
    description:
        "Conheça os serviços da SS Contabilidade: recuperação de créditos, consultoria fiscal, incentivos, regularização, RH e contabilidade.",
};

export default function Servico() {
    return (
        <main className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1C1C1C] via-[#2A2A2A] to-[#1C1C1C] relative overflow-hidden pt-24 pb-28 px-4 md:px-20">
            {/* Luz IA flutuante */}
            <div className="absolute -top-32 right-10 w-[400px] h-[400px] bg-gray-400/10 blur-[180px] rounded-full animate-pulseSoft" />
            <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gray-400/5 blur-[200px] rounded-full animate-float" />

            {/* Cabeçalho */}
            <SectionHeader
                title="Nossos Serviços"
                subtitle="Soluções contábeis inteligentes, com foco em créditos tributários, incentivos fiscais e regularização empresarial."
                className="text-center text-metallic drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] max-w-2xl"
            />

            {/* Primeira linha */}
            <MotionFadeIn
                delay={0.1}
                className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 place-items-center"
            >
                <ServicoCard
                    imagem="/anexo1.avif"
                    titulo="Recuperação de Créditos"
                    descricao="Identificamos e recuperamos créditos tributários que podem beneficiar sua empresa financeiramente."
                    ctaHref="/contato"
                    ctaLabel="Falar com especialista"
                    className="glass border border-gray-700/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                    priorityImage
                />

                <ServicoCard
                    imagem="/anexo2.avif"
                    titulo="Consultoria Fiscal"
                    descricao="Ajudamos empresas a maximizar benefícios fiscais e compreender as obrigações tributárias com clareza e segurança."
                    ctaHref="/contato"
                    ctaLabel="Falar com especialista"
                    className="glass border border-gray-700/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                />
            </MotionFadeIn>

            {/* Segunda linha */}
            <MotionFadeIn
                delay={0.2}
                className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 place-items-center"
            >
                <ServicoCard
                    imagem="/anexo3.avif"
                    titulo="Incentivos Fiscais"
                    descricao="Analisamos e implementamos regimes especiais para maximizar os benefícios fiscais de sua empresa."
                    ctaHref="/contato"
                    ctaLabel="Falar com especialista"
                    className="glass border border-gray-700/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                />

                <ServicoCard
                    imagem="/anexo4.avif"
                    titulo="Regularização Fiscal"
                    descricao="Apoio completo em legalização e conformidade tributária, garantindo segurança para seu negócio."
                    ctaHref="/contato"
                    ctaLabel="Falar com especialista"
                    className="glass border border-gray-700/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                />
            </MotionFadeIn>

            {/* Terceira linha */}
            <MotionFadeIn
                delay={0.3}
                className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 place-items-center"
            >
                <ServicoCard
                    imagem="/anexo5.avif"
                    titulo="RH e Folha de Pagamento"
                    descricao="Gestão estratégica de pessoas e processos, garantindo eficiência, valorização e conformidade legal."
                    ctaHref="/contato"
                    ctaLabel="Falar com especialista"
                    className="glass border border-gray-700/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                />

                <ServicoCard
                    imagem="/anexo6.avif"
                    titulo="Contabilidade Empresarial"
                    descricao="Organização financeira, cumprimento de obrigações fiscais e apoio estratégico para o crescimento sustentável."
                    ctaHref="/contato"
                    ctaLabel="Falar com especialista"
                    className="glass border border-gray-700/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                />
            </MotionFadeIn>

            {/* WhatsApp flutuante */}
            <WhatsAppButton />
        </main>
    );
}
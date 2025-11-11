
import Image from "next/image";
import Link from "next/link";

interface ServicoCardProps {
    imagem: string;
    titulo: string;
    descricao: string;
    ctaHref?: string;
    ctaLabel?: string;
    priorityImage?: boolean;
    className?: string;
}

export default function ServicoCard({
    imagem,
    titulo,
    descricao,
    ctaHref,
    ctaLabel = "Falar com especialista",
    priorityImage = false,
    className,
}: ServicoCardProps) {
    return (
        <div className="w-auto gap-4 mt-4 md:mt-8 pb-32 md:pb-28 relative">
            <div className="relative w-[300px] md:w-[350px] lg:w-[480px] xl:w-[560px] h-72 mt-8 md:mt-0">
                <Image
                    src={imagem}
                    quality={100}
                    fill
                    alt={titulo}
                    className="rounded-xl object-cover"
                    priority={priorityImage}
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 560px"
                />

                <div
                    className={[
                        "absolute left-1/2 -translate-x-1/2 -bottom-28 w-72 md:w-[88%] h-40 px-4 py-3 backdrop-blur-sm rounded-xl flex flex-col items-center",
                        // Se receber classe 'glass', evitamos o fundo sólido padrão para não conflitar
                        className && className.includes('glass')
                            ? ""
                            : "bg-[#1E1E1E]/95 border border-[#2F2F2F] shadow-lg",
                        className || ""
                    ].join(' ').trim()}
                >
                    <h3 className="text-lg font-semibold text-center mt-1 text-white tracking-tight">{titulo}</h3>
                    <p className="mt-2 text-center text-sm text-gray-300 leading-relaxed">{descricao}</p>

                    {ctaHref && (
                        <Link
                            href={ctaHref}
                            className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-5 py-2 rounded-xl text-white text-sm font-semibold shadow-lg hover:shadow-blue-500/30 transition focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                            aria-label={`${ctaLabel} - ${titulo}`}
                        >
                            {ctaLabel}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
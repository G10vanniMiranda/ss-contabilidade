
import Image from "next/image";
import Link from "next/link";

interface ServicoCardProps {
    imagem: string;
    titulo: string;
    descricao: string;
    ctaHref?: string;
    ctaLabel?: string;
    priorityImage?: boolean;
}

export default function ServicoCard({
    imagem,
    titulo,
    descricao,
    ctaHref,
    ctaLabel = "Saiba mais",
    priorityImage = false,
}: ServicoCardProps) {
    return (
        <div className="w-auto gap-4 mt-4 md:mt-8 relative">

            <div className="w-[300px] md:w-[350px] lg:w-[490px] xl:w-[600px] h-72 flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0 relative">

                <Image
                    src={imagem}
                    quality={100}
                    fill
                    alt={titulo}
                    className="rounded-xl object-cover relative z-0"
                    priority={priorityImage}
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 600px"
                />

                <div className="w-72 h-36 md:w-[90%] flex flex-col items-center p-2 bg-white absolute left-1/2 -translate-x-1/2 -bottom-28 z-10 rounded-xl shadow-md">

                    <h3 className="text-lg font-semibold text-center mt-2">{titulo}</h3>

                    <p className="mt-2 text-center text-sm text-gray-600">{descricao}</p>

                    {ctaHref && (
                        <Link
                          href={ctaHref}
                          className="mt-3 inline-flex px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
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
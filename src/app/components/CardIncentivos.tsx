
import Image from "next/image";
import Link from "next/link";

interface CardIncentivosProps {
    imagem: string;
    alt: string;
    titulo: string;
    descricao: string;
    botaoTexto?: string;
    botaoLink?: string;
}

export default function CardIncentivos({
    imagem,
    alt,
    titulo,
    descricao,
    botaoTexto,
    botaoLink,
}: CardIncentivosProps) {
    return (
        <div className="flex flex-col items-center bg-zinc-500 h-[450px] rounded-xl shadow-xl p-8 w-full max-w-sm hover:scale-105 
        transition-transform duration-300 relative">

            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-zinc-200 shadow">
                <Image src={imagem} alt={alt} fill className="object-cover" />
            </div>

            <h3 className="text-2xl font-semibold text-white mb-2 text-center">{titulo}</h3>

            <p className="text-white text-center mb-4">{descricao}</p>

            <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                {botaoTexto && botaoLink && (
                    <Link
                        href={botaoLink}
                        className="mt-2 px-5 py-2 bg-green-600 text-white rounded-lg font-medium shadow hover:bg-green-700 transition"
                    >
                        {botaoTexto}
                    </Link>
                )}
            </div>
        </div>
    );
}
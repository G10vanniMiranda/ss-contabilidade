import Image from "next/image";
import { FaStar } from "react-icons/fa6";

interface DepoimentoCardProps {
    nome: string;
    imagem: string;
    alt: string;
    depoimento: string;
    estrelas?: number;
}

export default function DepoimentoCard({
    nome,
    imagem,
    alt,
    depoimento,
    estrelas = 5,
}: DepoimentoCardProps) {
    return (
        <div className="w-72 h-[410px] bg-zinc-300 flex flex-col items-center mt-10 p-6 rounded-xl border border-zinc-400 shadow-lg relative">

            {/* Imagem flutuante */}
            <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg bg-white">
                <Image src={imagem} alt={alt} fill className="object-cover" />
            </div>

            {/* Espaço para a imagem flutuante */}
            <div className="h-16" />

            <div className="w-full h-auto flex flex-col items-center">

                <h1 className="text-2xl font-bold text-center mb-2">{nome}</h1>

                <div className="flex space-x-2">
                    {Array.from({ length: estrelas }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-500 w-7 h-7" />
                    ))}
                </div>

            </div>

            <div className="w-64 h-52 bg-zinc-400 text-center p-4 mt-4 rounded">
                {depoimento}
            </div>

        </div>
    );
}
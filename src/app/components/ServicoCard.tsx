
import Image from "next/image";

interface ServicoCardProps {
    imagem: string;
    titulo: string;
    descricao: string;
    botaoTexto?: string;
    onClick?: () => void;
}

export default function ServicoCard({
    imagem,
    titulo,
    descricao,
    botaoTexto = "Saiba Mais",
    onClick,
}: ServicoCardProps) {
    return (
        <div className="w-auto gap-4 mt-4 md:mt-8 relative">

            <div className="w-[300px] md:w-[350px] lg:w-[490px] xl:w-[600px] h-72 flex flex-col md:flex-row items-center justify-center mt-10 md:mt-0 relative">

                <Image
                    src={imagem}
                    quality={100}
                    fill
                    alt={titulo}
                    className="bg-red-400 rounded-xl object-cover relative z-0"
                />

                <div className="w-72 h-36 md:w-[90%] flex flex-col items-center p-2 bg-white absolute left-1/2 -translate-x-1/2 -bottom-28 z-10">

                    <h1 className="text-lg font-semibold text-center mt-2">{titulo}</h1>

                    <p className="mt-2 text-center">{descricao}</p>

                </div>

            </div>

        </div>
    );
}
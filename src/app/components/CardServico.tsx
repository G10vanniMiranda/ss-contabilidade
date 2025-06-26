
import Image from "next/image";

interface CardServicoProps {
  imagem: string;
  alt: string;
  titulo: string;
  descricao: string;
}

export default function CardServico({ imagem, alt, titulo, descricao }: CardServicoProps) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg md:max-w-xs mx-auto">
      <div className="relative w-full h-44 mb-4 rounded-t-xl overflow-hidden">
        <Image
          src={imagem}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="text-xl font-bold text-black mb-2 px-6">{titulo}</h2>
      <p className="text-gray-700 text-center px-6 pb-6">{descricao}</p>
    </div>
  );
}
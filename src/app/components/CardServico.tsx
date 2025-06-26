
import Image from "next/image";

interface CardServicoProps {
  imagem: string;
  alt: string;
  titulo: string;
  descricao: string;
}

export default function CardServico({ imagem, alt, titulo, descricao }: CardServicoProps) {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs">
      <div className="relative w-32 h-32 mb-4 rounded-xl overflow-hidden">
        <Image
          src={imagem}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="text-xl font-bold text-black mb-2">{titulo}</h2>
      <p className="text-gray-700 text-center">{descricao}</p>
    </div>
  );
}
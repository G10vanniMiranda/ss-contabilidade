import Image from "next/image";

interface CardServicoProps {
  imagem: string;
  alt: string;
  titulo: string;
  descricao: string;
}

export default function CardServico({ imagem, alt, titulo, descricao }: CardServicoProps) {
  return (
    <div
      className="
        relative flex flex-col items-center justify-start
        glass border border-gray-700/40 rounded-2xl overflow-hidden
        shadow-[0_0_20px_rgba(255,255,255,0.05)]
        hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
        hover:-translate-y-2 transition-all duration-500
        max-w-sm w-full
      "
    >
      {/* Imagem */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={imagem}
          alt={alt}
          fill
          className="object-cover brightness-90 hover:brightness-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent"></div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col items-center text-center p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-metallic mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          {titulo}
        </h2>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          {descricao}
        </p>
      </div>

      {/* Borda metálica animada (leve brilho) */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-transparent via-gray-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}
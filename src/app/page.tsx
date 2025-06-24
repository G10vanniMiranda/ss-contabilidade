import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full md:h-screen h-[320px] flex flex-col items-center justify-center bg-gray-100 mt-1'>

      <div className="relative w-full md:h-[690px] h-full mt-10 bg-[url(/imagem.jpg)] bg-cover bg-center bg-no-repeat">
        {/* 
        <Image
          src="/imagem.jpg"
          alt="SS Contabilidade"
          fill
          className="object-contain w-full h-full"
        /> */}

      </div>

    </div>
  );
}

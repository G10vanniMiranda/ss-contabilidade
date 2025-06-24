import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-100'>

      <div className="relative w-full h-96">

        <Image
          src="/imagem.jpg"
          alt="SS Contabilidade"
          fill
          className="object-cover w-full h-full"
        />

      </div>

    </div>
  );
}

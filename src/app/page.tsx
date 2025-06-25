'use client';

import { FaStar } from "react-icons/fa6";
import WhatsAppButton from "./components/saibamais";
import { motion } from "motion/react";
import SaibaMAisButton from "./components/saibamais";
import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full md:h-auto flex flex-col items-center 
    justify-center bg-gray-100 mt-1'>

      {/**Sessão 1*/}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: .8, ease: "easeInOut" }}
        className="w-full h-64 mt-10 md:h-[690px] 
        bg-[url(/imagem.jpg)] bg-cover bg-center bg-no-repeat"
      >
      </motion.div>

      {/**Sessão 2*/}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative w-full h-96 md:h-[690px] overflow-hidden"
      >

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover z-[-1]"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        {/* Overlay de transparência */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">

          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
            Consultoria Contábil <br /> Especializada para Você
          </h1>

          <h1 className="text-white text-lg md:text-2xl text-center mt-10">
            Incentivos Fiscais e Recuperação de Créditos Tributários em Todo o Brasil.
          </h1>

          <SaibaMAisButton />

          <div className="flex space-x-2 mt-8">
            <FaStar className="text-yellow-500 animate-pulse" />
            <FaStar className="text-yellow-500 animate-pulse" />
            <FaStar className="text-yellow-500 animate-pulse" />
            <FaStar className="text-yellow-500 animate-pulse" />
            <FaStar className="text-yellow-500 animate-pulse" />
          </div>

          <h1 className="text-white text-lg md:text-xl mt-1">
            5 ESTRELA DE SATISFAÇÃO
          </h1>

        </div>

      </motion.div>

      {/**Sessão 3*/}
      <section className="w-full h-auto flex flex-col md:flex-row md:gap-10 items-center justify-center bg-white py-10 px-4 md:px-20">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-auto md:w-80 flex flex-col"
        >

          <h1 className="text-black text-3xl md:text-4xl font-bold">Sobre Nós</h1>

          <p className="text-black mt-4">
            Especialistas em contabilidade e incentivos fiscais, oferecemos serviços de excelência e confiança para clientes em todo o Brasil.
          </p>

          <div className="mt-8">
            <SaibaMAisButton />
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full h-80 md:w-[500px] mt-10 md:mt-0 rounded-2xl overflow-hidden"
        >

          <Image src="/reuniao.jpeg" alt="Profissionais em reunião" fill className="object-cover" />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative w-full h-80 md:w-[500px] mt-6 md:mt-0 rounded-2xl overflow-hidden"
        >
          <Image src="/planejamento.jpg" alt="Planejamento contábil e documentos" fill className="object-cover" />
        </motion.div>

      </section>

    </div>
  );
}

'use client';

import Image from "next/image";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa6";
import SaibaMAisButton from "./components/saibamais";
import CardServico from "./components/CardServico";
import CardIncentivos from "./components/CardIncentivos";
import DepoimentoCard from "./components/DepoimentoCard";

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

      {/**Sessão 4*/}
      <section className="w-full h-auto flex flex-col items-center justify-center gap-6 bg-gray-100 py-10 px-4 md:px-20">

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full max-w-3xl text-center"
        >

          <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">Serviços Contábeis</h1>

          <p className="text-black">
            Oferecemos consultoria especializada em incentivos fiscais e recuperação de créditos tributários para clientes em todo o Brasil.
          </p>

        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex-1 md:w-auto"
          >
            <CardServico
              imagem={"/legalizacao.jpg"}
              alt={"Chicara de café com documentos"}
              titulo={"Legalização Empresarial"}
              descricao={"Apoio completo na legalização de empresas, garantindo conformidade com as normas fiscais e trabalhistas."}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex-1 md:w-auto"
          >
            <CardServico
              imagem={"/consultoria.jpg"}
              alt={"Consultoria Fiscal"}
              titulo={"Consultoria Fiscal"}
              descricao={"Especialistas em benefícios fiscais, ajudando sua empresa a maximizar recursos e reduzir custos tributários."}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex-1 md:w-auto"
          >
            <CardServico
              imagem={"/recuperacao.jpg"}
              alt={"Recuperação de Créditos"}
              titulo={"Recuperação de Créditos"}
              descricao={"Atendemos todas as áreas contábeis, incluindo RH, fiscal e consultoria empresarial para seu sucesso."}
            />
          </motion.div>

        </div>

      </section>

      {/**Sessão 5*/}
      <section className="w-full h-auto flex flex-col items-center justify-center bg-zinc-600 py-10 px-4 md:px-20">

        <h1 className="text-white text-center text-3xl md:text-4xl font-bold mb-4">Incentivos Fiscais <br /> Rondônia</h1>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-6xl mt-6">

          <CardIncentivos
            imagem={"/santos.jpeg"}
            alt={"Regime Especial para Importação"}
            titulo={"Regime Especial para Importação"}
            descricao={"Diferimento do ICMS na entrada para a saída, com crédito presumido de até 85% sobre o ICMS das operações de saída. Possibilidade de desembaraço em qualquer porto aduaneiro do Brasil."}
            botaoTexto={"Saiba Mais"}
            botaoLink={"https://wa.me/5569993533868"}
          />

          <CardIncentivos
            imagem={"/industrias.jpg"}
            alt={"Regime Especial para Industrias"}
            titulo={"Regime Especial para Industrias"}
            descricao={"Regime Especial para Indústrias: Diferimento do ICMS na entrada para a saída, com crédito presumido de até 85% sobre o ICMS das operações de saída."}
            botaoTexto={"Saiba Mais"}
            botaoLink={"https://wa.me/5569993533868"}
          />

          <CardIncentivos
            imagem={"/atacado.jpg"}
            alt={"Regime Especial para Atacadistas"}
            titulo={"Regime Especial para Atacadistas"}
            descricao={"Guajará-Mirim – Área de Livre Comércio: Crédito presumido de até 75% sobre o ICMS nas operações realizadas na região."}
            botaoTexto={"Saiba Mais"}
            botaoLink={"https://wa.me/5569993533868"}
          />

        </div>

      </section>

      {/**Sessão 6*/}
      <section className="w-full h-auto flex flex-col items-center justify-center bg-gray-500 py-10 px-4 md:px-20">

        <h2 className="text-3xl font-bold text-white text-center mb-6">Depoimentos de Clientes</h2>

        <div className="flex flex-col md:flex-row gap-10 mt-10 items-center justify-center w-full md:max-w-6xl">

          <DepoimentoCard
            nome="João Silva"
            imagem="/joao.jpg"
            alt="João Silva"
            depoimento="A SS Contabilidade transformou nossa gestão financeira! Com expertise em incentivos fiscais, recuperamos créditos tributários e melhoramos nossa eficiência. Recomendo a todos!"
          />

          <DepoimentoCard
            nome="Maria Oliveira"
            imagem="/maria.jpg"
            alt="Maria Oliveira"
            depoimento="A equipe da SS Contabilidade é extremamente profissional e dedicada. Graças a eles, conseguimos otimizar nossos processos e reduzir custos."
          />

          <DepoimentoCard
            nome="Carlos Pereira"
            imagem="/carlos.jpg"
            alt="Carlos Pereira"
            depoimento="Excelente serviço! A SS Contabilidade nos ajudou a entender melhor nossos direitos e a aproveitar os incentivos fiscais disponíveis. Muito satisfeito!"
          />

        </div>

      </section>

      {/**Sessão 7*/}
      <section className="w-full h-auto flex flex-col items-center justify-center bg-gray-700 py-10 px-4 md:px-20">

        <h2 className="text-3xl font-bold text-white text-center mb-6">Contato Rápido</h2>

        <p className="text-white text-center mb-4">
          Entre em contato para serviços de contabilidade e consultoria fiscal.
        </p>

        <div className="bg-white w-96 h-96">

        </div>

      </section>

    </div>
  );
}

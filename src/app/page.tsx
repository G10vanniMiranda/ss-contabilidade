'use client';

import Image from "next/image";
import { motion } from "motion/react";
import { FaStar } from "react-icons/fa6";
import SaibaMAisButton from "./components/saibamais";
import CardServico from "./components/CardServico";
import CardIncentivos from "./components/CardIncentivos";
// import DepoimentoCard from "./components/DepoimentoCard"; // não utilizado atualmente
import Link from "next/link";
import { useState } from "react";
import GradientSection from "./components/GradientSection";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  const [btnAcesso, setBtnAcesso] = useState("");
  const [formShow, setFormShow] = useState("hidden");

  const handleSaibaMaisClick = () => {
    setBtnAcesso("hidden");
    setFormShow("block");
  }

  const handleFormHidden = () => {
    setBtnAcesso("");
    alert("Mensagem enviada com sucesso!");
    setFormShow("hidden");
  }

  return (
    <div className='w-screen md:h-auto flex flex-col items-center justify-center bg-gray-100 mt-1 relative'>

      {/**Seção 1*/}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: .8, ease: "easeInOut" }}
        className="w-full h-64 -mt-1 md:h-[690px] bg-[url(/imagem.jpg)] bg-cover bg-center bg-no-repeat"
      >
      </motion.div>

      {/**Seção 2 – Vídeo institucional com overlay cinza sofisticado*/}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative w-full h-96 md:h-[690px] overflow-hidden bg-[#2A2A2A]"
      >
        {/* Vídeo de fundo */}
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

        {/* Overlay em gradiente cinza */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/70 via-[#2A2A2A]/65 to-[#1C1C1C]/75 z-0"></div>

        {/* Efeito de luz metálica suave (branco prateado) */}
        <motion.div
          className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-gray-400/10 blur-[160px] rounded-full"
          animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Conteúdo central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <h1 className="text-gray-100 text-4xl md:text-6xl font-bold text-center tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
            Consultoria Contábil <br /> Especializada para Você
          </h1>

          <p className="text-gray-300 text-lg md:text-2xl text-center mt-6 max-w-3xl leading-relaxed">
            Incentivos Fiscais e Recuperação de Créditos Tributários em Todo o Brasil.
          </p>

          <SaibaMAisButton />

          <div className="flex space-x-2 mt-8">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 opacity-90 animate-pulse" />
            ))}
          </div>

          <p className="text-gray-300 text-lg md:text-xl mt-1 font-medium">
            5 ESTRELAS DE SATISFAÇÃO
          </p>
        </div>
      </motion.div>

      {/**Seção 3*/}
      <GradientSection variant="gradient" withDividerTop withDividerBottom className="py-10 px-4 md:px-20" lightColorClassName="bg-blue-500/10">
        <div className="w-full h-auto flex flex-col md:flex-row md:gap-10 items-center justify-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-auto md:w-80 flex flex-col items-center justify-center"
          >

            <h1 className="text-white text-3xl md:text-4xl font-bold">Sobre Nós</h1>

            <p className="text-white mt-4 flex items-center justify-center">
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

        </div>
      </GradientSection>

      {/**Seção 4*/}
      <GradientSection variant="gradient" withDividerBottom className="py-10 px-4 md:px-20" lightColorClassName="bg-blue-500/10">
        <div className="w-full h-auto flex flex-col items-center justify-center gap-6">

          <motion.div
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full max-w-3xl text-center"
          >

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Serviços Contábeis Inteligentes</h1>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Transformamos números em estratégias com tecnologia, precisão e confiança.
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
        </div>
      </GradientSection>

      {/* Seção 5 — Incentivos Fiscais */}
      <section className="relative w-full py-20 px-4 md:px-20 bg-gradient-to-b from-[#1C1C1C] via-[#2A2A2A] to-[#1C1C1C] overflow-hidden">

        {/* Luz IA flutuante */}
        <motion.div
          className="absolute -top-32 left-10 w-[400px] h-[400px] bg-gray-400/10 blur-[180px] rounded-full"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cabeçalho da seção */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-metallic text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.08)]">
            Incentivos Fiscais em Rondônia
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Regimes especiais que fortalecem a economia e oferecem vantagens tributárias para empresas que atuam no estado.
          </p>
        </div>

        {/* Cards de incentivos */}
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-stretch justify-center w-full max-w-6xl mx-auto">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 md:w-auto glass shadow-glow hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-transform transform hover:-translate-y-2"
          >
            <CardIncentivos
              imagem={"/santos.jpeg"}
              alt={"Regime Especial para Importação"}
              titulo={"Regime Especial para Importação"}
              descricao={"Diferimento do ICMS na entrada para a saída, com crédito presumido de até 85%. Desembaraço possível em qualquer porto aduaneiro do Brasil."}
              botaoTexto={"Saiba Mais"}
              botaoLink={"https://wa.me/5569993533868"}
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex-1 md:w-auto glass shadow-glow hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-transform transform hover:-translate-y-2"
          >
            <CardIncentivos
              imagem={"/industrias.jpg"}
              alt={"Regime Especial para Indústrias"}
              titulo={"Regime Especial para Indústrias"}
              descricao={"Diferimento do ICMS na entrada para a saída, com crédito presumido de até 85% sobre as operações industriais de saída."}
              botaoTexto={"Saiba Mais"}
              botaoLink={"https://wa.me/5569993533868"}
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex-1 md:w-auto glass shadow-glow hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-transform transform hover:-translate-y-2"
          >
            <CardIncentivos
              imagem={"/atacado.jpg"}
              alt={"Regime Especial para Atacadistas"}
              titulo={"Regime Especial para Atacadistas"}
              descricao={"Guajará-Mirim – Área de Livre Comércio: crédito presumido de até 75% sobre o ICMS nas operações realizadas na região."}
              botaoTexto={"Saiba Mais"}
              botaoLink={"https://wa.me/5569993533868"}
            />
          </motion.div>

        </div>

        {/* Divisor inferior */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </section>

      {/**Seção 6 – Depoimentos Modernos*/}
      <section className="relative w-full py-20 px-6 md:px-20 bg-dark-metal text-gray-100 overflow-hidden">

        {/* Orb de luz sutil para textura IA */}
        <div className="light-orb top-0 left-1/3 w-[400px] h-[400px] bg-gray-400/10" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-metallic text-4xl md:text-5xl mb-6"
          >
            Depoimentos
          </motion.h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            A confiança dos nossos clientes é o nosso maior resultado.
          </p>

          {/* Grid responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {[
              {
                nome: "João Silva",
                imagem: "/joao.jpg",
                texto: "A SS Contabilidade transformou nossa gestão financeira! Recuperamos créditos e otimizamos resultados.",
              },
              {
                nome: "Maria Oliveira",
                imagem: "/maria.jpg",
                texto: "Profissionais dedicados e comprometidos com o sucesso dos clientes. Atendimento excepcional!",
              },
              {
                nome: "Carlos Pereira",
                imagem: "/carlos.jpg",
                texto: "Excelente parceria! Os incentivos fiscais apresentados fizeram total diferença para nossa empresa.",
              },
            ].map((pessoa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative backdrop-blur-xl bg-white/5 border border-gray-700/50 rounded-2xl p-8 text-white shadow-[0_0_25px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-transform transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <Image
                    src={pessoa.imagem}
                    alt={pessoa.nome}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border border-gray-500"
                  />
                  <p className="text-gray-300 italic leading-relaxed">"{pessoa.texto}"</p>
                  <h3 className="font-semibold text-lg text-gray-100">{pessoa.nome}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-gray-200" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Linha sutil de separação inferior */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </section>

      {/* Seção 7 — Contato Rápido */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative w-full h-auto py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#1C1C1C] via-[#2A2A2A] to-[#1C1C1C]"
      >
        {/* Vídeo de fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-[-10] brightness-[0.5]"
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
        </video>

        {/* Luz metálica IA */}
        <motion.div
          className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-gray-400/20 blur-[180px] rounded-full"
          animate={{ x: [0, 40, -40, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-metallic mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            Contato Rápido
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl">
            Fale com nossa equipe e descubra como podemos otimizar a contabilidade e os benefícios fiscais da sua empresa.
          </p>

          {/* Botão principal */}
          <button
            onClick={handleSaibaMaisClick}
            className={`text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 px-8 py-3 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300 ${btnAcesso}`}
          >
            Entrar em contato
          </button>

          {/* Formulário */}
          <div className={`glass mt-10 w-[350px] md:w-[500px] rounded-2xl p-6 border border-gray-700/50 shadow-[0_0_25px_rgba(255,255,255,0.05)] transition ${formShow}`}>
            <form
              action="https://formsubmit.co/williansscontabilidade@gmail.com"
              method="POST"
              className="space-y-5 text-left"
            >
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
              <textarea
                name="mensagem"
                placeholder="Sua mensagem"
                className="w-full bg-transparent border border-gray-600 rounded-xl px-4 py-3 h-32 resize-none text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />

              <button
                type="submit"
                onClick={handleFormHidden}
                className="w-full bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 text-white rounded-xl py-3 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300"
              >
                Enviar mensagem
              </button>
            </form>

            {/* Links extras */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Link
                href="https://wa.me/5569993533868"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white w-full px-6 py-3 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300"
              >
                <i className="fa fa-whatsapp"></i> WhatsApp
              </Link>

              <Link
                href="mailto:williansscontabilidade@gmail.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white w-full px-6 py-3 rounded-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300"
              >
                <i className="fa fa-envelope"></i> E-mail
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/** Botão do WhatsApp */}
      <WhatsAppButton />

    </div>

  );
}

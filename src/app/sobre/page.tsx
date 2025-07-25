'use client'

import { motion } from "motion/react";

export default function Sobre() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">

            {/* SOBRE */}
            <section className="w-full h-auto flex flex-col items-center gap-10 md:mt-20 p-2 md:p-4">

                <div className="w-80 h-24 md:w-full flex flex-col items-center md:items-start md:px-20 justify-end">

                    <h1 className="text-3xl md:text-4xl font-semibold">Conheça a SS Contabilidade</h1>

                </div>

                <div className="w-80 md:w-full h-[400px] md:h-60 lg:h-44 flex flex-col md:flex-row gap-8 md:gap-28 md:px-20">

                    <div className="flex flex-col gap-2">

                        <h1 className="text-black text-xl font-semibold">Nossa Missão</h1>

                        <p className="text-black w-72 md:w-[278px] lg:w-[400px] xl:w-[530px] 2xl:w-[600px]">
                            Somos um escritório de contabilidade especializado em incentivos e benefícios fiscais, atuando em todo o Brasil para recuperação de créditos tributários e serviços nas áreas contábil, fiscal e de recursos humanos.
                        </p>

                    </div>

                    <div className="flex flex-col gap-2">

                        <h1 className="text-black text-xl font-semibold">Eficiência Contábil</h1>

                        <p className="text-black w-72 md:w-[278px] lg:w-[400px] xl:w-[530px] 2xl:w-[600px]">
                            Comprometemo-nos a oferecer soluções contábeis eficientes, garantindo a legalização e a otimização de recursos para nossos clientes, sempre com ética e transparência em todos os serviços prestados.
                        </p>

                    </div>

                </div>

            </section>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: .8, ease: "easeInOut" }}
                className="w-full h-64 md:h-[690px]
                bg-[url(/imagem.jpg)] bg-cover bg-center bg-no-repeat"
            >
            </motion.div>

            {/* LOCALIZAÇÃO */}
            <section className="w-full h-auto flex flex-col md:flex-row items-center md:mt-10 gap-10 md:gap-0 p-2">

                <div className="w-80 h-24 md:w-[580px] flex flex-col justify-end gap-4 mt-64 md:mt-36 md:px-20">

                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-semibold">Localização</h1>
                        <p className="text-black w-720">
                            Atendemos clientes em todo o Brasil, oferecendo serviços de contabilidade, recuperação de créditos tributários e incentivos fiscais.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-black text-xl font-semibold">Endereço</h1>
                        <p className="text-black w-720">
                            Av Presidente Dutra, 3500, Olaria - Porto Velho - RO
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-black text-xl font-semibold">Horário</h1>
                        <p className="text-black w-720">
                            Seg a Sex - 08:00 até 12:00 e 14:00 até as 18:00
                        </p>
                    </div>

                </div>

                <div className="w-[350px] md:w-96 lg:w-[700px] flex justify-center p-2 mb-6">

                    <iframe
                        title="Mapa SS Contabilidade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.2932830906016!2d-63.909705225179515!3d-8.758452189419272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cd761c80477%3A0xa85f9f01561561da!2sAv.%20Pres.%20Dutra%2C%203500%20-%20Olaria%2C%20Porto%20Velho%20-%20RO%2C%2076801-222!5e0!3m2!1spt-BR!2sbr!4v1751573866950!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="320"
                        style={{ border: 0, borderRadius: '12px', maxWidth: 600 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>

            </section>

        </div>
    );
}

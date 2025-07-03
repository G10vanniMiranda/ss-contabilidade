
export default function Sobre() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">

            {/* SOBRE */}
            <section className="w-full h-auto flex flex-col items-center gap-10 mt-20 md:mt-28 bg-gray-100 p-2 md:p-4">

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

            {/* LOCALIZAÇÃO */}
            <section className="w-full h-auto flex flex-col md:flex-row items-center gap-10 bg-gray-100 p-2">

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

            </section>

        </div>
    );
}

import Image from "next/image"

export default function Servico() {
    return (
        <div className="w-full  h-auto flex flex-col items-center justify-center bg-gray-100 ">

            <section className="w-full md:max-w-[1280px] mx-auto h-auto flex flex-col items-center mt-12 md:mt-28 p-4 pb-32">

                <div className="w-80 h-auto md:w-[580px] flex flex-col items-center justify-center text-center">

                    <h1 className="text-3xl font-bold">Nossos Serviços</h1>

                    <p className="mt-2">Contabilidade especializada com foco em créditos tributários e incentivos fiscais, atendendo empresas em todo o Brasil com soluções inteligentes e personalizadas.</p>

                </div>

                <div className="w-full flex flex-col md:flex-row gap-10">
                    <div className="flex-1 gap-4 mt-10 relative ">

                        <div className="w-full h-auto md:h-[300px] flex flex-col items-center justify-center mt-10 md:mt-0 relative">

                            <Image src="/recuperacao.jpg" quality={100} fill alt="Imagem" className="md:w-[492px] bg-red-400 rounded-xl relative z-0"></Image>

                            <div className="w-64 h-56 md:w-[90%] flex flex-col items-center p-4 bg-white absolute left-1/2 -translate-x-1/2 -bottom-28 z-10">

                                <h1 className="text-2xl font-bold text-center mt-4">Recuperação de Créditos</h1>

                                <p className="mt-2 text-center">Identificamos e recuperamos créditos tributários que podem beneficiar sua empresa financeiramente.</p>

                                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Saiba Mais</button>

                            </div>

                        </div>

                    </div>

                    <div className="flex-1 gap-4 mt-10 relative ">

                        <div className="w-full h-auto md:h-[300px] flex flex-col items-center justify-center mt-10 md:mt-0 relative">

                            <Image src="/recuperacao.jpg" quality={100} fill alt="Imagem" className="md:w-[492px] bg-red-400 rounded-xl relative z-0"></Image>

                            <div className="w-64 h-56 md:w-[90%] flex flex-col items-center p-4 bg-white absolute left-1/2 -translate-x-1/2 -bottom-28 z-10">

                                <h1 className="text-2xl font-bold text-center mt-4">Recuperação de Créditos</h1>

                                <p className="mt-2 text-center">Identificamos e recuperamos créditos tributários que podem beneficiar sua empresa financeiramente.</p>

                                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Saiba Mais</button>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </div>
    );
}
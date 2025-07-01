export default function Servico() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center">

            <section className="w-full h-auto flex flex-col items-center mt-12 md:mt-28 bg-gray-100 p-4 pb-32">

                <div className="w-80 h-auto md:w-[580px] flex flex-col items-center justify-center text-center">

                    <h1 className="text-3xl font-bold">Nossos Serviços</h1>

                    <p className="mt-2">Contabilidade especializada com foco em créditos tributários e incentivos fiscais, atendendo empresas em todo o Brasil com soluções inteligentes e personalizadas.</p>

                </div>

                <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center mt-10 relative">

                    <div className="w-full h-auto flex flex-col items-center justify-center mt-10 relative">
                        <div className="w-80 h-60 bg-red-400 rounded-xl relative z-0"></div>
                        <div className="w-64 h-56 bg-blue-400 absolute left-1/2 -translate-x-1/2 -bottom-28 z-10 shadow-lg"></div>
                    </div>

                    <div className="w-full h-auto flex flex-col items-center justify-center mt-40 relative">
                        <div className="w-80 h-60 bg-red-400 rounded-xl relative z-0"></div>
                        <div className="w-64 h-56 bg-blue-400 absolute left-1/2 -translate-x-1/2 -bottom-28 z-10 shadow-lg"></div>
                    </div>

                </div>

            </section>

        </div>
    );
}
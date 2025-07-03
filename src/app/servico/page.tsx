import ServicoCard from "../components/ServicoCard";

export default function Servico() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center bg-gray-100 ">

            <section className="w-full md:max-w-[1280px] mx-auto h-auto flex flex-col items-center mt-20 md:mt-28 p-4 pb-32">

                <div className="w-80 h-auto md:w-[580px] flex flex-col items-center justify-center text-center">

                    <h1 className="text-3xl font-bold">Nossos Serviços</h1>

                    <p className="mt-2">Contabilidade especializada com foco em créditos tributários e incentivos fiscais, atendendo empresas em todo o Brasil com soluções inteligentes e personalizadas.</p>

                </div>

                <div className="w-full h-auto flex flex-col md:flex-row gap-32 md:gap-8 items-center justify-center">

                    <ServicoCard
                        imagem="/recuperacao.jpg"
                        titulo="Recuperação de Créditos"
                        descricao="Identificamos e recuperamos créditos tributários que podem beneficiar sua empresa financeiramente."
                    />

                    <ServicoCard
                        imagem="/recuperacao.jpg"
                        titulo="Consultoria Fiscal"
                        descricao="Ajudamos empresas a maximizar benefícios fiscais e a entender suas obrigações tributárias."
                    />

                </div>

            </section>

        </div>
    );
}
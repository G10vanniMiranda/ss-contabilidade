import ServicoCard from "../components/ServicoCard";

export default function Servico() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center  ">

            <section className="w-full md:max-w-[1280px] mx-auto h-auto flex flex-col items-center mt-20 md:mt-28 p-4 pb-32">

                <div className="w-80 h-auto md:w-[580px] flex flex-col items-center justify-center text-center">

                    <h1 className="text-3xl font-bold">Nossos Serviços</h1>

                    <p className="mt-2">Contabilidade especializada com foco em créditos tributários e incentivos fiscais, atendendo empresas em todo o Brasil com soluções inteligentes e personalizadas.</p>

                </div>

                <div className="w-full h-auto flex flex-col md:flex-row gap-20 md:gap-8 items-center justify-center">

                    <ServicoCard
                        imagem="/anexo1.avif"
                        titulo="Recuperação de Créditos"
                        descricao="Identificamos e recuperamos créditos tributários que podem beneficiar sua empresa financeiramente."
                    />

                    <ServicoCard
                        imagem="/anexo2.avif"
                        titulo="Consultoria Fiscal"
                        descricao="Ajudamos empresas a maximizar benefícios fiscais e a entender suas obrigações tributárias."
                    />

                </div>

                <div className="w-full h-auto flex flex-col md:flex-row gap-20 md:gap-8 items-center justify-center mt-20">

                    <ServicoCard
                        imagem="/anexo3.avif"
                        titulo="Incentivos Fiscais"
                        descricao="Recuperação de créditos tributários e benefícios fiscais."
                    />

                    <ServicoCard
                        imagem="/anexo4.avif"
                        titulo="Regularização Fiscal"
                        descricao="Apoio completo em legalização e contabilidade para empresas."
                    />

                </div>

                <div className="w-full h-auto flex flex-col md:flex-row gap-20 md:gap-8 items-center justify-center mt-20">

                    <ServicoCard
                        imagem="/anexo5.avif"
                        titulo="RH e Folha de Pagamento"
                        descricao="Gestão estratégica de pessoas e processos salariais, garantindo conformidade legal, eficiência e valorização dos colaboradores."
                    />

                    <ServicoCard
                        imagem="/anexo6.avif"
                        titulo="Contabilidade"
                        descricao="Organização financeira, cumprimento de obrigações fiscais e apoio estratégico para a saúde e crescimento do negócio."
                    />

                </div>

            </section>

        </div>
    );
}
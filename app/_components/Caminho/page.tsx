import Image from "next/image";

export default function Caminho() {

    const caminhos = [
        {
            id: 1, title: "Continuar atendendo demais, ganhando menos do que merece, sendo só mais um profissional exausto no sistema.",
            text: "RESULTADO: mais cansaço, menos reconhecimento, nenhum avanço, seu poder de compra sendo anualmente corroído pela inflação e, ao final de alguns anos, ser substituído por corte de gente com o avanço da Inteligência Artificial.",
            image: "/caminhos/cansado.png"
        },


        {
            id: 2, title: "Investir em cursos caros, genéricos e distantes da sua realidade",
            text: "Programas como os da Dale Carnegie, cursos de comunicação e experiência do cliente que custam mais de R$10.000 e nem são focados em profissionais da saúde.Resultado: conteúdo difícil de aplicar, pouca transformação prática e um rombo no bolso.",
            image: "/caminhos/dinheiro.png"
        },



        {
            id: 3, title: "Aplicar um método criado por quem vive a saúde na prática, com clareza, profundidade e acessibilidade",
            text: "O Saúde de Valor foi feito pra você. É um passo a passo simples, didático e aplicável, pensado por um médico que vive da prática ética, humana e valorizada que você também quer viver.",
            image: "/caminhos/farol.png"
        },
    ]

    return (

        <div className="bg-[#7D8E73]">

            <h1 className="text-3xl md:text-4xl font-bold text-center  text-[#F0EEE1] mb-6">POR QUE O SAÚDE DE VALOR FAZ MAIS SENTIDO DO QUE OUTROS CAMINHOS?</h1>

            <p className="text-center text-[#F0EEE1] text-2xl font-semibold mb-6">
                Você tem algumas opções na sua frente:
            </p>



            <div className="px-4 md:grid md:grid-cols-2 gap-6 items-center md:px-16 ">

                {caminhos.map((c, index) => (


                    <div key={c.id} className={` py-2
                 flex flex-col
                  ${index === caminhos.length - 1 ? "md:col-span-2 " : ""} 
                              `}>

                        <div className={`flex flex-col items-center justify-center
                            
                            ${c.title == "Investir em cursos caros, genéricos e distantes da sua realidade" ? "md:py-8" : ""}

                            ${c.title == "Aplicar um método criado por quem vive a saúde na prática, com clareza, profundidade e acessibilidade" && "md:col-span-2" ? "md:py-18 " : ""} text-center text-[#7D8E73] bg-[#F0EEE1] py-4 px-6 md:px-12 rounded-md `}>

                            <Image src={c.image} alt={c.title} width={100} height={100} />


                            <h2 className={`text-2xl py-2 md:px-12  ${c.title == "Aplicar um método criado por quem vive a saúde na prática, com clareza, profundidade e acessibilidade" ? "text-3xl md:text-5xl font-bold" : ""}`}>{c.title}</h2>


                            <p className={`text-lg  ${c.title == "Aplicar um método criado por quem vive a saúde na prática, com clareza, profundidade e acessibilidade" ? "md:text-2xl md:mt-6 px-6" : ""}`}>{c.text}</p>


                        </div>
                    </div>

                ))}


            </div>


            <p className="text-center tex-xl md:text-2xl font-semibold px-6 mt-4  text-[#F0EEE1] py-4">Você decide se quer ficar estagnado, pagar mais de R$10 mil por um certificado genérico
                ou investir muito menos em um caminho real, direto e transformador, com alguém que vive o que ensina.</p>

            <div className=" px-2 py-2 text-[#F0EEE1] md:px-100" >
                <p className="px-4 text-lg text-center  rounded-md py-2 md:text-2xl md:py-12   shadow-2xl ">
                     A lógica é simples: quem entrega mais valor, é mais valorizado. nem sempre o profissional mais competente é o mais reconhecido.

                Na prática, quem ganha mais, é indicado com mais frequência e tem fila de espera, é quem sabe gerar valor percebido.

                E isso não é achismo, é dado.

                Um estudo da Harvard Business Review mostrou que a experiência do paciente tem impacto direto na fidelização e na disposição de pagar mais pelo atendimento.

                Enquanto isso, no Brasil, mais de 60% dos profissionais da saúde relatam frustração com a remuneração atual e sentem que trabalham demais para receber de menos.

                Ou seja:

                A maioria está tentando resolver um problema financeiro e emocional apenas com congressos e cursos que aprofundam sua base teórica como especialista,  enquanto o verdadeiro diferencial está no que você faz o paciente sentir.
                </p>
               
            </div>
        </div>
    )
}
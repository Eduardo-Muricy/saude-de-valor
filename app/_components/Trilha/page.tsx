import Link from "next/link"
import Image from "next/image"
export default function Trilha() {

    const etps = [


        { id: 1, title: "Refletir sobre sua escuta, sua postura e sua comunicação", image: "/trilha/icons8-comunicação-96.png" },
        { id: 2, title: "Mapear os pontos de valor oculto no seu atendimento", image: "/trilha/icons8-ponto-de-interrogação-100.png" },
        { id: 3, title: "Reorganizar sua imagem como profissional sem virar marketeiro ou parecer picareta", image: "/trilha/icons8-médica-60.png" },
        { id: 4, title: "Criar rotinas e usar alavancas que sustentam crescimento sem exaustão", image: "/trilha/icons8-em-alta-100.png" },
        { id: 5, title: "Ter acesso a exercícios que mudam sua visão já no primeiro atendimento após aplicar", image: "/trilha/icons8-visível-100.png" },
    ]
    return (






        <div className="bg-[#7D8E73] text-[#F0EFE1]  flex flex-col items-center px-4">
            <div className="mt-4  ">
                <h2 className="text-center text-2xl md:text-4xl font-bold mt-8">POR ISSO, CRIAMOS A TRILHA VALOR</h2>

                <div className="md:flex md:px-55 md:gap-4 justify-center items-center mt-4">
                    
                        <ul className=" text-lg md:text-2xl font-semibold text-center  p-4  md:w-200 md:py-22 flex flex-col  gap-2 md:gap-14  rounded-md shadow-xl">
                            <li className="bg-[#F0EFE1]  text-[#7D8E73] rounded-md p-2 shadow-2xl"> Ser mais valorizado por quem realmente importa: o paciente</li>
                            <li className="bg-[#F0EFE1] text-[#7D8E73] rounded-md p-2 shadow-2xl"> Ser remunerado duas a três vezes mais que colegas de profissão entregando mais valor percebido </li>
                            <li className="bg-[#F0EFE1] text-[#7D8E73] rounded-md p-2 shadow-2xl"> Conquistar liberdade, propósito e reconhecimento, sem depender de plantões, exposição desnecessária ou mil títulos</li>
                        </ul>
                    

                    <Image src="/grow.jpeg" alt="Trilha Valor" width={700} height={600} className=" my-6 rounded-md shadow-2xl" />
                </div>



            </div>

            <p className=" text-xl md:text-3xl text-center font-bold mt-12 ">CHEGA DE TRABALHAR DEMAIS, GANHAR MENOS E SENTIR QUE NÃO É RECONHECIDO</p>

            <div className="mt-4 md:px-8">
                <p className="text-xl text-center md:text-2xl  mb-2">Logo na primeira etapa, percebe que o problema nunca foi sua competência, mas foi a forma como as pessoas enxergavam o que você entrega.</p>
                <p className="text-xl font-bold mt-8 ">Ao longo das etapas, você vai: </p>
                <div>

                </div>

                <div>
                    <div className="flex flex-col md:flex-row gap-4 font-semibold mt-4 mb-12  rounded-md p-4 text-xl shadow-2xl ">
                        {
                            etps.map((etp) => (

                                <div key={etp.id} className="flex flex-col items-center px-2 py-6 rounded-md bg-[#F0EEE1]">
                                    <Image src={etp.image} alt={etp.title} width={60} height={60} className="py-2" />
                                    <p className="text-[#7D8E73] text-center px-10">{etp.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>


            <div className="bg-[#FF6A00] text-[#E4EBE0] px-14 md:px-50 py-4   text-md md:text-2xl font-bold rounded-md my-6 shadow-lg"><Link href="/">QUERO SER MAIS VALORIZADO</Link></div>
        </div>




    )
} 
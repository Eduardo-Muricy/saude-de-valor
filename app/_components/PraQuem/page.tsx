
import Image from "next/image"

export default function PraQuem() {

    const etps = [


        { id: 1, title: "Profissionais da saúde (ou estudantes) que sentem que estão sendo subvalorizados mesmo se dedicando ao máximo.", image: "/prof/coracao.png" },
        { id: 2, title: "Pessoas que acreditam que dá pra cuidar com mais ética, empatia e reconhecimento, sem depender de plantões ou marketing forçado.", image: "/prof/mao.png" },
        { id: 3, title: "Quem quer organizar sua prática, comunicação e imagem para ser desejado pelo que entrega, não pelo preço que cobra.", image: "/prof/comunicacao.png" },
        { id: 4, title: "Quem quer liberdade de tempo, autonomia e propósito, mesmo começando do zero ou com pouca experiência.", image: "/prof/time.png" },
        { id: 5, title: "Profissionais que acreditam que o futuro da saúde está no cuidado com presença e não só na técnica.", image: "/prof/cuidado.png" },
    ]
    return (

        <div className="bg-[#7D8E73] px-4 py-2">

            <h1 className="text-3xl md:text-4xl font-bold text-center mt-12 text-[#F0EEE1] mb-8">PARA QUEM É O SAÚDE DE VALOR?</h1>


            <div className="md:px-8">
                <div className="flex flex-col md:flex-row gap-4 font-semibold mt-4 mb-12  rounded-md p-4 text-xl shadow-2xl ">
                    {
                        etps.map((etp) => (

                            <div key={etp.id} className="flex flex-col items-center px-2 py-6 rounded-md bg-[#F0EEE1]">
                                <Image src={etp.image} alt={etp.title} width={60} height={60} className="py-2" />
                                <p className="text-[#7D8E73] text-center px-4">{etp.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>

    )

}
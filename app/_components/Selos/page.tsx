"use client"

import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react"
import Link from "next/link"
export default function Selos() {
    const [openId, setOpenId] = useState<number | null>(null);


    const medalhas = [

        { id: 1, title: "FAROL BRONZE", image: "/medalhas/bronze.png", text: "Assiste todas as aulas e conclui 100% do conteúdo" },
        { id: 2, title: "FAROL PRATA", image: "/medalhas/prata.png", text: "Assiste 100% e responde todos os exercícios" },
        { id: 3, title: "FAROL OURO", image: "/medalhas/ourinho.png", text: "Aplica os conceitos na prática, compartilha vídeos selfie com sua jornada e recebe feedback direto do nosso time, podendo se tornar embaixador do Saúde de Valor." },

    ]
    return (
        <div className=" flex flex-col items-center my-4 bg-[#F0EFE1]">
            <h1 className="text-[#7D8E73] text-center text-3xl md:text-4xl font-bold mt-8">SELO FAROL</h1>
            <h4 className="text-[#7D8E73] text-center text-xl md:text-2xl mt-2 mb-6">A certificação que separa meus alunos dos demais no mercado</h4>


            <div className="flex  flex-col md:flex-row items-center justify-center">


                {medalhas.map((medalha) => {
                    const isOpen = openId === medalha.id;

                    return (


                        <div key={medalha.id} className="flex flex-col  p-2">
                            <div

                                className="bg-[#7D8E73]  rounded-md  shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                {/* Cabeçalho */}
                                <div
                                    onClick={() =>
                                        setOpenId(isOpen ? null : medalha.id)
                                    }
                                    className="flex justify-between items-center cursor-pointer select-none"
                                >
                                    <h3 className="font-semibold text-[#F0EFE1]">{medalha.title}</h3>
                                    <IoIosArrowDown
                                        className={`transition-transform duration-300 text-[#F0EFE1]  ${isOpen ? "rotate-180" : "rotate-0"
                                            }`}
                                    />
                                </div>

                                {/* Conteúdo animado */}
                                <div
                                    className={`transition-all duration-500 overflow-hidden ${isOpen
                                        ? "max-h-[600px] opacity-100 mt-2"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div
                                        className={`transition-all duration-700 flex flex-col items-center ${isOpen
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 -translate-y-2"
                                            }`}
                                    >
                                        <Image src={medalha.image} alt={medalha.title} width={150} height={150} className="" />

                                        <p className={`text-center text-[#F0EFE1] text-xl  mt-4 font-semibold ${medalha.title == "FAROL OURO" ? "md:w-145" : "px-2"}`}>{medalha.text}</p>


                                        <div className={`${medalha.title !== "FAROL OURO" ? "hidden" : "block"} flex flex-col items-center  mt-2 text-[#F0EFE1]`}>
                                            <p className="font-semibold mt-4 mb-2">Os 10 primeiros alunos a conquistar o FAROL OURO:</p>
                                            <ul className=" flex flex-col gap-2 ">
                                                <li>
                                                    <p >- Terão 100% do custo do curso devolvido</p>
                                                </li>
                                                <li>
                                                    <p>- Serão convidados como embaixadores oficiais e potenciais sócios do Saúde de Valor</p>
                                                </li>
                                                <li>
                                                    <p>- Ganharão visibilidade e acesso prioritário a eventos e mentorias futuras</p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    );
                })}
            </div>

            <div className="px-1">

                <h5 className="text-[#7D8E73] text-center text-2xl font-bold mt-28 ">
                    O SELO FAROL É MAIS DO QUE UMA MEDALHA
                </h5>

                <p className="text-[#7D8E73] text-xl md:px-25 text-center mt-4 mb-12">É um atestado visível de que você é um profissional diferenciado, pronto para transformar a saúde com ética, presença e valor real. É uma chave que abre portas para que você mostre em processos seletivos e situações reais que você é capaz de entregar valor para quem importa de verdade.</p>


            </div>
            <div className="bg-[#FF6A00] text-[#E4EBE0] text-center md:px-50 py-4 px-6 text-md md:text-2xl font-bold rounded-md shadow-lg"><Link href="/">QUERO E IREI ME TORAR FAROL OURO </Link></div>
        </div>

    )

}
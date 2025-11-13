"use client"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Etapas() {
      const [openId, setOpenId] = useState<number | null>(null);

    const etps = [
        { id: 1, title: "Etapa 1 – Visão Centrada no Paciente ", content: "Você vai entender, de forma profunda, o que é valor para quem está do outro lado e porque charlatões roubam o seu espaço no mercado. Aprende a enxergar o que o paciente percebe, sente e leva embora, porque não basta entregar técnica, é preciso entregar experiência. E isso começa pelo nível de atenção e escuta que você dá a ele." },
        { id: 2, title: "Etapa 2 – Alinhamento da Comunicação", content: "Aqui você aprende a se comunicar com clareza, empatia e propósito. Desde o tom de voz até as palavras que usa, tudo passa a construir confiança e a fortalecer a sua autoridade sem esforço." },
        { id: 3, title: "Etapa 3 – Lapidação da Experiência", content: "Você vai descobrir que o encantamento não mora na técnica, mas nos detalhes. Vai aprender a transformar ambiente, gestos, linguagem e pós-atendimento em memória positiva. É o que faz o paciente voltar e indicar." },
        { id: 4, title: "Etapa 4 – Organização da Autoridade", content: "Não adianta cuidar bem se ninguém percebe seu valor. Neste módulo, você aprende a posicionar sua imagem com ética, coerência e constância dentro e fora das redes." },
        { id: 5, title: "Etapa  5 – Retorno com Propósito", content: " Por fim, você vai consolidar tudo com uma rotina sustentável. Aprende a colher o reconhecimento e o faturamento que merece, sem abrir mão de si mesmo, da família ou dos seus valores." },



    ]
return (
  <div className="bg-[#7D8E73]">

 <h3 className="text-center font-semibold text-2xl text-[#F0EEE1]">Confira as etapas</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
      
      {etps.map((etp) => {
        const isOpen = openId === etp.id;

        return (
          <div
            key={etp.id}
            className="bg-[#F0EEE1] rounded-md shadow-md p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Cabeçalho */}
            <div
              onClick={() =>
                setOpenId(isOpen ? null : etp.id)
              }
              className="flex justify-between items-center cursor-pointer select-none"
            >
              <h3 className="font-semibold text-gray-800">{etp.title}</h3>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {/* Conteúdo animado */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                isOpen
                  ? "max-h-[500px] opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p
                className={`transition-all duration-700 text-gray-700 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                {etp.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
     </div>
  );

    
}
import Image from "next/image"

export default function OqueE() {

    return (
        <div className="bg-[#7D8E73]  py-6 flex flex-col items-center text-[#F0EFE1]">
            <h1 className="text-3xl md:text-4xl font-bold text-[#F0EFE1] text-center pb-4 ">O QUE É O SAÚDE DE VALOR?</h1>
            <div className="flex flex-col md:flex ">

                <div className="px-3 md:flex  md:justify-center  md:gap-4 md:pt-4 ">




                    <div className="md:w-150 md:py-10">
                        <p className="text-[#F0EFE1]  md:text-2xl pt-3 ">O Saúde de Valor não é só uma formação avulsa.


                            É uma plataforma de transformação de profissionais, <span className="font-bold">que serão lembrados e indicados pela experiência que entregam.</span>

                        </p>

                        <p className="text-[#F0EFE1]  md:text-2xl pt-3 " >O Saúde de Valor é baseado em um método validado na prática, criado a partir da minha própria transformação como profissional.</p>

                        <p className="text-[#F0EFE1]  md:text-2xl pt-3 ">Ele não é uma coleção de dicas soltas ou fórmulas mágicas. <br /><br />



                            É uma trilha clara, com começo, meio e fim, que te leva da exaustão técnica ao reconhecimento como profissional desejado, mesmo que você esteja começando agora.</p>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <h2 className=" md:text-xl font-bold">Aqui está o mapa da sua virada de chave:</h2>
                        <Image src="/grow.webp" alt="O que é a trilha de valor?" width={800} height={600} className=" rounded-md   shadow-2xl" />
                    </div>

                </div>
            </div>



        </div>
    )
}
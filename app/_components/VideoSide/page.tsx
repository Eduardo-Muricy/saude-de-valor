import Link from "next/link"
export default function VideoSide() {
    const videoId = "C9Pq_OT48Io?si=EnoMCB763nLf7aYI"
    return (

        <div className="bg-[#7D8E73] py-6 flex flex-col justify-center items-center  ">
            <div className="px-2 flex flex-col gap-4">
                <h1 className="text-2xl md:text-4xl font-bold text-[#F0EFE1] text-center  ">NÃO BASTA SER COMPETENTE! PARA SER VALORIZADO, VOCÊ PRECISA MOSTRAR VALOR PARA QUEM IMPORTA: O PACIENTE.</h1>
                <p className="text-[#F0EFE1] text-center md:text-2xl">TODOS os profissionais de saúde precisam assistir a esse video para aprender essas <span className="font-bold">TRES coisas essenciais:</span> </p>
            </div>




            <div className="flex">
                <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} title="Vídeo do YouTube"
                    loading="lazy"
                    allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen className=" w-90 h-60 md:w-250 md:h-150 rounded-lg my-6 shadow-2xl" />
            </div>

            <div className="bg-[#FF6A00] text-[#E4EBE0] px-20 md:px-50 py-4 text-md md:text-2xl font-bold rounded-md shadow-lg"><Link href="/">QUERO SER MAIS VALORIZADO </Link></div>
        </div>
    )



}
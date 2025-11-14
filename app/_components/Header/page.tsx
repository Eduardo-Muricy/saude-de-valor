import Image from "next/image"
import Link from "next/link"
import { IoLogoWhatsapp } from "react-icons/io";
export default function Header() {


   return (
      <header className=" w-full flex sticky top-0 z-50  gap-5 justify-between items-center md:px-15 bg-[#F0EEE1] px-4 py-2 shadow-2xl">



         <Image src="/saude-logo.png" alt="Saúde do Valor" width={160} height={40} priority
         />


         <div className=" flex flex-col md:flex-row gap-2 md:gap-4">
            <div className="bg-[#768D70] px-6 py-2  rounded-md">
               <Link className="text-[#F0EFE1] text-md " href="/">Começar agora</Link>
            </div>


         </div>



         <div className="bg-[#28bf44] rounded-full fixed bottom-6 right-6 items-center flex gap-2 px-4 py-4 justify-center shadow-2xl  text-[#F0EFE1]">

            <Link className=" text-md " href="/"><IoLogoWhatsapp className="text-3xl" /></Link>
         </div>



      </header>

   )


}
import Image from "next/image"
import Link from "next/link"

export default function Header(){


return(
<header className="flex justify-between items-center md:px-15 bg-[#F0EEE1] px-4 py-2">



<Image src="/saude-logo.png" alt="Saúde do Valor" width={160} height={40} priority
/>
<div className="bg-[#768D70] px-6 py-2 rounded-md">
   <Link className="text-[#F0EFE1] text-md " href="/">Começar agora</Link> 
</div>




</header>

)


}
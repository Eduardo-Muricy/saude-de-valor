import Header from "@/app/_components/Header/page";
import VideoSide from "@/app/_components/VideoSide/page";
import Etapas from "@/app/_components/Etapas/page";
import Trilha from "@/app/_components/Trilha/page";
import OqueE from "@/app/_components/OqueE/page";
import Selos from "@/app/_components/Selos/page";
import PraQuem from "@/app/_components/PraQuem/page";
import Caminho from "@/app/_components/Caminho/page"
import ProvaSocial from "@/app/_components/ProvaSocial/page"
export default function Home() {
  return (
    <main className=" bg-[#F0EEE1]">
    <Header />
    <VideoSide />
    <OqueE/>
    <Etapas/>
    <Trilha/>
      <Selos/>
      <PraQuem/>
      <Caminho/>
      <ProvaSocial/>
  </main>
);
}

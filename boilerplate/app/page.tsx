//Importation
import Image from "next/image";
import { Introduction } from "@/components/section/introduction";
import { Prestation } from "@/components/section/prestation";

export default function Home() {
  return (
    <>
      <Introduction/>
      <Prestation/>
    </>
  );
}

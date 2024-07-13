import FirstComp from "@/components/firstComp";
import SecondComp from "@/components/secondComp";
import Image from "next/image";

export default async function Home() {
  //NOTE: Server side fetching
  // let url = "https://890c10c8-7d73-46a0-a3ab-1d8fcab943a9.mock.pstmn.io"
  // const body = await fetch(`${url}/firstcomponent`)
  // const data = await body.json()
  // console.log(data)
  
  return (
    <main className="min-h-screen p-5 flex flex-col gap-4">
      <FirstComp />
      <SecondComp />
    </main>
  );
}

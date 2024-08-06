"use client"

import Image from "next/image";
import sad from "../../public/sad.jpg"

async function getData() {
  try{
    const res = await fetch('/api/users',{
      headers:{
        Accept:'application/json',
        method:'GET'
      }
    })
    if(res){
      const data = await res.json()
      console.log(data)
    }
  }
  catch(error){
    if(error){
      console.log(error)
    }
  }
}

export default function Home() {
  return (
    <main>
      <button className="rounded bg-slate-700 text-white px-3 py-2 font-semibold" onClick={getData}>Call my API</button>
      <div className="w-[200px]">
        <Image src={sad} alt="sad"/>
      </div>
    </main>
  );
}

"use client"

import Image from "next/image";
import sad from "../../public/sad.jpg"
import { useEffect, useState } from "react";
import Loading from "./loading";
import { toast, Toaster } from "sonner";
import { useAppContext } from "@/context";

type user = {
  name?:string,
  age?:string,
  id?:string,
}

export default function Home() {
  const [data, setData] = useState<user[]>([]);
  const [loading, setLoading] = useState(false);
  const {state, setState} = useAppContext()
  async function getData() {
    try{
      setLoading(true)
      const res = await fetch('/api/users',{
        method:'GET',
        next: {
          revalidate:5000,
        }
      })
      if(res){
        const user: user[] = await res.json();
        console.log(user);
        if(data) setData(user)
      }
    }
    catch(error){
      if(error){
        console.log(error)
      }
    }
    finally{
      setLoading(false)
    }
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <main>
      <button className="rounded bg-slate-700 text-white px-3 py-2 font-semibold" onClick={getData}>Call my API</button>
      <button onClick={() => toast.warning('Success!')} className="py-2 ml-2 font-semibold px-1 bg-slate-700 rounded text-white">
        Click me!
      </button>
      <div className="w-[200px]">
        <Image src={sad} alt="sad"/>
      </div>
      {loading && <Loading /> }
      {!loading && data &&
        data.map((d:any,key) => (
          <div key={key}>
            <h2>{d.name}</h2>
            <ul>
              <li>{d.age}</li>
              <li>{d.id}</li>
            </ul>
          </div>
        ))
      }
      {state}
      <button onClick={()=>setState('DUKUNG LEGALISASI GANJA!')} className="bg-sky-500 py-2 px-1 rounded text-white m-2">Chang the state</button>
    </main>
  );
}

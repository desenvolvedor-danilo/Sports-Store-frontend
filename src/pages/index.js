import Image from "next/image";
import Navbar from "./navbar";
import Slide from "./slide";
import Tenis from "./tenis";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Home() {

const router = useRouter();

  const [deal,setDeal] = useState([])
  useEffect(()=>{
    
      fetch("http://localhost:8080/deal/findall"
      //   ,{
      //   headers:{"Authorization":localStorage.getItem("token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"http//localhost:8080"     
      // }}
      )
    .then((res)=>res.json())
    .then((data)=>setDeal(data))
    .then(()=>{
      let size = deal.length
      for(let i=0;i<size;i++){
        deal.push(i);
      }
    })
    },[]) 
  return (
    <>
    <Navbar/>
    <Slide/>
    <h1 id="titulo-oferta">Ofertas do dia</h1>
            <p id="paragrafo-oferta">Aproveite enquanto durar o estoque</p>
          <section id="produtos">
                {
                  deal.map((item,index)=>(
                    
                    <Tenis key={index} target="/nike" oferta={item.titulo}  nome={item.nome} preco={item.valor} foto1={<Image src={item.caminho.split(",")[0]} width={380} height={380} alt="depois vai para o db"/>} foto2={<Image src={item.caminho.split(",")[1]} width={380} height={380} alt="depois vai para o db"/>}/>
                  ))
                }  
          </section>
    </>
  )
}


import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Slide from "./slide";
import Tenis from "./tenis";
import { useEffect, useState } from "react";



const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const [deal,setDeal] = useState([])
  useEffect(()=>{
      fetch("http://100.71.232.95:8080/deal/findall")
    .then((res)=>res.json())
    .then((data)=>setDeal(data))
    },[])
  return (
    <>
    <Navbar/>
    <Slide/>
    <h1 id="titulo-oferta">Ofertas do dia</h1>
            <p id="paragrafo-oferta">Aproveite enquanto durar o estoque</p>
          <section id="produtos">
                {
                  deal.map((item)=>(
                    
                    <Tenis target="/nike" oferta={item.titulo}  nome={item.nome} preco={item.valor} foto1={<Image src={item.caminho.split(",")[0]} width={380} height={380}/>} foto2={<Image src={item.caminho.split(",")[1]} width={380} height={380}/>}/>
                  ))
                }
                
            
            {/* <Tenis target="/nike-air-max" oferta="Corrida" foto1={<Image src={require("./imagens/nike air max.jpg")} alt='nike air max'/>} foto2={<Image src={require("./imagens/tenis_nike_air_max_excee_masculino_branco_e_azul.jpg")} alt='nike air max azul'/>} nome="Tênis Nike Air Max Excee" preco="R$ 799,99"/>
            <Tenis target="/inverno" oferta="Inverno" foto1={<Image src={require("./imagens/inverno-de-esporte.jpg")} alt='casaco de inverno'/>} foto2={<Image src={require("./imagens/inverno-2.jpg")} alt='outra foto casaco de inverno'/>} nome="Agasalho de inverno asics" preco="R$ 199,99"/> */}
            
          </section>
    </>
  )
}


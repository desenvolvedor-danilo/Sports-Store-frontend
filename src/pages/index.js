import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import Slide from "./slide";
import Tenis from "./tenis";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  
  return (
    <>
    <Navbar/>
    <Slide/>
    <h1 id="titulo-oferta">Ofertas do dia</h1>
            <p id="paragrafo-oferta">Aproveite enquanto durar o estoque</p>
          <section id="produtos">
            <Tenis target="/nike" oferta="Corrida" foto1={<Image src={require("./imagens/download fundo cinza.jpeg")} alt="Nike run"/>} foto2={<Image src={require("./imagens/nike-medio.jpg")}alt='outra foto nike run' />} nome="Tênis Nike Run" preco="R$ 249,99"/>
            <Tenis target="/gamma-force" oferta="Corrida" foto1={<Image src={require("./imagens/nike full force.webp")} alt='nike gamma force'/>} foto2={<Image src={require("./imagens/tenis-nike-gamma-force.png")} alt='nike full force'/>} nome="Tênis Nike Gamma force e Full force" preco="R$ 549,99"/>
            <Tenis target="/nike-air-max" oferta="Corrida" foto1={<Image src={require("./imagens/nike air max.jpg")} alt='nike air max'/>} foto2={<Image src={require("./imagens/tenis_nike_air_max_excee_masculino_branco_e_azul.jpg")} alt='nike air max azul'/>} nome="Tênis Nike Air Max Excee" preco="R$ 799,99"/>
            <Tenis target="/inverno" oferta="Inverno" foto1={<Image src={require("./imagens/inverno-de-esporte.jpg")} alt='casaco de inverno'/>} foto2={<Image src={require("./imagens/inverno-2.jpg")} alt='outra foto casaco de inverno'/>} nome="Agasalho de inverno asics" preco="R$ 199,99"/>
            
          </section>
    </>
  )
}


import { useEffect, useState } from "react";
import Product from "./Product";
import Navbar from "./navbar";
import ProdutosLancamentos from "./ProdutosLancamento";
import Image from "next/image";

export default function Search(){
    //const [search,setSearch]=useState("");
    const [produto,setProduto] = useState([{
        categoria:"",
        edicao:"",
        nome:"",
        nomeImagem:"",
        precoAntigo:"",
        precoNovo:"",
        desconto:"",
        parcelado:"",
        valorParcela:""    
    
    }])
    useEffect(()=>{
        
        fetch("http://localhost:8080/admin/search?find="+localStorage.getItem("key")).then((res)=>res.json()).then((dado)=>setProduto(dado))
        .then(()=>{
    
            let size = produto.length
            for(let i = 0;i<=size;i++){
                produto.push(i);
            }    
        })
    },[localStorage.getItem("key")])
    return(
        <>
        <Navbar/>
            <div className="corra-com-dkmodas">  
                {
                    produto.map((item,index)=>(
                    
                        <ProdutosLancamentos key={index} target="/nikerevolution" img={<Image src={item.nomeImagem} alt="Tênis nike revolution 7" width={100} height={100}/>} nome={item.nome} edicao={item.edicao} precoAntigo={parseFloat(item.precoAntigo).toString().replace(".",",")} precoNovo={parseFloat(item.precoNovo).toString().replace(".",",")+" no pix"} outrasCores="Mais opções de cores" desconto={`-${parseInt(item.desconto)}%`} parcelado={item.parcelado!=1 ? "ou "+item.parcelado+"x de R$"+parseFloat(item.valorParcela).toFixed(2).toString().replace(".",","):""}/>
                    ))
                }
                </div>
        </>
    )
    
}
import { useEffect, useState } from "react";

const { default: Image } = require("next/image");
const { default: ProdutosLancamentos } = require("./ProdutosLancamento");
const { default: Navbar } = require("./navbar");

export default function Product({endpoint,nameParam,categoria}){
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
            fetch(endpoint+"?"+nameParam+"="+categoria,{
                headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"}
    
            }).then((res)=>res.json())
            .then((dado)=>setProduto(dado)).then(()=>{
    
                let size = produto.length
                for(let i = 0;i<=size;i++){
                    produto.push(i);
                }    
            })
        },[])
        
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
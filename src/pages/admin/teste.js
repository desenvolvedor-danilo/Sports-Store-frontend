import Image from "next/image"
import { useEffect, useState } from "react"

export default function Teste(){
    
    const [produto,setProduto] = useState([{
        id:"",
        nome:"",
        valor:"",
        caminhoFoto:""
    }])

        useEffect(()=>{
            fetch("http://localhost:8080/deal/findall",
                {
                    headers:{"Access-Control-Allow-Origin":"http://localhost:8080"}
                }
            )
            .then((res)=>res.json())
            .then((dado)=>setProduto(dado))
            .catch((error)=>console.log(error))
            const size = produto.length;
            for(let i = 0;i<size;i++){
                produto.push(i);
            }
        },[produto])
        console.log(produto)
    return(
        <>

    { produto.map((item,index)=>(
        <p key={index}>id: {item.id} nome: {item.nome} valor: {item.valor}</p>
    ))}
    <>
    
    
    </>
   
        
        </>
    )
}
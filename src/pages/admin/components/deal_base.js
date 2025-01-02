import { useState } from "react"

export default function DealBase(){
    const [oferta,setOferta] = useState({
    id:"",    
    titulo:"",
    caminhoFoto:"",
    nome:"",
    valor:""    
    })
    const handleDealEdit = (e,type)=>{
        setOferta({...oferta,
            [type]:e.target.value
        })
    }
    const handleDeal = (e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/deal/create",{
            method:"POST",
            headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},
            body:JSON.stringify(oferta)
        }).then((res)=>console.log(res.text()))
        .catch((error)=>console.log(error))
    }
    return(
        <>
        <section className="container_pages">
        <div className="wrapper fadeInDown">
    <div id="formContentAdmin">
    <div className="fadeIn first">
    <h2 id="titulo_admin">Inserir Produtos</h2>
    </div>
    <form onSubmit={handleDeal} >
    <input type="text" placeholder="ID da oferta" name="id" value={oferta.id} onChange={(e)=>handleDealEdit(e,"id")}/>
    <input type="text" placeholder="Titulo da oferta" name="titulo" value={oferta.titulo} onChange={(e)=>handleDealEdit(e,"titulo")}/>
    <input type="text" placeholder="Caminho para as fotos" name="caminho" value={oferta.caminhoFoto} onChange={(e)=>handleDealEdit(e,"caminhoFoto")}/>
    <input type="text" placeholder="Nome do produto em oferta" name="oferta" value={oferta.nome} onChange={(e)=>handleDealEdit(e,"nome")}/>
    <input type="text" placeholder="Valor do produto em oferta" name="valor" value={oferta.valor} onChange={(e)=>handleDealEdit(e,"valor")}/>
    <input type="submit" value="Salvar"/>
    </form>
    </div>          
    </div>
        </section>
        </>
    )
}
import Image from "next/image"
import { useState } from "react"

export default function InsertBase(){
    const [produto,setProduto] = useState({
    id:"",
    codigo:"",
    categoria:"",
    edicao:"",
    nome:"",
    caminho:"/imagens/",
    precoAntigo:"",
    precoNovo:"",
    parcelado:""
    })
    const handleProductEdit =(e,type)=>{
        setProduto({...produto,
            [type]:e.target.value
        })
    }
    
    const handleProduct = (e) =>{
        e.preventDefault();
        fetch("http://localhost:8080/admin/insert",{
        method:"POST",
        headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},
        body:JSON.stringify(produto)
        }).then(res=>console.log(res.text()))
        .catch(error=>console.log(error))
    }
    return(
        <>
        <section className="container_pages">
        <div className="wrapper fadeInDown">
    <div id="formContentAdmin">
    <div className="fadeIn first">
    <h2 id="titulo_admin">Inserir Produtos</h2>
    </div>
    <form onSubmit={handleProduct}>
    <Image src={produto.caminho} alt="Sua imagem vai aparecer aqui" width={100} height={100}/> 
    <input type="text" placeholder="Código do produto" name="codigo" value={produto.codigo} onChange={(e)=>{handleProductEdit(e,"codigo")}}/> 
    <input type="text" placeholder="Nome do produto" name="nome" value={produto.nome} onChange={(e)=>{handleProductEdit(e,"nome")}}/>
    <input type="text" placeholder="Valor do produto" name="valor"  value={produto.precoAntigo} onChange={(e)=>{handleProductEdit(e,"precoAntigo")}}/>
    <input type="text" placeholder="Caminho e nome da imagem" name="imagem" value={produto.caminho} onChange={(e)=>{handleProductEdit(e,"caminho")}}/>
    <input type="text" placeholder="Valor do produto com desconto" name="desconto" value={produto.precoNovo} onChange={(e)=>handleProductEdit(e,"precoNovo")}/>
    <input type="text" placeholder="Edição do produto" name="edicao" value={produto.edicao} onChange={(e)=>handleProductEdit(e,"edicao")}/>
    <input type="text" placeholder="Categoria" name="categoria" value={produto.categoria} onChange={(e)=>{handleProductEdit(e,"categoria")}}/>
    <input type="text" placeholder="Quantas vezes no cartão de crédito" name="categoria" value={produto.parcelado} onChange={(e)=>{handleProductEdit(e,"parcelado")}}/>
    <input type="submit" value="Salvar"/>
    </form>
    </div>          
    </div>
        </section>
        </>
    )
}
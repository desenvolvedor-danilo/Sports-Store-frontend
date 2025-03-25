import { Context } from "@/pages/contexto/UserContext"
import Image from "next/image"
import { useState } from "react"
// import { useContext } from "react"
export default function InsertBase(){
// const {handleProductEdit,handleProduct,handleFoto,image,setImage,produto}=useContext(Context);
    const [image,setImage] = useState(null);
    const [produto,setProduto] = useState({
    id:"",
    codigo:"",
    categoria:"",
    edicao:"",
    nome:"",
    nomeImagem:"",
    precoAntigo:"",
    precoNovo:"",
    parcelado:""
    })
    const handleProductEdit =(e,type)=>{
        setProduto({...produto,
            [type]:e.target.value
        })
    }
    const handleFoto = () =>{
    const formData = new FormData();
    formData.append("file",image)
    fetch("http://localhost:8080/admin/insert-img",{
            method:"POST",
            body:formData,
            dataType:"jsonp"
        }).then((res)=>res.text())
          .then((data)=>setProduto({nomeImagem:data}))}
       
    const handleReset =()=>{
    setImage(null)
    setProduto({
    codigo:"",
    categoria:"",
    edicao:"",
    nome:"",
    nomeImagem:"",
    precoAntigo:"",
    precoNovo:"",
    parcelado:""
    })}
    
    const handleProduct = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file",image)
        await fetch("http://localhost:8080/admin/insert",{
        method:"POST",
        headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},
        body:JSON.stringify(produto)
        }).then(res=>console.log(res.text())).then(()=>handleReset())

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
    <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="upload_imagem" onBlur={handleFoto}/>
    {
        image && <Image src={URL.createObjectURL(image)} id="preview_img" alt="Imagem" width={150} height={150}/>
    }
    <input type="text" placeholder="Código do produto" name="codigo" value={produto.codigo} onChange={(e)=>{handleProductEdit(e,"codigo")}}/>     
    <input type="text" placeholder="Nome do produto" name="nome" value={produto.nome} onChange={(e)=>{handleProductEdit(e,"nome")}}/>
    <input type="text" placeholder="Valor do produto" name="valor"  value={produto.precoAntigo} onChange={(e)=>{handleProductEdit(e,"precoAntigo")}}/>
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
import { Context } from "@/pages/contexto/UserContext"
import Image from "next/image"
import { useState } from "react"
import { useContext } from "react"
export default function InsertBase(){
    const {header,handleError}=useContext(Context);
    const [respostaServidor,setRespostaServidor] = useState("");
    const [categoria,setCategoria] = useState("");
    const [image,setImage] = useState(null);
    const [images,setImages] = useState([]);
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
    const handleImagensEdit = (e) =>{
        setImages([...e.target.files])
    }
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
    parcelado:"",
    descricao:""
    })}
    const handleImagens =()=>{
        const formData = new FormData();
        formData.append("codigo",produto.codigo)
        images.forEach((image)=>{
        formData.append("file",image)            
        })
    fetch("http://localhost:8080/photosproducts/save",{
        headers:{"Access-Control-Allow-Origin":"http://localhost:8080"},
        method:"POST",
        body:formData
    }).then((res)=>console.log(res.text()))
    .catch((error)=>console.log(error));
}

    const handleProduct = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("codigo",produto.codigo)
        formData.append("nome",produto.nome)
        formData.append("categoria",categoria)
        formData.append("edicao",produto.edicao)
        formData.append("precoAntigo",produto.precoAntigo)
        formData.append("precoNovo",produto.precoNovo)
        formData.append("parcelado",produto.parcelado)
        formData.append("descricao",produto.descricao)
        formData.append("file",image)
        await fetch("http://localhost:8080/admin/insert",{
        headers:{"Access-Control-Allow-Origin":"http://localhost:8080"},
        method:"POST",
        body:formData
        }).then(res=>{
        if(!res.ok){
        handleError("Um erro ocorreu ao salvar produto verifique se você enviou todas as informações")
        }
        return res.text()
        }).then((dado)=>setRespostaServidor(dado))
          .then(()=>handleImagens())
          .then(()=>handleReset())

        .catch(error=>console.log(error.message))        
    }
    
    return(
        <>
        
        <section className="container_pages admin">
        <aside className="userCreated">{respostaServidor}</aside>
        
        <aside className="linha-decrescente" style={respostaServidor?{display: "block"}:{display: "none"}}/>
        <div className="wrapper fadeInDown admin">
    <div id="formContentAdmin">
    <div className="fadeIn first">
    <h2 id="titulo_admin">Inserir Produtos</h2>
    </div>
    <form onSubmit={handleProduct}>
    <fieldset className="fieldset_upload">
    <legend>Escolha uma imagem</legend>
    <input type="file" onChange={(e)=>setImage(e.target.files[0])} id="upload_imagem"/>
    {
        image && <Image src={URL.createObjectURL(image)} id="preview_img" alt="Imagem" width={150} height={150}/>
    }
    </fieldset>
    <fieldset className="fieldset_upload">
        <legend>Escolha mais imagens</legend>
        <input type="file" id="upload_imagem" multiple onChange={handleImagensEdit}/>
    </fieldset>
    <input type="text" placeholder="Código do produto" name="codigo" value={produto.codigo} onChange={(e)=>{handleProductEdit(e,"codigo")}}/>     
    <input type="text" placeholder="Nome do produto" name="nome" value={produto.nome} onChange={(e)=>{handleProductEdit(e,"nome")}}/>
    <input type="text" placeholder="Valor do produto" name="valor"  value={produto.precoAntigo} onChange={(e)=>{handleProductEdit(e,"precoAntigo")}}/>
    <input type="text" placeholder="Valor do produto com desconto" name="desconto" value={produto.precoNovo} onChange={(e)=>handleProductEdit(e,"precoNovo")}/>
    <input type="text" placeholder="Edição do produto" name="edicao" value={produto.edicao} onChange={(e)=>handleProductEdit(e,"edicao")}/>
    <textarea id="desc" rows="5" placeholder="Descrição do produto" name="descricao" value={produto.descricao} onChange={(e)=>handleProductEdit(e,"descricao")}></textarea>
    <fieldset>
        <legend>Escolha a cetegoria do produto</legend>
    <div className="categoria">
    <label htmlFor="esportivo">Esportivo</label>
    <input type="radio" id="esportivo" name="categoria" value="Esportivo" onChange={(e)=>setCategoria(e.target.value)}/> 
    </div>
    <div className="categoria">
    <label htmlFor="masculino">Masculino</label>
    <input type="radio" id="masculino" name="categoria" value="Masculino" onChange={(e)=>setCategoria (e.target.value)}/> 
    </div>
    <div className="categoria">
    <label htmlFor="feminino">Feminino</label>
    <input type="radio" id="feminino" name="categoria" value="Feminino" onChange={(e)=>setCategoria(e.target.value)}/> 
    </div>
    <div className="categoria">
    <label htmlFor="infantil">Infantil</label> 
    <input type="radio" id="infantil" name="categoria" value="Infantil" onChange={(e)=>setCategoria(e.target.value)}/>
    </div>
    </fieldset>
    
    <input type="text" placeholder="Quantas vezes no cartão de crédito" name="categoria" value={produto.parcelado} onChange={(e)=>{handleProductEdit(e,"parcelado")}}/>
    <input type="submit" value="Salvar"/>
    </form>
    </div>          
    </div>
        </section>
        </>
    )
}
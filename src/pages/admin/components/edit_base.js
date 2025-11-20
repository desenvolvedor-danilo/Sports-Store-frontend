import { Context } from "@/pages/contexto/UserContext";
import { useState } from "react"
import { useContext } from "react";
export default function EditBase(){
    const [status,setStatus] = useState(true)
    const {header,editableDados,dadosEditaveis,error,setError,handleError} = useContext(Context);
    const [produto,setProduto] = useState({id:"",codigo:"",categoria:"",edicao:"",
    nome:"",nomeImagem:"",precoAntigo:"",precoNovo:"",parcelado:""})
    const handleProductForCode = () =>{
    fetch("http://localhost:8080/admin/codigo?codigo="+produto.codigo)
        .then((res)=>{
            if(!res.ok){
                setStatus(false)
                reset()
                handleError("Código não pode ser nulo")
            }
            setStatus(true)
            return res.json()
        })
        .then((dado)=>setProduto(dado))
        .catch((error)=>setError(error.message))
    }
    const handleEditProduct = (e,name) =>{
        setProduto({...produto,
            [name]:e.target.value
        })
    }
    const reset = () =>{
setProduto({id:"",codigo:"",categoria:"",edicao:"",
nome:"",nomeImagem:"",precoAntigo:"",precoNovo:"",parcelado:""})        
}
    const handleProduct = (e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/admin/edit-product",{
            method:"PUT",
            headers:header,
            body:JSON.stringify(produto)
        }).then((res)=>console.log(res.json()))
        .then(()=>dadosEditaveis(e))
        .then(()=>reset)}
    return(
        <>
        {
            !status && <div className="userNonExist">{error}</div>
        }

        <main className="container_pages">

        <section className="wrapper fadeInDown">
    <section id="formContent">
    <section className="fadeIn first">
    <h2 id="titulo_admin">Editar Produtos</h2>
    </section>
    <form onSubmit={handleProduct}>
    <input type="text" placeholder="Codigo do produto" value={produto.codigo} name="codigo" onChange={(e)=>handleEditProduct(e,"codigo")} onBlur={handleProductForCode} />
    <input type="text" name="id" placeholder="ID do produto" value={produto.id} style={!editableDados ? {color: 'gray'}:{color: 'black'}} readOnly/>
    <input type="text" placeholder="Nome do produto" value={produto.nome} name="nome" style={!editableDados ? {color: 'gray'}:{color: 'black'}} onChange={(e)=>handleEditProduct(e,"nome")} readOnly={!editableDados ? true:false}/>
    <input type="text" placeholder="Valor do produto" value={produto.precoAntigo} name="valor" style={!editableDados ? {color: 'gray'}:{color: 'black'}} readOnly={!editableDados ? true:false} onChange={(e)=>handleEditProduct(e,"precoAntigo")}/>
    <input type="text" placeholder="Valor do produto com desconto" value={produto.precoNovo} name="desconto" style={!editableDados ? {color: 'gray'}:{color: 'black'}} onChange={(e)=>handleEditProduct(e,"precoNovo")} readOnly={!editableDados ? true:false}/>
    <input type="text" placeholder="Número de parcelas" value={produto.parcelado} name="pagamento" style={!editableDados ? {color: 'gray'}:{color: 'black'}} onChange={(e)=>handleEditProduct(e,"parcelado")} readOnly={!editableDados ? true:false}/>
    {
    !editableDados ?
    <input type="button" value="Editar" onClick={(e)=>dadosEditaveis(e)}/>
    :<input type="submit" value="Salvar"/>
    }
    </form>
    </section>          
    </section>
        </main>
        </>
    )
}
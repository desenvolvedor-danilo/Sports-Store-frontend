import { useContext, useState } from "react"
import { Context } from "@/pages/contexto/UserContext";
export default function DropBase(){
    const {header} = useContext(Context);
    const [codigo,setCodigo] =  useState({codigo:""});
    const [status,setStatus] = useState();
    const [produto,setProduto]= useState({nome:""});
    const [error,setError] = useState("");
    const handleCodigo = () =>{
        fetch("http://localhost:8080/admin/codigo?codigo="+codigo)
        .then((res)=>{
            if(!res.ok || codigo==="0" || codigo===""){
                handleReset()
                setStatus(false);
            throw new Error("Código é nulo ou o produto não existe")
            }
            setStatus(true)
            return res.json()
            
        })
        .then((dado)=>setProduto(dado))
        .catch((error)=>setError(error.message))
    }
    const handleReset =() =>{
        setProduto({
            nome:""
        })
        setCodigo({
            codigo:""
        });
    }
    const handleDeleteProduct = (e) =>{
        e.preventDefault();
        fetch("http://localhost:8080/admin/delete-product?codigo="+codigo,
            {
                method:"DELETE",
                headers: header
            }
        ).then((res)=>
        res.text()
            ).then(()=>handleReset())
        .catch((error)=>console.log(error.message))
    }
    return(
        <>
        {
             status===false && (
             <div className="userNonExist">{error}</div>
             )
            }
        <section className="container_pages">
        <div className="wrapper fadeInDown">
    <div id="formContent">
    <div className="fadeIn first">
    <h2 id="titulo_admin">Excluir produto</h2>
    </div>
        <form onSubmit={handleDeleteProduct}>
            <input type="text" placeholder="Insira o id do produto a ser deletado" value={codigo.codigo} onChange={(e)=>setCodigo(e.target.value)} onBlur={handleCodigo}/>
            <input type="text" id="big_box" placeholder="Verifique o nome do produto"  defaultValue={produto.nome} readOnly style={{color: 'gray'}}/>
            <input type="submit" value="Excluir"/>
        </form>
        </div>          
    </div>
        </section>
        </>
    )
}
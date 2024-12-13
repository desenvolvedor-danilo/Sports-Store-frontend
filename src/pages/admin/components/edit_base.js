import Image from "next/image";
import { useState } from "react"

export default function EditBase(){
    const [isEditable,setEditable] = useState(true);
    const editableEdit = (e)=>{
        e.preventDefault();
        setEditable(!isEditable)
    }
    return(
        <>
        <section className="container_pages">

        <div className="wrapper fadeInDown">
    <div id="formContent">
    <div className="fadeIn first">
    <h2 id="titulo_admin">Editar Produtos</h2>
    </div>
    <form>
    <input type="file" accept="image/*"/>
    <input type="text" placeholder="ID do produto" name="id"/>
    <input type="text" placeholder="Nome do produto" name="nome"/>
    <input type="text" placeholder="Valor do produto" name="valor"/>
    <input type="text" placeholder="Desconto a aplicar" name="desconto"/>
    <input type="text" placeholder="Formas de pagamentos" name="pagamento"/>
    <input type="text" placeholder="Tamanho do produto" name="Tamanhos"/>
    {
    isEditable ?
    <input type="button" value="Editar" onClick={(e)=>editableEdit(e)}/>
    :<input type="submit" value="Salvar" onClick={(ev)=>editableEdit(ev)}/>
    }
    </form>
    </div>          
    </div>
        </section>
        </>
    )
}
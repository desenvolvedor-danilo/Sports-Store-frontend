import { useEffect, useState } from "react";
import PopulandoTabela from "./PopulandoTabela";

export default function TableProduct(){
    const [number,setNumber] = useState();
    const [numberPage,setNumberPage]=useState(0);
    const [produto,setProduto] = useState([])
useEffect(()=>{
    fetch("http://localhost:8080/admin/findall?page="+numberPage)
    .then((res)=>res.json()).then((dado)=>{setProduto(dado.content),
    setNumber(dado.totalPages)})

        let size = produto.length
        for(let i = 1;i<=size;i++){
            produto.push(i);
        }
    },[numberPage,number])
    const EditPage = (numeroPage) =>{
        setNumberPage(numeroPage)
    }
    return(
        <>
<table className="tableHead">
  <thead>
    <tr>
      <th className="col" scope="col">codigo</th>
      <th className="col" scope="col">Nome</th>
      <th className="col" scope="col">Preço</th>
      <th className="col" scope="col">Parcelas</th>
    </tr>
  </thead>
  </table>
        {        
            produto.map((item,index)=>(
            <PopulandoTabela key={index} codigo={item.codigo} nome={item.nome} preco={item.precoNovo} parcelas={item.parcelado}/>
            ))
        }
        <footer className="Paginacao">
        {
            Array.from({length:number},(_,i)=>i)
            .map((numeroPagina)=>(
                <button key={numeroPagina} onClick={()=>setNumberPage(numeroPagina)} className="buttonPage">{numeroPagina+1}</button>
            ))
        }
        </footer>            
        </>
    )
}
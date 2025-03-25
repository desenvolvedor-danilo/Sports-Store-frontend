"use client"

import { createContext, useState } from 'react'
export const Context = createContext();
export default function ContextProvider({children}){
      const [email,setEmail] = useState("");
      const [editableDados,setEditableDados] = useState(false);
      const [editableEndereco,setEditableEndereco] = useState(false);
      const [isLogado,setIsLogado] = useState(false);
      const [dad,setDado] = useState("");
      const [image,setImage] = useState(null);
    //   const [produto,setProduto] = useState({
    //   id:"",
    //   codigo:"",
    //   categoria:"",
    //   edicao:"",
    //   nome:"",
    //   nomeImagem:"",
    //   precoAntigo:"",
    //   precoNovo:"",
    //   parcelado:""
    //   })
    
    //   const handleProductEdit =(e,type)=>{
    //     setProduto({...produto,
    //         [type]:e.target.value
    //     })
    // }

    // const handleFoto = () =>{
    //   const formData = new FormData();
    //   formData.append("file",image)
    //   fetch("http://localhost:8080/admin/insert-img",{
    //           method:"POST",
    //           body:formData,
    //           dataType:"jsonp"
    //       }).then((res)=>res.text())
    //         .then((data)=>setProduto({nomeImagem:data}))}

    //         const handleReset =()=>{
    //           setImage(null)
    //           setProduto({
    //           codigo:"",
    //           categoria:"",
    //           edicao:"",
    //           nome:"",
    //           nomeImagem:"",
    //           precoAntigo:"",
    //           precoNovo:"",
    //           parcelado:""
    //           })}

    //           const handleProduct = async (e) =>{
    //             e.preventDefault();
    //             const formData = new FormData();
    //             formData.append("file",image)
    //             await fetch("http://localhost:8080/admin/insert",{
    //             method:"POST",
    //             headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},
    //             body:JSON.stringify(produto)
    //             }).then(res=>console.log(res.text())).then(()=>handleReset())
        
    //             .catch(error=>console.log(error))        
    //         }

    const dadosEditaveis = (e)=>{
      e.preventDefault();
      setEditableDados(!editableDados);
    }
    const enderecoEditavel = (e) =>{
      e.preventDefault();
      setEditableEndereco(!editableEndereco);
    }
    return(
        <Context.Provider value={{email,setEmail,dad,setDado,setIsLogado,isLogado,editableDados,dadosEditaveis,editableEndereco,enderecoEditavel}}>
            {children}
        </Context.Provider>
    )

}

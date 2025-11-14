"use client"

import { createContext, use, useState } from 'react'
export const Context = createContext();
export default function ContextProvider({children}){
    // useStates
      const [email,setEmail] = useState("")
      const [editableDados,setEditableDados] = useState(false);
      const [editableEndereco,setEditableEndereco] = useState(false);
      const [error,setError] = useState("");
      const [isLogado,setIsLogado] = useState(false);
      const [dad,setDado] = useState("");
    
      // funções
      const dadosEditaveis = (e)=>{
      e.preventDefault();
      setEditableDados(!editableDados);
    }
    const enderecoEditavel = (e) =>{
      e.preventDefault();
      setEditableEndereco(!editableEndereco);
    }
    const handleError = (errorMessage) =>{
      throw new Error(errorMessage);
    }
    const logout = ()=>{
    setIsLogado(false);
    localStorage.removeItem("token");
  }
//   const cepEdit = (ev)=>{
//     const cep = ev.target.value.replace(/\D/g, '');
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//     .then(res=>res.json()
//     .then(data=>{console.log(data)
//     setForm(data); 
//     }
//   ))
// };

    //Estruturas usadas com frequência
    const header = {"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"}
    
    return(
        <Context.Provider value={{email,setEmail,dad,setDado,setIsLogado,isLogado,editableDados,dadosEditaveis,editableEndereco,enderecoEditavel,header, setEditableDados, error,setError,handleError, logout}}>
            {children}
        </Context.Provider>
    )

}

"use client"

import { createContext, use, useState } from 'react'
export const Context = createContext();
export default function ContextProvider({children}){
      const [email,setEmail] = useState("")
      const [editableDados,setEditableDados] = useState(false);
      const [editableEndereco,setEditableEndereco] = useState(false);
      const [error,setError] = useState("");
      const [isLogado,setIsLogado] = useState(false);
      const [dad,setDado] = useState("");
    const dadosEditaveis = (e)=>{
      e.preventDefault();
      setEditableDados(!editableDados);
    }
    const header = {"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"}
    const enderecoEditavel = (e) =>{
      e.preventDefault();
      setEditableEndereco(!editableEndereco);
    }
    const handleError = (errorMessage) =>{
      throw new Error(errorMessage);
    }
    return(
        <Context.Provider value={{email,setEmail,dad,setDado,setIsLogado,isLogado,editableDados,dadosEditaveis,editableEndereco,enderecoEditavel,header, setEditableDados, error,setError,handleError}}>
            {children}
        </Context.Provider>
    )

}

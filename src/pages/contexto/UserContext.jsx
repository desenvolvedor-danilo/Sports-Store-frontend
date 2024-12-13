"use client"

import { createContext, useState } from 'react'
export const Context = createContext();
export default function ContextProvider({children}){
    const [email,setEmail] = useState(
        {
          email:""
        }
      );
      const [editableDados,setEditableDados] = useState(false);
      const [editableEndereco,setEditableEndereco] = useState(false);
      const [isLogado,setIsLogado] = useState();
      const [dad,setDado] = useState(
        {
          dados:""
        }
      );         
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

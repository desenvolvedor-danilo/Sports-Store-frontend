"use client"

import { createContext, useState } from 'react'
export const Context = createContext();
export default function ContextProvider({children}){
    const [email,setEmail] = useState(
        {
          email:""
        }
      );
      const [isLogado,setIsLogado] = useState(false);
      const [dad,setDado] = useState(
        {
          dados:""
        }
      );         
      
    return(
        <Context.Provider value={{email,setEmail,dad,setDado,setIsLogado,isLogado}}>
            {children}
        </Context.Provider>
    )

}

import { Context } from "@/pages/contexto/UserContext";
import { useContext, useEffect, useState } from "react";
export default function Endereco(){
    const {editable,editavel} = useContext(Context);
    const [form,setForm] = useState(
    {
    cep:'',
    complemento:'',
    logradouro:'',
    bairro:'',
    localidade:'',
    uf:'',
    }
    );
    
    useEffect(()=>{
        const promisse = new Promise((dado)=>{
            dado(fetch(`http://localhost:8080/user/userinfo?email=${localStorage.getItem("email")}`,{
              headers:{"Authorization":localStorage.getItem("token")}
            }).then((res)=>res.json())
          )      
          })
     promisse.then((val)=>{
        console.log()
        setForm(
            {
                cep:val.cep,
                complemento:val.complemento,
                logradouro:val.logradouro,
                bairro:val.bairro,
                localidade:val.localidade,
                uf:val.uf,      
            }
        )
     })   
    },[])
return(
    <>
        
        <input type="text" style={!editable ? {color: "gray"} : {color: "black"}} readOnly={!editable ? true : false} name="cep" defaultValue={form.cep} className="fadeIn second perfil"/>
        <input type="text" style={!editable ? {color: "gray"} : {color: "black"}} readOnly={!editable ? true : false} name="logradouro" defaultValue={form.logradouro} className="fadeIn second perfil"/>
        <input type="text" style={!editable ? {color: "gray"} : {color: "black"}} readOnly={!editable ? true : false} name="bairro" defaultValue={form.bairro} className="fadeIn second perfil"/>
        <input type="text" style={!editable ? {color: "gray"} : {color: "black"}} readOnly={!editable ? true : false} name="localidade" defaultValue={form.localidade} className="fadeIn second  perfil"/>
        <input type="text" style={!editable ? {color: "gray"} : {color: "black"}} readOnly={!editable ? true : false} name="estado"   defaultValue={form.uf} className="fadeIn second  perfil"/>
        <input type="text" style={!editable ? {color: "gray"} : {color: "black"}} readOnly={!editable ? true : false} name="complemento" defaultValue={form.complemento} className="fadeIn second perfil"/> 
        
        
        
    </>
)
}
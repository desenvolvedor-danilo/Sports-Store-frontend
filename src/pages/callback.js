import Cookies from "js-cookie"
import { useContext, useEffect } from "react"
import { Context } from "./contexto/UserContext"
import { useRouter } from "next/router";

export default function CallbackLogin(){
    const {isLogado,setIsLogado} = useContext(Context);
    const router = useRouter()
    useEffect(()=>{
        setIsLogado(true)    
        localStorage.setItem("email",Cookies.get("email"))
        localStorage.setItem("token",Cookies.get("token"))
        localStorage.setItem("logado",isLogado)
        router.push("/")
    },[])
    return(
        <>
        <div class="d-flex justify-content-center ">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
        </>
    )
}
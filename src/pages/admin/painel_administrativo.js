
import Navbar from "../navbar";
import { useEffect, useState } from "react";
import LoginAdministrativo from "./components/login_admin";
import NavbarAdmin from "./components/navbar_admin";
import NavbarCrud from "./components/navbar_crud";
export default function Painel(){
    
    const [isLogado,setIsLogado] = useState();
    
    useEffect(()=>{
        setIsLogado(localStorage.getItem("isLogadoAdmin"))
    },[setIsLogado,isLogado])
    
    return(
        <>
        <NavbarCrud/>
        <LoginAdministrativo/>
        </>
    )
}

import Navbar from "../navbar";
import { useEffect, useState } from "react";
import LoginAdministrativo from "./components/login_admin";
import Grafics from "./components/grafics";
import NavbarAdmin from "./components/navbar_admin";
export default function Painel(){
    
    const [isLogado,setIsLogado] = useState();
    
    useEffect(()=>{
        setIsLogado(localStorage.getItem("isLogadoAdmin"))
    },[setIsLogado,isLogado])
    
    return(
        <>
        <Navbar/>
        <NavbarAdmin/>
        {
        isLogado ?
        <Grafics/>:<LoginAdministrativo/>
        }
        </>
    )
}
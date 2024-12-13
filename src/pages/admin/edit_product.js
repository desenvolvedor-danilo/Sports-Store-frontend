import Navbar from "@/pages/navbar";
import NavbarAdmin from "./components/navbar_admin";
import NotLogin from "./components/notlogin";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexto/UserContext";
import EditBase from "./components/edit_base";

export default function EditProduct(){
    const [isLogado,setIsLogado] = useState();
    useEffect(()=>{
        setIsLogado(localStorage.getItem("isLogadoAdmin"));
    },[setIsLogado,isLogado])
    return(
        <>
        <Navbar/>
        {
         !isLogado &&
         <NotLogin/>   
        }
        <NavbarAdmin/>
        {
        isLogado && 
        <EditBase/>
        }
        </>
    )
}
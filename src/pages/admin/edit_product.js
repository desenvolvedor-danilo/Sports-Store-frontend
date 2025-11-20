import Navbar from "@/pages/navbar";
import NavbarAdmin from "./components/navbar_admin";
import NotLogin from "./components/notlogin";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexto/UserContext";
import EditBase from "./components/edit_base";
import NavbarCrud from "./components/navbar_crud";

export default function EditProduct(){
    const [isLogado,setIsLogado] = useState();
    useEffect(()=>{
        setIsLogado(localStorage.getItem("isLogadoAdmin"));
    },[setIsLogado,isLogado])
    return(
        <>
        <NavbarCrud/>
        <EditBase/>
        </>
    )
}
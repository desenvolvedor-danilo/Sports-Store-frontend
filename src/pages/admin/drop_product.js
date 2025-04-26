import Navbar from "@/pages/navbar";
import DropBase from "./components/drop_base";
import NavbarAdmin from "./components/navbar_admin";
import NotLogin from "./components/notlogin";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexto/UserContext";
import NavbarCrud from "./components/navbar_crud";

export default function DropProduct(){
    const [isLogado,setIsLogado] = useState();
    useEffect(()=>{
        setIsLogado(localStorage.getItem("isLogadoAdmin"));
    },[setIsLogado,isLogado])
    
    return(
        <>
        <NavbarCrud/>
        <DropBase/>
        {/* {
        !isLogado && 
        <NotLogin/>
        }
        {isLogado &&
        <DropBase/>
        } */}
        </>
    )
}
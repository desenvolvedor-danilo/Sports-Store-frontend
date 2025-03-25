import Navbar from "@/pages/navbar";
import NavbarAdmin from "./components/navbar_admin";
import InsertBase from "./components/insert_base";
import { useEffect, useState } from "react";
import NotLogin from "./components/notlogin";
export default function InsertProduct(){
    const [isLogado,setIsLogado] = useState();
    useEffect(()=>{
        setIsLogado(localStorage.getItem("isLogadoAdmin"));
    },[setIsLogado,isLogado])
    
    return(
        
        <>
        <Navbar/>
        {/* {
            !isLogado &&
            <NotLogin/>
        } */}
        <NavbarAdmin/>
        
            
            <InsertBase/>
        
        
        </>
    )
}
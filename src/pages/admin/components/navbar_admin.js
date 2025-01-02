import { Context } from "@/pages/contexto/UserContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function NavbarAdmin(){
    const [isLogado,setIslogado] = useState()
    useEffect(()=>{
        setIslogado(localStorage.getItem("isLogadoAdmin"));
    },[setIslogado])
    const logout = ()=>{
    setIslogado(false);
    localStorage.clear();
    }
    return(

        <>
        <h1 id="titulo_centralizado">Painel administrativo</h1>
        <aside id="nav">
        <Link href="./painel_administrativo" className="crud_produtos">{isLogado ? "Dashboard":"Login"}</Link>
        <Link href="./insert_product" className="crud_produtos">Inserir produto</Link>
        <Link href="./drop_product" className="crud_produtos">Excluir produto</Link>
        <Link href="./edit_product" className="crud_produtos">Editar produto</Link>
        <Link href="./insert_deal" className="crud_produtos">Criar oferta</Link>
        <Link href="./insert_deal" className="crud_produtos">Ofertas cadastradas</Link>
        <Link href="./insert_deal" className="crud_produtos">Produtos cadastradas</Link>
        <Link href="" className="crud_produtos">Configurações</Link>
        <Link href="./painel_administrativo" className="crud_produtos" onClick={()=>logout()}>Logout</Link>
        </aside>
        </>
    )
}
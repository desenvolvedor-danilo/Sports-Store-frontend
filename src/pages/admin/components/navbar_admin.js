import { BadgePlus, CircleMinus, CirclePlus, ClipboardList, LogInIcon, LogOut, Minus, Pen, Plus, Settings } from "lucide-react";
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
        <Link href="./painel_administrativo" className="crud_produtos">{isLogado ? "Dashboard":<LogInIcon size={40}/>}</Link>
        {/* <Link href="./insert_fotos" className="crud_produtos">Upload de fotos</Link> */}
        <hr className="blocos"/>
        <h1 className="titulo_painel_admin">Produtos</h1>
        <Link href="./insert_product" className="crud_produtos"> <Plus size={40}/></Link>
        <Link href="./drop_product" className="crud_produtos">   <Minus size={40}/></Link>
        <Link href="./edit_product" className="crud_produtos">   <Pen size={40}/></Link>
        <Link href="./getall-products" className="crud_produtos"><ClipboardList size={40}/></Link>
        <hr/>
        <h1 className="titulo_painel_admin">Ofertas</h1>
        <Link href="./insert_deal" className="crud_produtos"><Plus size={40}/></Link>
        <Link href="./drop_product" className="crud_produtos"><Minus size={40}/></Link>
        <Link href="./edit_product" className="crud_produtos"><Pen size={40}/></Link>
        <Link href="./insert_deal" className="crud_produtos"><ClipboardList size={40}/></Link>
        <hr/>
        <h1 className="titulo_painel_admin">Slides</h1>
                <Link href="./insert_slides" className="crud_produtos"><Plus size={40}/></Link>
                <Link href="./editar-slide" className="crud_produtos"><Pen size={40}/></Link>
        <hr/>
        <Link href="" className="crud_produtos"><Settings size={50}/></Link>
        <Link href="./painel_administrativo" className="crud_produtos" onClick={()=>logout()}><LogOut size={40}/></Link>
        </aside>
        </>
    )
}
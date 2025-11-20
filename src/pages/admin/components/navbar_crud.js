import Link from "next/link"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import Refresh from "../../refresh-for-time"
import { ClipboardList, LogIn, LogOut, Minus, Pen, Plus, Settings } from "lucide-react"

export default function NavbarCrud(){
  useEffect(()=>{
    setIsLogado(localStorage.getItem("logado"))
  },[])
  const [isLogado,setIsLogado] = useState();
  const logout = ()=>{
    setIsLogado(false);
    localStorage.clear()
  }
  const [open, setOpen] = useState(false);
  
  const onOpen = () => setOpen(true);
  
  useEffect(() => {
      if (open) {
          document.body.style.paddingRight = "0px";
          document.body.style.overflowY = "scroll";
      } else {
          document.body.style.paddingRight = "0px";
          document.body.style.overflowY = "scroll";
      }
      // Clean up the style when the component unmounts
      return () => {
          document.body.style.paddingRight = "0px";
          document.body.style.overflowY = "scroll";
      };
  }, [open]);
    return(
        <main>
        <nav className="navbar navbar-dark bg-dark fixed-top" id="navegacao">
        <div className="container-fluid">
          
          <Link className="navbar-brand" href="/"><Image src={require("../../imagens/2985284b-260f-4cea-a4d8-9c8f72234f6f.png")} priority alt="dk modas" width="68" height="61"/></Link>             
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="offcanvas offcanvas-end text-bg-dark crud" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                    <Link href="./painel_administrativo">{<LogIn size={40}/>}</Link>
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body" id="offcanvas-body-crud">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" id="navbar-crud">
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Produtos
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><Link className="dropdown-item" href="./insert_product"><Plus size={40}/></Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="./drop_product"><Minus size={40}/></Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="./edit_product"><Pen size={40}/></Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="./getall-products"><ClipboardList size={40}/></Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Ofertas
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><Link className="dropdown-item" href="./insert_deal"><Plus size={40}/></Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="./drop_deal"><Minus size={40}/></Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="./edit_deal"><Pen size={40}/></Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="./list_deal"><ClipboardList size={40}/></Link></li>
          </ul>
        </li>
                        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Slides
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><Link className="dropdown-item" href="./insert_slides"><Plus size={40}/></Link></li>
          <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="./drop_slide"><Minus size={40}/></Link></li>
          <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="editar-slide"><Pen size={40}/></Link></li>    
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Conta
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><Link className="dropdown-item" href="./configuracao"><Settings size={40}/></Link></li>
          <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" href="./logout"><LogOut size={40}/></Link></li>  
          </ul>
        </li>
      </ul>
                  
                <Refresh/>
              </div>
            </div>
          </div>
        </nav>
        </main>
    )
}
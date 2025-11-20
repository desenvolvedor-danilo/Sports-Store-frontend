import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import RefreshForTime from "./refresh-for-time"
import Request from "./request"

export default function Navbar(){
  const [isLogado,setIsLogado] = useState();
  const [username,setUsername] = useState("")
  const [isActived,setIsActived] = useState(false);
  const [open, setOpen] = useState(false);
  const [urlPictureProfile,setUrlPictureProfile] = useState("")
 
  const onOpen = () => setOpen(true);
  const refreshToGetProfilePicture = ()=> {
                        fetch(`http://localhost:8080/user/refresh-token?token=${localStorage.getItem("refresh-token")}`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "http//localhost:8080" }
                    }).then((res) =>
                        res.json()
                  ).then((data)=>{
                      localStorage.setItem("token",data.token)
                      localStorage.setItem("refresh-token",data.refreshToken)
                      setIsActived(true)
                    })
                      .catch((e)=>{
                        setIsLogado(false)
                        setIsActived(false)
                        localStorage.clear()
                      })                     
}
  const refreshToGetUsername = ()=> {
                        fetch(`http://localhost:8080/user/refresh-token?token=${localStorage.getItem("refresh-token")}`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "http//localhost:8080" }
                    }).then((res) =>res.json())       
                      .then((data)=>{
                      localStorage.setItem("token",data.token)
                      localStorage.setItem("refresh-token",data.refreshToken)})
                      .catch(()=>{
                        setIsLogado(false)
                        setIsActived(false)
                        localStorage.clear()
                      })
                }
  const logout = ()=>{
    setIsLogado(false);
    localStorage.clear();
  }

  useEffect(()=>{
    setIsLogado(localStorage.getItem("logado"))
  },[])

  useEffect(() => {
      if (open) {
          document.body.style.paddingRight = "0px";
          document.body.style.overflowY = "scroll";
      } else {
          document.body.style.paddingRight = "0px";
          document.body.style.overflowY = "scroll";
      }
      return () => {
          document.body.style.paddingRight = "0px";
          document.body.style.overflowY = "scroll";
      };
  }, [open]);
  
  useEffect(()=>{
    if(isLogado && localStorage.getItem("email")){
    fetch("http://localhost:8080/user/get-picture-profile?email="+localStorage.getItem("email"),{
    headers:{"Authorization":localStorage.getItem("token"), "Content-Type": "application/json", "Access-Control-Allow-Origin": "http//localhost:8080"}}
    ).then((res)=>
      res.text()
    ).then((dado)=>setUrlPictureProfile(dado))
     .catch(()=>{
     refreshToGetProfilePicture()
     setIsActived(false)
  })  
    fetch(`http://localhost:8080/user/get-users?email=${localStorage.getItem("email")}`,{
            headers:{
              "Authorization":localStorage.getItem("token"),"Content-Type": "application/json", "Access-Control-Allow-Origin": "http//localhost:8080"}}
              ).then((res)=>
                res.text()
              ).then((dado)=>setUsername(dado))
               .catch(()=>{
                refreshToGetUsername()
                setIsActived(false)
              })
              //  console.clear()
            }
  },[isLogado,isActived])
    return(   
        <main>
        <nav className="navbar navbar-dark bg-dark fixed-top" id="navegar">
        <div className="container-fluid">
          
          <Link className="navbar-brand" href="/"><Image src={require("./imagens/2985284b-260f-4cea-a4d8-9c8f72234f6f.png")} priority alt="dk modas" width="68" height="61"/></Link>             
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  {
                    isLogado ?
                     <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {urlPictureProfile ?
                    <>
                    <img src={urlPictureProfile} alt="icone login" width="28" height="28" id="imagePerfil"/> {username}
                    </>
                    :
                    <>
                   <Image src={require("./imagens/pngegg.png")} alt="icone login" width="28" height="28"/> {username}
                    </>
                    }
                    </Link>

                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li><Link className="dropdown-item" href="/perfil">Perfil</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" href="/informacoes">Informações de conta</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" href="/configuracoes">Configurações</Link> </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link className="dropdown-item" href="/compras">Historico de comprar</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><Link  className="dropdown-item" href="/" onClick={()=>logout()}>Sair</Link></li>
                    </ul>
                    </li> : 
                    <>
                    <Image src={require("./imagens/pngegg.png")} alt="icone login" width="28" height="28"/> <Link href="/login">Ir para login </Link>
                    </>
                  }
                </h5>
                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <SearchBar/>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link className="nav-link active" href="/" onClick={onOpen}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/sobre">Quem somos</Link>
                  </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/masculino" role="button" aria-expanded="false" onClick={onOpen}>
                        Moda masculina
                      </Link>
                      </li>
                      
                    <li className="nav-item">
                      <Link className="nav-link" href="/feminino" role="button"  aria-expanded="false">
                        Moda feminina
                      </Link>
                      </li>
                        <li>
                        <Link className="nav-link" href="/infantil" role="button"  aria-expanded="false">
                          Moda infantil
                        </Link>
                        </li>
                </ul>
                <RefreshForTime/>
              </div>
            </div>
          </div>
        </nav>
        </main>
    )
}
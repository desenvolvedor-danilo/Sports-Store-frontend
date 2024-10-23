import Link from "next/link"
import Navbar from "./navbar"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Eye, EyeOff } from "lucide-react";
import { Context } from "./contexto/UserContext";
export default function Login(){
  const [status,setStatus] = useState();
  const [login,setLogin] = useState({email:'',password:''})
  const [isShow,setIsShow] = useState(false);
  const {isLogado,setIsLogado} = useContext(Context);
  const [token,setToken] = useState({
    token:""
  }
  )
  const router = useRouter();
  const handleFormEdit = (event,name)=>{
    setLogin({...login,
    [name]:event.target.value})
  }
  const editShow = (e)=>{
    e.preventDefault();
    setIsShow(!isShow);
  }
  const handleForm = async (event)=>{
    try {
      event.preventDefault();
      const response = await fetch("http://localhost:8080/user/login",{
        method:"POST",
        headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},
        body:JSON.stringify(login),
      })
      const promisse = new Promise((dado)=>{
        dado(response.text());
      })
      promisse.then((val)=>{
        setToken({token:val})
      })
      setStatus(response.status)
      if(response.ok){
        setIsLogado(true);
      }
    } catch (error) {
    console.log(error);   
    }
  }
  console.log(token.token)
  useEffect(()=>{
    if(status===200){
  localStorage.setItem("token",token.token);
  localStorage.setItem("email",login.email);
  router.push("/")
    }
    
  },[login,token,status,router])
  console.log(token.token)
     return(
        <>
        <Navbar/>
        {
        status >= 400 && (<p className="userNonExist">Nome de usuário ou senha errado!</p>)
        }
         <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h1>Logar-se</h1>
              </div>
              <form onSubmit={handleForm}>
                <input type="email" id="email" className="fadeIn second" name="login" placeholder="login" value={login.email} onChange={(e)=>{handleFormEdit(e,"email")}}/>
                
                <input type={!isShow ? "password":"text"} id="password" className="fadeIn third" name="login" placeholder="password" value={login.password} onChange={(e)=>{handleFormEdit(e,"password")}}/>
                {
                  !isShow ? <button className="visibility" onClick={(e)=>editShow(e)}><Eye  size="18"/></button> : <button className="visibility" onClick={(e)=>editShow(e)}><EyeOff/></button>
                }
                <input type="submit" className="fadeIn fourth" value="Log In"/> 

                
              </form>
              
              <div id="formFooter">
                <Link className="underlineHover" href="/confirmed_to_redifine_password">Esqueceu a Senha?</Link> <br/>
                <Link className="underlineHover" id="cadastro" href="/cadastro">Cadastre-se</Link>
              </div>
              
            </div>
          </div>
        </>
    )
}
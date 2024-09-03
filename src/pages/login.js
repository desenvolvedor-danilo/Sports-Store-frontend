import Link from "next/link"
import Navbar from "./Navbar"
import { useState } from "react"
export default function Login(){
  const [login,setLogin] = useState(
    {
      login:'',
      password:'',
    }
  )
  const handleFormEdit = (event,name)=>{
    setLogin({...login,
      [name]:event.target.value
    })
  }
  const handleForm = async (event)=>{
    try {
      event.preventDefault();
      const response = await fetch("http://localhost:8080/user/login",{
        method:"POST",
        headers:{"ContentType":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},
        body:JSON.stringify(login)
      })
      if(response.status===200){
        console.log("Logado");
      }
    } catch (error) {
      
    }
  }

    return(
        <>
        <Navbar/>
         <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h1>Logar-se</h1>
              </div>

              <form onSubmit={handleForm}>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={login.login} onChange={(e)=>{handleFormEdit(e,"login")}}/>
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" value={login.password} onChange={(e)=>{handleFormEdit(e,"password")}} />
                <input type="submit" className="fadeIn fourth" value="Log In"/>
              </form>
              <div id="formFooter">
                <Link className="underlineHover" href="/redefinir_senha">Esqueceu a Senha?</Link> <br/>
                <Link className="underlineHover" id="cadastro" href="/cadastro">Cadastre-se</Link>
              </div>
            </div>
          </div>
        </>
    )
}
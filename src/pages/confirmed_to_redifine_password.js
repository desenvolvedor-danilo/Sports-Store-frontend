import Navbar from "./navbar"
import { useContext, useEffect, useState } from "react"
import { Context } from "./contexto/UserContext"
import { useRouter } from "next/router";
export default function ConfirmedToRedifinePassword(){
  
  const router = useRouter()
  const {dad} = useContext(Context);  
  const [email,setEmail] = useState({email:""})
  
  const emailEdit = (e,ty)=>{
    localStorage.setItem("email",e.target.value);
    setEmail({...email,
      [ty]:e.target.value
    })
  }

  const enviar = (e) =>{
    e.preventDefault(); 
    fetch(`http://localhost:8080/user/redifine?email=${email.email}`).then(res=>{console.log(res.status)
       res.text().then(dado=>{dad.dados=dado}).then(()=>{router.push("/otp")})
    })  
  }

      return(
        <>
        <Navbar/>
        <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h1>Recuperar senha</h1>
              </div>
              <form id="form" onSubmit={enviar}>
                <input type="email" id="acesso" className="fadeIn second" name="acesso" placeholder="Digite seu E-mail" value={email.email} required onChange={(e)=>{emailEdit(e,"email")}}/>
                <input type="submit" className="fadeIn fourth" value="Enviar"/>
              </form>
              <div className="fadeIn first" id="info"></div>
              </div>
              </div>
        </>

    )
  }
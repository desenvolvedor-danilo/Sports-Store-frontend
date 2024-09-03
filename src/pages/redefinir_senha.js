import Navbar from "./Navbar"
import { useState } from "react"
export default function RedifinirSenha(){
    const [mail,setEmail] = useState();
    function enviar(e){
        e.preventDefault();
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
                <input type="email" id="acesso" className="fadeIn second" name="acesso" placeholder="Digite seu E-mail" required/>
                <input type="submit" className="fadeIn fourth" value="Enviar" onClick={(e)=>setEmail(e.target.value)}/>
              </form>
              <div className="fadeIn first" id="info"></div>
              {mail &&(
                <div id="info">
                    Se o seu email estiver no nosso banco de dados você receberá um link para redefinir sua senha
                </div>
              )


              }
              </div>
              </div>
        </>
    )
}
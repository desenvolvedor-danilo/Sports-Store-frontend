import Link from "next/link"

export default function LoginAdministrativo(){
return(
    <>
    <section className="container_pages">
    <div className="wrapper fadeInDown">
    <div id="formContentAdmin">
    <div className="fadeIn first">
    <h2 id="titulo_admin">Login</h2>
    </div>
    
    <form>
    <input type="email" id="email" className="fadeIn second" name="login" placeholder="login"/>           
    <input type="password" id="password" className="fadeIn third" name="login" placeholder="password"/>
    <input type="submit" className="fadeIn fourth" value="Log In"/> 
    </form>
    <div id="formFooter">
    <Link className="underlineHover" href="/confirmed_to_redifine_password">Esqueceu a Senha?</Link> <br/>
    </div>          
    </div>
    </div>    
    </section>
    </>
)
}
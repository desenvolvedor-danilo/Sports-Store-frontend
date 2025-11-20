import Link from "next/link"
import Navbar from "./navbar"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Eye, EyeOff } from "lucide-react";
import { Context } from "./contexto/UserContext";
export default function Login() {
  const [status, setStatus] = useState();
  const [login, setLogin] = useState({ email: '', password: '' })
  const [error,setError] = useState("")
  const [isShow, setIsShow] = useState(false);
  const { isLogado, setIsLogado, handleError, header } = useContext(Context);
  const [token, setToken] = useState({
    token: "",
    refreshToken: ""
  }
  )
  const router = useRouter();
  const handleFormEdit = (event, name) => {
    setLogin({
      ...login,
      [name]: event.target.value
    })
  }
  const editShow = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  }

  const handlerLoginGoogle =  () => {
    router.push("http://localhost:8080/oauth2/authorization/google");
  }
  const handlerLoginFacebook = () => {
    router.push("http://localhost:8080/oauth2/authorization/facebook")
  }

  const handleForm = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},
      body: JSON.stringify(login),
    }).then((res) => {
      if (res.status!=200) {
        throw new Error("Nome de usuário ou senha errado!")
      }
      setStatus(res.status)
      setIsLogado(true);
      return res.json()
    })
    .then((dado) => setToken(dado))
    .catch((e) => setError(e.message))
  }
  useEffect(() => {
    if (status === 200) {
      localStorage.setItem("token", token.token);
      localStorage.setItem("refresh-token", token.refreshToken)
      localStorage.setItem("email", login.email);
      localStorage.setItem("logado", isLogado);
      router.push("/")
    }

  }, [login, token, status, router, isLogado])
  return (
    <>
      <Navbar />
      {
        error && <div className="userNonExist">
          {error}
        </div>
      }

      <div className="wrapper fadeInDown">

        <div id="formContent">
          <div className="fadeIn first">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleForm} id="formLogin" name="login">
            <input type="email" id="email" className="fadeIn second mb-1" name="login" placeholder="login" value={login.email} onChange={(e) => { handleFormEdit(e, "email") }} />

            <input type={!isShow ? "password" : "text"} id="password" className="fadeIn third mb-0" name="login" placeholder="password" value={login.password} onChange={(e) => { handleFormEdit(e, "password") }} />
            {
              !isShow ? <button className="visibility" onClick={(e) => editShow(e)}><Eye size="18" /></button> : <button className="visibility" onClick={(e) => editShow(e)}><EyeOff /></button>
            }
            <input type="submit" className="fadeIn fourth mb-4" value="Log In" />
          </form>
          <button onClick={handlerLoginGoogle} className="w-75 google-btn rounded-1 mb-1 p-0 bg-white hover-overlay" style={{backgroundColor: "hsla(195, 83%, 58%, 0.3)"}}>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" />
            <span>Continue com Google</span>
          </button>
          <button className="w-75 rounded-1 d-block btn btn-primary btn-lg mx-auto mb-1" onClick={handlerLoginFacebook}>
          <img src="https://img.icons8.com/?size=100&id=87264&format=png&color=000000" className="bi bi-facebook me-1" width="38px" height="38px"/><p className="h6 d-inline">Continue com Facebook</p>
          </button>
          <div id="formFooter">
            <Link className="underlineHover" href="/confirmed_to_redifine_password">Esqueceu a Senha?</Link> <br />
            <Link className="underlineHover" id="cadastro" href="/cadastro">Cadastre-se</Link>
          </div>

        </div>

      </div>

    </>
  )
}
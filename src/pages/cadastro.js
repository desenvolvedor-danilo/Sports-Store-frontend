import { useContext, useEffect, useState } from "react"
import Navbar from "./navbar"
import { useRouter } from "next/router";
import { Eye, EyeOff } from "lucide-react";
import { Context } from "./contexto/UserContext";

 export default function Cadastro(){
  const router = useRouter();
  const [error, setError] = useState("");
  const [isError,setIsError] = useState(false);
  const {header,handleError} = useContext(Context)
  const [resp,setResp] = useState();
  const [form,setForm] = useState({
    email:'',
    name:'',
    username:'',
    password:'',
    passwordVerified:'',
    cpf:'',
    cep:'',
    complemento:'',
    logradouro:'',
    bairro:'',
    localidade:'',
    uf:'',

  })
  const [isShow,setIsShow] = useState(false);
  const [isShow2,setIsShow2] = useState(false);
  
  const handleFormEdit = (event,name)=>{
      setForm({...form,
      [name]: event.target.value
    })
  }
  
  const cepEdit = (ev)=>{
    const cep = ev.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=>  res.json())
  .then((data)=>{
      if(data.erro){
        setIsError(true);
        throw new Error("Nenhum resultado encontrado para o CEP informado");
      }else{
        setIsError(false);
        setForm(data)

      }
      }).catch((error)=>setError(error.message))
  }

  const handleForm = async (event)=>{
    event.preventDefault();
       await fetch("http://localhost:8080/user/register",
      {method:'POST',
       headers:header,
       body:JSON.stringify(form)
      }).then((res)=>{
        if(!res.ok){
          setResp(res.status)
          handleError("Ocorreu um erro durante o cadastro verifique as informações");
        }
        router.push("/confirm");
      }).catch((error)=>setError(error))
    } 


    const editShow = (e) =>{
  e.preventDefault()
  setIsShow(!isShow);
}
const editShow2 = (e)=>{
  e.preventDefault();
  setIsShow2(!isShow2);
}
    return(
        <>
          <Navbar/>
          {
        isError && (<div className="userNonExist">
          {error}
        </div>)
      }
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h1>Cadastrar-se</h1>
          </div>
        <form onSubmit={handleForm} id="formCadastro" name="cadastro">
        <input type="text" id="cep" className="fadeIn second" name="cadastro" placeholder="CEP" required value={form.cep} onBlur={cepEdit} onChange={(e)=>{handleFormEdit(e,"cep")}}/>
        <input type="text"  id="rua" className="fadeIn second" name="cadastro" placeholder="Logradouro" required defaultValue={form.logradouro}/>
        <input type="text"  id="bairro" className="fadeIn second" name="cadastro" placeholder="Bairro" required defaultValue={form.bairro}/>
        <input type="text"  id="cidade" className="fadeIn second" name="cadastro" placeholder="Cidade" required defaultValue={form.localidade}/>
        <input type="text"  id="estado" className="fadeIn second" name="cadastro" placeholder="Estado" required defaultValue={form.uf}/>
        <input type="text"  id="complemento" className="fadeIn second" name="cadastro" placeholder="Complemento" value={form.complemento}  onChange={(e)=>handleFormEdit(e,"complemento")}/>
        <input type="text" id="nome" className="fadeIn second" name="cadastro" placeholder="Nome" required value={form.name} onChange={(e)=>{handleFormEdit(e,'name')}}/>
        <input type="email" id="email" className="fadeIn second" name="cadastro" placeholder="E-mail" autoFocus required value={form.email} onChange={(e)=>{handleFormEdit(e,'email'),localStorage.setItem("email",e.target.value)}}/>
        <input type="text" id="login" className="fadeIn second" name="cadastro" placeholder="Username" required value={form.username} onChange={(e)=>{handleFormEdit(e,'username')}}/>
        <input type={!isShow ? "password" : "text"} id="senha" className="fadeIn second" name="cadastro" placeholder="Senha" required value={form.password} onChange={(e)=>handleFormEdit(e,'password')}/>
        {
          !isShow ? <button className="visibility" onClick={(e)=>editShow(e)}><Eye/></button> : <button className="visibility" onClick={(e)=>editShow(e)}><EyeOff/></button>
        }

        <input type={!isShow2 ? "password" : "text"} id="senhaVerificador" className="fadeIn second" name="cadastro" placeholder="Confirme a senha" required value={form.passwordVerified} onChange={(e)=>handleFormEdit(e,"passwordVerified")}/>
        {
        !isShow2 ? <button className="visibility" onClick={(e)=>editShow2(e)}><Eye/></button> : <button className="visibility" onClick={(e)=>editShow2(e)}><EyeOff/></button>
        }
        <input type="text" id="cpf" className="fadeIn second" name="cadastro" placeholder="CPF" required value={form.cpf} onChange={(e)=>{handleFormEdit(e,'cpf')}}/> 
        <input type="submit" className="fadeIn fourth" value="Cadastrar"/>    
        {resp == 400 && (
          <div className="userError">
            User already exists
          </div>
        )
      }
      {form.password!=form.passwordVerified &&
        <div className="userError">
          Senha diferente
        </div>
        }
      </form>
</div>
</div>
        </>
    )
  }
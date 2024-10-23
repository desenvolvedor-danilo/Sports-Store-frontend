import { useContext, useEffect, useState } from "react"
import Navbar from "./navbar"
import { useRouter } from "next/router";
import { Eye, EyeOff } from "lucide-react";
export default function Cadastro(){
  const router = useRouter();
  const [resp,setResp] = useState();
  const [form,setForm] = useState({
    email:'',
    name:'',
    username:'',
    password:'',
    cpf:'',
    cep:'',
    complemento:'',
    logradouro:'',
    bairro:'',
    localidade:'',
    uf:'',
  })
  const [isShow,setIsShow] = useState(false);
  
  const handleFormEdit = (event,name)=>{
      setForm({...form,
      [name]: event.target.value
    })
  }
  const cepEdit = (ev)=>{
    const cep = ev.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res=>res.json()
    .then(data=>{console.log(data)
    setForm(data); 
    }
  ))
};
  const handleForm = async (event)=>{
    try{
    event.preventDefault();
       const response = await fetch("http://localhost:8080/user/register",
      {method:'POST',
       headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http//localhost:8080"},
       body:JSON.stringify(form)
      })

     setResp(response.status);

      if(response.status==200){
        router.push("/login");
       } 
        }catch(err){
      console.log(err);
    }
}
const editShow = (e) =>{
  e.preventDefault()
  setIsShow(!isShow);
}
    return(
        <>
          <Navbar/>
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h1>Cadastrar-se</h1>
          </div>
        <form onSubmit={handleForm}>
        <input type="text" id="cep" className="fadeIn second" name="cadastro" placeholder="CEP" required value={form.cep} onBlur={cepEdit} onChange={(e)=>{handleFormEdit(e,"cep")}}/>
        <input type="text"  id="rua" className="fadeIn second" name="cadastro" placeholder="Logradouro" required defaultValue={form.logradouro}/>
        <input type="text"  id="bairro" className="fadeIn second" name="cadastro" placeholder="Bairro" required defaultValue={form.bairro}/>
        <input type="text"  id="cidade" className="fadeIn second" name="cadastro" placeholder="Cidade" required defaultValue={form.localidade}/>
        <input type="text"  id="estado" className="fadeIn second" name="cadastro" placeholder="Estado" required defaultValue={form.uf}/>
        <input type="text"  id="complemento" className="fadeIn second" name="cadastro" placeholder="Complemento" value={form.complemento}  onChange={(e)=>handleFormEdit(e,"complemento")}/>
        <input type="text" id="nome" className="fadeIn second" name="cadastro" placeholder="Nome" required value={form.name} onChange={(e)=>{handleFormEdit(e,'name')}}/>
        <input type="email" id="email" className="fadeIn second" name="cadastro" placeholder="E-mail" autoFocus required value={form.email} onChange={(e)=>{handleFormEdit(e,'email');
        
         localStorage.setItem("email",e.target.value); 
        }
        }/>
        <input type="text" id="login" className="fadeIn second" name="cadastro" placeholder="Username" required value={form.username} onChange={(e)=>{handleFormEdit(e,'username')}}/>
        <input type={!isShow ? "password" : "text"} id="senha" className="fadeIn second" name="cadastro" placeholder="Senha" required value={form.password} onChange={(e)=>{handleFormEdit(e,'password')

        }}/>
        {
          !isShow ? <button className="visibility" onClick={(e)=>editShow(e)}><Eye/></button> : <button className="visibility" onClick={(e)=>editShow(e)}><EyeOff/></button>
        }
        <input type="text" id="cpf" className="fadeIn second" name="cadastro" placeholder="CPF" required value={form.cpf} onChange={(e)=>{handleFormEdit(e,'cpf')}}/> 
        <input type="submit" className="fadeIn fourth" value="Cadastrar"/>    
        {resp == 400 && (
          <div className="userError">
            User already exists
          </div>
        )
        }
      </form>
      
</div>
</div>
        </>
    )
}
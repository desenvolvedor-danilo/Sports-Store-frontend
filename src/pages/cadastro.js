import { useState } from "react"
import Navbar from "./Navbar"
import ParagrafoCondicional from "./paragrafoCondicional"
export default function Cadastro(){
  const [form,setForm] = useState({
    email:'',
    username:'',
    password:'',
    cpf:'',
    cep:'',
  })
  const [resp,setResp] = useState();
  const handleFormEdit = (event,name)=>{
      setForm({...form,
      [name]: event.target.value
    })
  }
  let response;
  const headers = {
  "Content-Type":"application/json",
  "Access-Control-Allow-Origin":"http//localhost:8080",
  }
  const handleForm = async (event)=>{
    try{
    event.preventDefault();
      response = await fetch("http://localhost:8080/user",
      {method:'POST',
       headers:headers,
       body:JSON.stringify(form)
      })
      //  let p = document.createElement("div");
       setResp(response.status);
      //  if(response.status==500){
      //  p.textContent="Usuário já existe";
      //  p.style.padding="0";
      //  p.style.margin="0";
      //  p.style.marginTop="-10px"
      //  document.querySelector("form").appendChild(p);
      // 
      // return <div>Usuário já existe</div> 
      // }
    }catch(err){
      console.log(err);
    }
    
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
        <input type="email" id="email" className="fadeIn second" name="cadastro" placeholder="E-mail" required value={form.email} onChange={(e)=>{handleFormEdit(e,'email')}}/>
        <input type="text" id="login" className="fadeIn second" name="cadastro" placeholder="Username" required value={form.username} onChange={(e)=>{handleFormEdit(e,'username')}}/>
        <input type="password" id="senha" className="fadeIn second" name="cadastro" placeholder="Password" required value={form.password} onChange={(e)=>{handleFormEdit(e,'password')}}/>
        <input type="text" id="cpf" className="fadeIn second" name="cadastro" placeholder="CPF" required value={form.cpf} onChange={(e)=>{handleFormEdit(e,'cpf')}}/>
        <input type="text" id="cep" className="fadeIn second" name="cadastro" placeholder="CEP" required value={form.cep} onChange={(e)=>{handleFormEdit(e,'cep')}}/>
        <input type="submit" className="fadeIn fourth" value="Cadastrar"/>    
        {resp == 500 &&(
          <div className="userExist">
            Usuário já existe
          </div>
        )
        }
      </form>
      
</div>
</div>
        </>
    )
}
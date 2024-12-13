import Endereco from "@/requisicoes-internas/endereco";
import { useContext, useEffect, useState } from "react";
import { Context } from "./contexto/UserContext";
import Navbar from "./navbar";

export default function Perfil(){
  const {editableDados,dadosEditaveis,editableEndereco,enderecoEditavel} = useContext(Context);
  const [emailWrap,setEmailWrap] = useState("");
  const [islogado,setIslogado] = useState();
  const [endereco,setEndereco] = useState({
    cep:'',
    complemento:'',
    logradouro:'',
    bairro:'',
    localidade:'',
    uf:'',
  })
  const [form,setForm] = useState(
    {
    name:"",
    usuario:"",
    }
    );
    useEffect(()=>{
     setEmailWrap(localStorage.getItem("email"));
     setIslogado(localStorage.getItem("logado"));
        const promisse = new Promise((dado)=>{
            dado(fetch(`http://localhost:8080/user/userinfo?email=${localStorage.getItem("email")}`,{
              headers:{"Authorization":localStorage.getItem("token")}
            }).then((res)=>res.json())
          )      
          })
     promisse.then((val)=>{
        console.log()
        setForm(
            {
                name:val.name,
                usuario:val.username,
                email:val.email,
                
            }
        )
        setEndereco({
                cep:val.cep,
                complemento:val.complemento,
                logradouro:val.logradouro,
                bairro:val.bairro,
                localidade:val.localidade,
                uf:val.uf,
        })
     })   
    },[emailWrap])
  const promisse =(e)=>{
    e.preventDefault()
    fetch("http://localhost:8080/user/edit-info",
      {
        method:"PUT",
        headers:{"Authorization":localStorage.getItem("token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"http//localhost:8080"},
        body:JSON.stringify
        ({
          "name":form.name,
          "usuario":form.username,
          "email":emailWrap
        })
      }).then((res)=>console.log(res.status)).then(()=>dadosEditaveis(e))
    }
    const editForm = (e,na) =>{
      setForm({...form,
        [na]:e.target.value
      })
    }
    const editEndereco = (e,na) =>{
      setEndereco({...endereco,
        [na]:e.target.value
      })
    }
    const cepEdit = (ev)=>{
      const cep = ev.target.value.replace(/\D/g, '');
      if(cep.length==8){
      console.log(cep);
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res=>res.json()
      .then(data=>{console.log(data)
      setEndereco(data); 
      }
    ))
  }
  };
  const enderecoHandle = (e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/user/edit-address",{
      method:"PUT",
      headers:{"Authorization":localStorage.getItem("token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"http//localhost:8080"},
      body:JSON.stringify({
                "email":emailWrap,
                "cep":endereco.cep,
                "complemento":endereco.complemento,
                "logradouro":endereco.logradouro,
                "bairro":endereco.bairro,
                "localidade":endereco.localidade,
                "uf":endereco.uf
      })
    }).then((res)=>console.log(res.status)).then(()=>enderecoEditavel(e))
  }
    return(
      
        <>
        <Navbar/>
        <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h1>Perfil</h1>
          </div>
          <h5>Informações Pessoais</h5>
        <form onSubmit={promisse}>
            
            <input type="text"  style={!editableDados ? {color: "gray"}:{color: "black"}} readOnly={!editableDados ? true : false} Value={islogado ? form.name : "" } name="nome" className="fadeIn second perfil" onChange={(e)=>editForm(e,"name")}/>
        <input type="text"  style={!editableDados ? {color: "gray"}:{color: "black"}} readOnly={!editableDados ? true : false} name="username" Value={islogado ? form.usuario : ""} className="fadeIn second perfil" onChange={(e)=>editForm(e,"username")}/>
        <input type="email" style={{color: "gray"}} readOnly name="email" value={islogado ? emailWrap : "" } className="fadeIn second  perfil" onChange={(e)=>editForm(e,"nome")}/>
        {
          editableDados ? <input type="submit" className="fadeIn fourth" value="salvar"/>  :  <input type="button" className="fadeIn fourth" value="editar" onClick={(e)=>dadosEditaveis(e)}/>   
        }
        </form>
        <h5>Endereço</h5>
        <form onSubmit={enderecoHandle}>
        <input type="text" name="cep" style={!editableEndereco ? {color: "gray"}:{color: "black"}}  value={islogado && endereco.cep} placeholder={editableEndereco && "Digite seu novo Cep"}  onBlur={cepEdit} className="fadeIn second perfil" onChange={(e)=>editEndereco(e,"cep")}/>
        <input type="text" name="logradouro" style={!editableEndereco ? {color: "gray"}:{color: "black"}}  value={islogado && endereco.logradouro}  className="fadeIn second  perfil" onChange={(e)=>editEndereco(e,"logradouro")}/>
        <input type="text" name="bairro" style={!editableEndereco ? {color: "gray"}:{color: "black"}}  value={islogado && endereco.bairro}  className="fadeIn second  perfil" onChange={(e)=>editEndereco(e,"bairro")}/>
        <input type="text" name="localidade"  style={!editableEndereco ? {color: "gray"}:{color: "black"}} value={islogado && endereco.localidade}  className="fadeIn second   perfil" onChange={(e)=>editEndereco(e,"localidade")}/>
        <input type="text" name="estado"      style={!editableEndereco ? {color: "gray"}:{color: "black"}} value={islogado && endereco.uf}  className="fadeIn second   perfil" onChange={(e)=>editEndereco(e,"uf")}/>
        <input type="text" name="complemento" style={!editableEndereco ? {color: "gray"}:{color: "black"}} value={islogado && endereco.complemento}  className="fadeIn second  perfil" onChange={(e)=>editEndereco(e,"complemento")}/> 
        
        {
          editableEndereco ? <input type="submit" className="fadeIn fourth" value="salvar"/>  :  <input type="button" className="fadeIn fourth" value="editar" onClick={(e)=>enderecoEditavel(e)}/>   
        }
        </form>
        
      
      
</div>
</div>        
        </>
    )
}
import { useContext, useEffect, useState } from "react";
import { Context } from "./contexto/UserContext";
import Navbar from "./navbar";
import Image from "next/image";
import AutoRefreshToken from "./autorefresh";
import Request from "./request";

export default function Perfil(){
  const {editableDados,dadosEditaveis,editableEndereco,enderecoEditavel,handleError} = useContext(Context);
  const [emailWrap,setEmailWrap] = useState("");
  const [islogado,setIslogado] = useState();
  const [urlPictureProfile,setUrlPictureProfile] = useState("");
  const [imageProfile,setImageProfile] = useState(null);  
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
    username:"",
    }
    );
    useEffect(()=>{
     setEmailWrap(localStorage.getItem("email"));
     setIslogado(localStorage.getItem("logado"));
            fetch(`http://localhost:8080/user/userinfo?email=${localStorage.getItem("email")}`,{
            headers:{"Authorization":localStorage.getItem("token")}
            }).then((res)=>{
            if(!res.ok){
              handleError("Erro ao carregar informações do usuário");
            }
            return res.json();
            })
            .then((dado)=>{setForm(dado)
              setEndereco(dado)
            }).catch((err)=>{
              console.error(err)
            })
        },[])      
  const promisse =(e)=>{
    e.preventDefault()
    fetch("http://localhost:8080/user/edit-info",
      {
        method:"PUT",
        headers:{"Authorization":localStorage.getItem("token"),"Content-Type":"application/json","Access-Control-Allow-Origin":"http//localhost:8080"},
        body:JSON.stringify
        ({
          "name":form.name,
          "username":form.username,
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
  const handleImage = (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",localStorage.getItem("email"));
    formData.append("file",imageProfile);
    fetch("http://localhost:8080/user/edit-picture-profile",{
      method:"POST",
      body:formData
    }).then((res)=>console.log(res.text()))
  }
  useEffect(()=>{
  fetch("http://localhost:8080/user/get-picture-profile?email="+localStorage.getItem("email"),{
    headers:{"Authorization":localStorage.getItem("token")}
  }).then((res)=>res.text())
  .then((dado)=>setUrlPictureProfile(dado))
  .catch((err)=>console.error(err));
},[]);
console.log(urlPictureProfile)
    return(
      
        <>
        <Navbar/>
        <div className="wrapper fadeInDown">
          <input type="file" id="check" onChange={(e)=>setImageProfile(e.target.files[0])}/>
          <label htmlFor="check" className="checkbtn"><img  src={imageProfile ? URL.createObjectURL(imageProfile):require("./imagens/pngegg.png") || urlPictureProfile ? urlPictureProfile:require("./imagens/pngegg.png")} alt="icone login" width="50" height="50" id="imageProfile"/></label>
            <i className="fas fa-bars"></i>
            <button id="salvaFoto" onClick={handleImage}>Salvar</button>
          
        <div id="formContent">
          
          <div className="fadeIn first">
            <h1>Perfil</h1>
          </div>
          <h5>Informações Pessoais</h5>
          
        <form onSubmit={promisse}>
            
            <input type="text"  style={!editableDados ? {color: "gray"}:{color: "black"}} readOnly={!editableDados ? true : false} Value={islogado ? form.name : "" } name="nome" className="fadeIn second perfil" onChange={(e)=>editForm(e,"name")}/>
        <input type="text"  style={!editableDados ? {color: "gray"}:{color: "black"}} readOnly={!editableDados ? true : false} name="username" Value={islogado ? form.username : ""} className="fadeIn second perfil" onChange={(e)=>editForm(e,"username")}/>
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
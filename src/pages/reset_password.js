import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useContext } from "react";

import { Context } from "@/pages/contexto/UserContext";
import { Eye, EyeOff } from "lucide-react";
export default function ResetPassword(){
    const [password,setPassword] = useState(

        {   
            email:"",
            password:"",
            passwordVerified:""
        }
    )
    const [isShow,setIsShow] = useState(false);
    const [isShow2,setIsShow2] = useState(false);
    const [status,setStatus] = useState();
    const [email,setEmail] = useState(
        {
            email:""
        }
    );
    useEffect(()=>{
        
     email.email=window.localStorage.getItem("email");   
     if(status===200){
        window.localStorage.clear();
    }
    })
    const setPasswordEdit = (e,type) =>{
        setPassword({...password,
            [type]:e.target.value
        })
    }
    console.log(email.email)
    const setPasswordOnBackEnd = (e) =>{
        e.preventDefault();
        fetch(`http://localhost:8080/user/reset?email=${email.email}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"},
            body:JSON.stringify(password)
        }).then(res=>{setStatus(res.status)
            
        })
        
    }
    const editShow = (e)=>{
        e.preventDefault();
        setIsShow(!isShow);
      }
      const editShow2 = (e)=>{
        e.preventDefault();
        setIsShow2(!isShow2);
      }
    return(
        <>
        <Navbar/>
        <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h1>Resetar senha</h1>
              </div>
              <form id="form" onSubmit={setPasswordOnBackEnd}>
                <input type={!isShow ? "password" : "text"} id="senha" className="fadeIn second" name="cadastro" placeholder="Password" required value={password.password} onChange={(e)=>{setPasswordEdit(e,"password")}}/>
                {
                !isShow ? <button className="visibility" onClick={(e)=>editShow(e)}><Eye/></button> : <button className="visibility" onClick={(e)=>editShow(e)}><EyeOff/></button>
                }
                <input type={!isShow2 ? "password" : "text"} id="senhaVerificador" className="fadeIn second" name="cadastro" placeholder="Password" required value={password.passwordVerified} onChange={(e)=>{setPasswordEdit(e,"passwordVerified")}}/>
                {
                !isShow2 ? <button className="visibility" onClick={(e)=>editShow2(e)}><Eye/></button> : <button className="visibility" onClick={(e)=>editShow2(e)}><EyeOff/></button>
                }
                <input type="submit" className="fadeIn fourth" value="Salvar"/>
                {
                    password.password!=password.passwordVerified && <div className="userError">password mismatch</div>
                }
              </form>
              <div className="fadeIn first" id="info"></div>
              </div>
              </div>
        </>
    )
}
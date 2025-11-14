import Navbar from "./navbar"
import { useContext, useEffect, useRef  } from "react"
import { useState } from "react";
import { Context } from "./contexto/UserContext"
import { useRouter } from "next/router";
import Greetins from "./greetins";
export default function Confirm(){
  const [status,setStatus] = useState(true);
  const [timer,setTimer] = useState(60);
  const router = useRouter();
  const {dad} = useContext(Context);
  const [disable,setDisable] = useState(true);
  const [inputOtp,setInputOpt] = useState([0,0,0,0])
  const [emailStored,setEmailStored] = useState({email:""});
  const ref = useRef([]);
    
  useEffect(()=>{
    let interval = setInterval(()=>{
      setTimer((lastTimerCount)=>{
        lastTimerCount <= 1 && clearInterval(interval);
        if(lastTimerCount<=1) setDisable(false);
        if(lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      })

    },1000)
    return ()=> clearInterval(interval);
  },[disable])

  useEffect(()=>{
    setEmailStored({email:localStorage.getItem("email")})
  },[])

  useEffect(()=>{
    ref.current[0].focus();
  },[])
  
  const enviar = (e) =>{
     if (disable) return;
     e.preventDefault();
     fetch(`http://localhost:8080/user/redifine?email=${emailStored.email}`)
     .then(res=>{console.log(res.status)
     console.log(res.text())}).then((dado)=>{dad.dados = dado})
     .then(()=>setDisable(true))
     .then(()=>setTimer(60))
     .catch(console.log);
     }


  const handleKeyUp = (index,event) =>{
    const {value,maxLength} = event.target
    if(value.length===maxLength){
      const nextInput = ref.current[index+1];
      if(nextInput){
        nextInput.focus();
      } 
    }
  }
  
  const verifyOtp = (e) =>{
    e.preventDefault();
    fetch(`http://localhost:8080/user/confirm?code=${parseInt(inputOtp.join("").toString())}`)
    .then((res)=>{
      console.log(res.status);
      setStatus(res.status);
    })
}

      return(
        <>
        <Navbar/>

        {
        status === 200 &&  (<Greetins mensagem="Obrigado por verificar sua conta! Agora você já pode efetuar o login"/>)
        }
        <div className="fadeInDownOtp">
            <div id="formContentOtp">
              <div className="fadeIn first">
                <h1 id="recovery">Verificar E-mail</h1>
              </div>
              <form id="formOTP" onSubmit={verifyOtp}>
                <p id="emailEdited">{emailStored.email.replace(emailStored.email.substring(2,emailStored.email.indexOf("@")-2),"*".repeat(5))}</p>
                <input type="text" ref={(el)=>(ref.current[0]=el)} maxLength="1"  className="styleOTP fadeIn second" name="otp1" onChange={(e)=>{setInputOpt([e.target.value,inputOtp[1],inputOtp[2],inputOtp[3]])}} onKeyUp={(ev=>{handleKeyUp(0,ev)})}/>
                <input type="text" ref={(el)=>(ref.current[1]=el)} maxLength="1" className="styleOTP fadeIn second" name="otp2" onChange={(e)=>{setInputOpt([inputOtp[0],e.target.value,inputOtp[2],inputOtp[3]])}} onKeyUp={(ev)=>{handleKeyUp(1,ev)}}/>
                <input type="text" ref={(el)=>(ref.current[2]=el)} maxLength="1"  className="styleOTP fadeIn second" name="otp3" onChange={(e)=>{setInputOpt([inputOtp[0],inputOtp[1],e.target.value,inputOtp[3]])}} onKeyUp={(ev)=>{handleKeyUp(2,ev)}}/>
                <input type="text" ref={(el)=>(ref.current[3]=el)} maxLength="1"  className="styleOTP fadeIn second" name="otp4" onChange={(e)=>{setInputOpt([inputOtp[0],inputOtp[1],inputOtp[2],e.target.value])}} onKeyUp={(ev=>{handleKeyUp(3,ev)})}/>
                <input type="submit" id="enviar" className="fadeIn fourth" value="Enviar"/>
                {
                  status===409 && <p className="userError">Código errado,tente de novo ou solicite um novo código</p>
                }
                <p id="resend">Resend code in {timer}
                <a id="linkResend" style={{color:disable ? "gray":"blue",
                cursor: disable ? "none":"pointer",
                textDecorationLine: disable ? "none":"underline"
                }}
                 onClick={enviar}>Resend code </a>
                </p>

                 
              </form>
              {

               (<button className="voltar_login" onClick={()=>router.push("/login")}>Vá para login</button>)
              }
              <div className="fadeIn first" id="info"></div>
              </div>
              </div>
          
        </>

    )
  }
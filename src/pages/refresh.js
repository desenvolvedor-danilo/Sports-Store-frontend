import { useEffect } from "react"

export default function Refresh(){
    let interval = 1000*60*59;
    useEffect(()=>{
        if(localStorage.getItem("logado")!=null){
        setInterval(()=>{
        const promisse = new Promise((resposta)=>{
            resposta(fetch(`http://localhost:8080/user/refresh-token?token=${localStorage.getItem("refresh-token")}`,{
            method:"POST",
            headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http//localhost:8080"}
            }).then((res)=>res.json()))
        })
        promisse.then((val)=>{
            localStorage.setItem("token",val.token);
            localStorage.setItem("refresh-token",val.refreshToken)
        })
        },interval)
    }
    })
    return(
        <>
        </>
    )
}
//token atual: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpbnRlZ3JhdGlvbi1uZXh0anMiLCJzdWIiOiJkYW5pbG9rZWx2ZW1laXJlbGVzNDVAZ21haWwuY29tIiwiZXhwIjoxNzMwOTk5MDAwfQ.uvuCv04dsQA9PIsAbjY5IxgPzBdBSxMFN1NnZoTF5Z8
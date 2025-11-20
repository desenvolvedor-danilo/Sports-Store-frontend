import { useEffect } from "react"

export default function RefreshForTime(){
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
import { useEffect, useState } from "react";

export default function Request(){
    const [username,setUsername] = useState("")
        useEffect(()=>{
        const token = localStorage.getItem("token")
        const email = localStorage.getItem("email");
        if(token!=null && email!=null){
        const promisse = new Promise((dado)=>{
         dado(fetch(`http://localhost:8080/user/get-users?email=${email}`,{
            headers:{
                "Authorization":`Bearer ${token}`}
            }).then((res)=>res.text())
        )
        
        })

        promisse.then((val)=>{
            console.log(val)
            setUsername(val);
        })
    }
            },[])
            console.log(username)
    return(
    <>
    <p className="username">{username}</p>
    </>
    )
}
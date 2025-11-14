

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// export default function Request(){
    
//     const [username,setUsername] = useState("")
//     const router = useRouter();
//     const promisse = ()=> {


//                         fetch(`http://localhost:8080/user/refresh-token?token=${localStorage.getItem("refresh-token")}`, {
//                         method: "POST",
//                         headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "http//localhost:8080" }
//                     }).then((res) =>
//                              res.json())
//                     .then((data)=>{
//                         localStorage.setItem("token",data.token)
//                         localStorage.setItem("refresh-token",data.refreshToken)
//                     })
//                     .then(()=>{
//                         fetch(`http://localhost:8080/user/get-users?email=${localStorage.getItem("email")}`,{

//             headers:{
//                 "Authorization":localStorage.getItem("token")}}).then((res)=>res.text())
//                 .then((dado)=>{console.log(dado)
//                 setUsername(dado)})
//                     }).catch((e)=>{
//                     console.log(e.message)
//                     })
//                 }
// //  
//         useEffect(()=>{
            
//            fetch(`http://localhost:8080/user/get-users?email=${localStorage.getItem("email")}`,{
//             headers:{
//                 "Authorization":localStorage.getItem("token")}}).then((res)=>res.text())
//                 .then((dado)=>{console.log(dado)
//                 setUsername(dado)})
//                 .catch(()=>{
//                     promisse()
//                 })
//         },[])
//     return(
//     <> 
//     <p className="username">{username}</p>
//     </>
//     )
// }
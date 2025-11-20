// import { useRouter } from "next/router";
// export default function AutoRefreshToken(){
//     const router = useRouter();
//      const [isLogado,setIsLogado] = useState();
   
// //     const logout = ()=>{
// //     setIsLogado(false);
// //     localStorage.setItem("logado",isLogado);
// //     localStorage.removeItem("token");
// //   }
//     useEffect(() => {
                    
//                     fetch(`http://localhost:8080/user/refresh-token?token=${localStorage.getItem("refresh-token")}`, {
//                         method: "POST",
//                         headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "http//localhost:8080" }
//                     }).then((res) =>
//                              res.json())
//                     .then((data)=>{
//                         console.log(data.token)
//                         localStorage.setItem("token",data.token)
//                         localStorage.setItem("refresh-token",data.refreshToken)
//                     })
//                 },[])
// }
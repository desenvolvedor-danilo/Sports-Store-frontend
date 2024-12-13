import Viacep from "@/api-externas/viacep";

export default function Greetins({mensagem}){
    return(
        <>
        <p className="userCreated">{mensagem}</p>    
        <Viacep/>
         </>
    )
}
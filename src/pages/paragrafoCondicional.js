import { useEffect } from "react";

function ParagrafoCondicional(){
    useEffect(()=>{
        
       let p = document.createElement("p");
       p.textContent="Usuário já existe";
       p.style.padding="0";
       p.style.margin="0"
       document.querySelector("form").appendChild(p);
        return ()=> {
        document.querySelector("form").removeChild(p);
        }
    },[])
    return(
        <>
        </>
    )
    }
export default ParagrafoCondicional;
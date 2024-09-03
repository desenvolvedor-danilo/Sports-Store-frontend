import { useEffect } from "react";

function Script(){
    useEffect(()=>{
        const script = document.createElement('script');
        script.textContent=
        `
        for(let b = 0;b<document.getElementsByClassName("tenis").length;b++){
          
          let precoAntigo = document.getElementsByClassName("preco-antigo").item(b);
          let preco = document.getElementsByClassName("precos").item(b);
          let percentual = document.getElementsByClassName("per").item(b);
          
          let textPrecoAntigo = precoAntigo.textContent;
          let i = textPrecoAntigo.trim().lastIndexOf("$");
          let nTextPrecoAntigo = textPrecoAntigo.substring(i+1);
          
          let textPreco = preco.textContent;
          let j = textPreco.trim().lastIndexOf("$");
          let ult = textPreco.trim().lastIndexOf("n")
          let nTextPreco = textPreco.substring(j+1,ult);
          let parseado1 = Number.parseInt(nTextPreco)+1;
          let parseado2 = Number.parseInt(nTextPrecoAntigo)+1;
          let desconto = 100 - parseado1/parseado2 * 100 
          percentual.textContent = "-" + desconto.toFixed(0) + "%"
        }` 
        script.async=true;
        document.body.appendChild(script);
        return ()=> {
          document.body.removeChild(script);
        }
    },[])
    return(
        <>
        </>
    )
    }
export default Script;
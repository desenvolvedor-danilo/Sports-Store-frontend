import Link from "next/link";
import { useRouter } from "next/router";
function ProdutosLancamentos({target,img,nome,precoAntigo,precoNovo,parcelado,edicao,outrasCores,desconto,alt,id}){
    const router = useRouter();
    
    return(
        <>
        
        <div>
                  <h3 className="per">{desconto}</h3>
                  <h1 className="tenis">{img}</h1>
                  <p className="textoAlternativo">{alt}</p>
                  <p className="lancamento">{edicao}</p>
                  <p className="nome-produto">{nome}</p>
                  <p className="preco-antigo">R${precoAntigo}</p>
                  <p className="precos">R${precoNovo}</p>
                  <p className="parcelado">{parcelado}</p>
                  <p className="outras-cores">{outrasCores}</p>
              </div>
        
        </>
    )
}
export default ProdutosLancamentos;
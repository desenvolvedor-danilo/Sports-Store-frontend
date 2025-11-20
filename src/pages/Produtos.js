import Link from "next/link";
function Produtos({target,img,nome,precoAntigo,precoNovo,parcelado,cor}){
    return(
        <>
        <Link href={target}>
        <div>
                  <h3 className="per">.</h3>
                  <h1 className="tenis">{img}</h1>
                  <p  className="nome-produto">{nome}</p>
                  <p  className="preco-antigo">{precoAntigo}</p>
                  <p  className="precos">{precoNovo}</p>
                  <p  className="parcelado">{parcelado}</p>
                  <p id="unica">{cor}</p>
              </div>
              </Link>
        </>
    )
}
export default Produtos;

import Link from "next/link";
function ProdutosLancamentos({target,img,nome,precoAntigo,precoNovo,parcelado,cor,edicao,outrasCores}){
    return(
        <>
        <Link href={target}>
        <div>
                  <h3 className="per">.</h3>
                  <h1 className="tenis">{img}</h1>
                  <p className="lancamento">{edicao}</p>
                  <p  className="nome-produto">{nome}</p>
                  <p  className="preco-antigo">{precoAntigo}</p>
                  <p  className="precos">{precoNovo}</p>
                  <p  className="parcelado">{parcelado}</p>
                  <p className="outras-cores">{outrasCores}</p>
              </div>
              </Link>
        </>
    )
}
export default ProdutosLancamentos;
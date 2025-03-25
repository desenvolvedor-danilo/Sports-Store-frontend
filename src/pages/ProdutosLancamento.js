import Link from "next/link";
function ProdutosLancamentos({target, key,img,nome,precoAntigo,precoNovo,parcelado,cor,edicao,outrasCores,desconto,alt}){
    return(
        <>
        <Link href={target}>
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
              </Link>
        </>
    )
}
export default ProdutosLancamentos;
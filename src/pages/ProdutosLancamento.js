import Link from "next/link";
function ProdutosLancamentos({target, key,img,nome,precoAntigo,precoNovo,parcelado,cor,edicao,outrasCores,desconto}){
    return(
        <>
        <Link href={target}>
        <div>
                  <h3 key={key} className="per">{desconto}</h3>
                  <h1 key={key} className="tenis">{img}</h1>
                  <p key={key} className="lancamento">{edicao}</p>
                  <p key={key} className="nome-produto">{nome}</p>
                  <p key={key} className="preco-antigo">R${precoAntigo}</p>
                  <p key={key} className="precos">R${precoNovo}</p>
                  <p key={key} className="parcelado">{parcelado}</p>
                  <p key={key} className="outras-cores">{outrasCores}</p>
              </div>
              </Link>
        </>
    )
}
export default ProdutosLancamentos;
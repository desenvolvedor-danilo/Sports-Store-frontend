import Link from "next/link";
import styles from "@/styles/Tenis.module.css"
export default function Tenis({foto1,foto2,target,nome,preco,oferta}){
    return(
        <>
        <Link href={target}>
        <div className={styles.head}><p>{oferta}</p><p>Aproveite só hoje</p></div>
        <div className={styles.conteudo}>
            {foto1}
            {foto2}
            </div> 
            <div className={styles.abaixo}>
        <h1 className={styles.nome}>{nome}</h1>
            <p>A Partir De</p>
            <h1 className={styles.precinho}>{preco}</h1>    
            <h2 className={styles.direita}>Comprar</h2>
        </div>   
        </Link>
        </>
    )
}

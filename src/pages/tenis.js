import Link from "next/link";
import styles from "@/styles/Tenis.module.css"
export default function Tenis({foto1,foto2,target,nome,preco,oferta}){
    return(
        <>
        <Link href={target}>
        <div className={styles.head}><p>{oferta}</p></div>
        <section className={styles.container}>
            <div className={styles.bloco_img}>
            <div className={styles.img}>{foto1}</div>
            <div className={styles.img}>{foto2}</div>
            </div>

            <div className={styles.abaixo}>
            <h1 className={styles.nome}>{nome}</h1>
            <p>A Partir De</p>
            <h1 className={styles.precinho}>R$ {preco}</h1>    
            <h2 className={styles.direita}>Comprar</h2>
            </div>
        </section>
        </Link>
        
        </>
    )
}

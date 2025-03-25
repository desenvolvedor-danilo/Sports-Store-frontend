import Product from "./Product";

export default function Masculino(){
    return(
        <>
        <Product endpoint={"http://localhost:8080/admin/find-by-categoria"} nameParam={"categoria"} categoria={"Masculino"}/>
        </>
    )
}
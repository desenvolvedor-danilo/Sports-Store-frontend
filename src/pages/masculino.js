import Product from "./Product";
import Request from "./request";

export default function Masculino(){
    return(
        <>
        <Product endpoint={"http://localhost:8080/admin/find-by-categoria"} nameParam={"categoria"} categoria={"Masculino"}/>
        </>
    )
}
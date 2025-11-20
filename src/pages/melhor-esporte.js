import Product from "./Product";

function MelhorEsporte(){
    
    return(
        <>
            <Product endpoint={"http://localhost:8080/admin/find-by-categoria"} nameParam={"categoria"} categoria={"Esportivo"}/>
        </>
    
    )
}
export default MelhorEsporte;
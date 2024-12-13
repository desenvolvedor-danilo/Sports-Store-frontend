export default function DropBase(){
    return(
        <>
        <section className="container_pages">
        <div className="wrapper fadeInDown">
    <div id="formContent">
    <div className="fadeIn first">
    <h2 id="titulo_admin">Excluir produto</h2>
    </div>
        <form>
            <input type="text" placeholder="Insira o id do produto a ser deletado"/>
            <input type="text" id="big_box" placeholder="Verifique o nome do produto"/>
            <input type="submit" value="Excluir"/>
        </form>
        </div>          
    </div>
        </section>
        </>
    )
}
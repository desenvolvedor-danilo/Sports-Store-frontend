export default function InsertBase(){
    return(
        <>
        <section className="container_pages">
        <div className="wrapper fadeInDown">
    <div id="formContentAdmin">
    <div className="fadeIn first">
    <h2 id="titulo_admin">Inserir Produtos</h2>
    </div>
    <form>
    <input type="text" placeholder="ID do produto" name="id"/>
    <input type="text" placeholder="Nome do produto" name="nome"/>
    <input type="text" placeholder="Valor do produto" name="valor"/>
    <input type="text" placeholder="Desconto a aplicar" name="desconto"/>
    <input type="text" placeholder="Formas de pagamentos" name="pagamento"/>
    <input type="text" placeholder="Tamanho do produto" name="Tamanhos"/>
    <input type="submit" value="Salvar"/>
    </form>
    </div>          
    </div>
        </section>
        </>
    )
}
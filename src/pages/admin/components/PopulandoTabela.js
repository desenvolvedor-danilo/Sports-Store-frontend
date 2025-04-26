import 'bootstrap/dist/css/bootstrap.min.css'
export default function PopulandoTabela({codigo,nome,preco,parcelas,numeroPagina}){
  return(
    <>
    <table className="table">
  <tbody>
    <tr>
      {/* <th scope="row">{codigo}</th> */}
      <td>{codigo}</td>
      <td>{nome}</td>
      <td>{preco}</td>
      <td>{parcelas}</td>
    </tr>
  </tbody>
</table>
    </>
  )
}
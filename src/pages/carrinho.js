import { useEffect, useState } from "react";
import Navbar from "./navbar";
import CarrinhoComponente from "./CarrinhoCompenete";

export default function Carrinho() {
  // const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [quantityChanged, setQuantityChanged] = useState(false);
  const countQuantity = () =>{
    let quantityTotal= 0;
    products.map((item)=>{
      quantityTotal = quantityTotal + parseInt(item.quantity)
    })
    return quantityTotal;
  }
  useEffect(() => {
    fetch("http://localhost:8080/shopping/findall?email="+localStorage.getItem("email"))
      .then((res) => res.json())
      .then((dado) => setProducts(dado.itens));
  }, [quantityChanged]);
  const handlerTotal = () => {
    let soma = 0;
    products.map((item) => {
      let multiplicate = parseFloat(item.price) * item.quantity;
      soma = soma + multiplicate;
    });
    return soma;
  };


  
  const changedQuantidade = (productId, newQuantity) => {
    const updateProducts = products.map((item) => {
      if (productId === item.id) {
       

         fetch(
           "http://localhost:8080/shopping/edit?id=" +
             productId +
             "&quantity=" +
             newQuantity,
           {
             method: "PUT",
           }
         )
           .then((res) => console.log(res.json()))
       
          
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setProducts(updateProducts);
  };
  
  const handleQuantity = async (e, id) => {
    setQuantity(e.target.value);

    setQuantityChanged(false);
  };

  return (
    <>
      <Navbar />
      <section className="shopping-cart-page">
        <h1 className="cart-title">Seu Carrinho de Compras</h1>

        <div className="cart-content-wrapper">
          <div className="cart-items-list">
            {products.map((item) => (
              <CarrinhoComponente
                key={item.id}
                number={item.quantity}
                name={item.productName}
                price={item.price.toString().replace(".", ",")}
                url={item.urlImage}
                quantity={(e) => changedQuantidade(item.id, e.target.value)}
              />
            ))}
          </div>
          <div className="cart-summary">
            <h2>Resumo do Pedido</h2>

            <div className="summary-line">
              <span>Subtotal ({countQuantity()} itens):</span>
              <span>R$ </span>
            </div>
            <div className="summary-line">
              <span>Frete:</span>
              <span>R$ </span>
            </div>
            <div className="summary-line total">
              <span>Total:</span>
              <span>R$ {handlerTotal()}</span>
            </div>

            <button className="btn btn-checkout">
              <i className="fas fa-lock"></i> Finalizar Compra
            </button>
            <button className="btn btn-continue">Continuar Comprando</button>
          </div>
        </div>
      </section>
    </>
  );
}

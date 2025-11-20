import { Trash2 } from "lucide-react";

export default function CarrinhoComponente({name,url,quantity,price,number,action,index}){
    return(

        <>
            <div key={index} className="cart-item">
              <div className="item-details">
                <img
                  src={url}
                  alt="Camisa Polo Ralph Lauren"
                  className="item-image"
                />
                <div className="item-info" >
                  <h3 className="item-name">{name}</h3>
                  <p className="item-specs">Cor: Azul Marinho | Tamanho: M</p>
                  <button className="btn-remove" onClick={action}>
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
              <div className="item-quantity-control">
                <input
                  value={number}
                  type="number"
                  min="1"
                  className="quantity-input"
                  onChange={quantity}
                />
              </div>
              <div className="item-price">R$ {price} </div>
            </div>
        </>
    )
}
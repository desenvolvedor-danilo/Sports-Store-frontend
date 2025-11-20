import { HeartIcon, ShoppingCart } from "lucide-react";
import Navbar from "./navbar";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";



export default function DetailProduct(){
    const imageRef = useRef(null);
    const router = useRouter();
    const {productId}= router.query;
    const [count,setCount] = useState(0);
    const [quantity,setQuantity] = useState(1)
    const [isLoaded,setIsLoaded] = useState(false);
    const [infoProduct,setInfoProduct] = useState({
        nome:"",
            precoNovo:"",
    })
    const [details,setDetails] = useState([{
        
    }])
    
    const handleCarrinho = () => {
        
    fetch(`http://localhost:8080/shopping/add-to-cart?codigo-product=${infoProduct.codigo}&email=${localStorage.getItem("email")}&quantity=${quantity}`,{
     method:"POST"        
    })
    .then((res)=>console.log(res.text()))
    }   
    useEffect(()=>{
        
        fetch("http://localhost:8080/photosproducts/findByProductsId?codigo="+productId,{
            headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:8080"}
    
        }).then((res)=>res.json())
        .then((dado)=>{
        setDetails(dado)
        setInfoProduct(dado[0].products)
        }).then(()=>{

            let size = details.length
            for(let i = 0;i<=size;i++){
                details.push(i);
                
            }    
        }).then(()=>setIsLoaded(true))
        .catch((err)=>console.log(err))

    },[router.query])

    return(
        <>
        
        <Navbar/>
        <main className="container">
        <div className="product-details">
            <div className="product-gallery">
            <img src={details[0].uriPicture} alt="Product Image" className="product-image" ref={imageRef}/>
            <div className="thumbnail-container">
               {
                details.map((item,index)=>(
                    
                    <img src={item.uriPicture} onClick={()=>imageRef.current.src=details[index].uriPicture}/>
                ))
               }    
                </div>
            </div>
            <div className="product-info">
            
            <h2 className="product-title">{infoProduct.nome}</h2>
            <p className="product-description">{infoProduct.descricao}</p>
            <p className="product-price">R$ {infoProduct.precoNovo}</p>
        
            
            
            <div className="product-options">
                {/* <label for="size">Tamanho:</label>
                <select id="size" name="size">
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                </select> */}
                <label htmlFor="quantity">Quantidade:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="10" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            </div>
            <div className="shipping-info">
             <button className="add-to-cart-button" onClick={handleCarrinho}><ShoppingCart size={17} /> Adicionar ao Carrinho</button>   
             <button className="add-wishlist"><></><HeartIcon size={17}/>Adicionar a lista de desejos</button>
             </div>
             </div>
                </div>
                
        </main>

        </>
    )
}
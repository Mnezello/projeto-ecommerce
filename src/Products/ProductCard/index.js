import CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import { FaTruck } from "react-icons/fa";
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  //Context do carrinho
  const { addToCart, increase, cartItems } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div>
      <div className="card-details" key={product.id}>
        <img src={product.image} alt={product.name} className="card-img" />
        <h2 className="card-name">{product.name}</h2>
        <div className="card-price-container">
          {
            (product.sale === true) 
            ? 
            <div> 
              <div className="del-price">
                <del>R$ {product.salePrice},00</del>
                <div>{Math.round((((product.salePrice - product.price) / product.salePrice) * 100))}%</div>
              </div>
              <div className="card-price">R$ {product.price},00</div>
            </div>
            :
            <div className="card-price">
              R$ {product.price},00
            </div>
          }
        </div>

        <div className="card-delivery">
          {
            (product.freeDelivery === true) 
            ? 
            <h4>Entrega grátis    <FaTruck size={16}/></h4>
            :
            ""
          }
        </div>
        <div className="card-description">
          {product.description}
        </div>
        <div className="cart-button-cover">
          <div className="cart-button-container">
            {isInCart(product) && (
              <button className="cart-button" onClick={() => increase(product)}>
                Adicionar ao carrinho
              </button>
            )} 
            {!isInCart(product) && ( 
              <button className="cart-button" onClick={() => addToCart(product)}>
                Adicionar ao carrinho
              </button>
            )} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

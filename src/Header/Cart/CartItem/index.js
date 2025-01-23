import { useContext } from "react";
import CartContext from "../../../context/cart/CartContext";
import { FaX } from "react-icons/fa6";
import "./CardItem.css"

const CartItem = ({ product }) => {

    //Context do carrinho
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className="item-container">
            <img className="cart-item-img" src={product.image} alt={product.name} />
            <div>
                <div className="item-details">
                    <h5>{product.name}</h5>
                    <button onClick={() => removeFromCart(product)} className="remove-item-btn">
                        <FaX size={8} className="remove-item-icon"/>
                    </button>
                </div>
                <div className="item-price-details">
                    <p className="item-price-qtd">{product.quantity}x</p>
                    <p className="item-price-info">R$ {(product.price)},00</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;

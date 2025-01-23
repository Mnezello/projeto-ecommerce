import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../context/cart/CartContext";
import "./Cart.css";

const Cart = () => {

    //Context do carrinho
    const { cartItems, total } = useContext(CartContext);
  
    return (
      <div>
            {
                cartItems.length === 0 
            ? 
                ""
            : 
                <div>
                    {cartItems.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                    <div className="item-total">
                        <p>Total</p>
                        <h4>R$ {total},00</h4>
                    </div>
                </div>
            }
      </div>
    );
};
  
export default Cart;

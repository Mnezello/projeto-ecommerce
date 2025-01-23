import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const CartState = ({ children }) => {

  const initialState = {
     cartItems: [],
     checkout: true,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  //Dispatches do reducer
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

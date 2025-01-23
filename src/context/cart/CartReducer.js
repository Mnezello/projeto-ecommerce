import {
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE
} from "./CartTypes.js";

const Storage = (cartItems) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};


//Função para recalcular os itens e valores no carrinho após as mudanças
export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  console.log(itemCount)
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
  return { itemCount, total };
};


//Reducer do carrinho
const CartReducer = (state, action) => {
  switch (action.type) {
    //Caso adicionar item que não tem no carrinho
    case ADD_TO_CART:
      if (!state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    //Caso para remover o item do carrinho
    case REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    //Caso para aumentar a quantidade do item no carrinho
    case INCREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    
    default:
      return state;
  }
};

export default CartReducer;

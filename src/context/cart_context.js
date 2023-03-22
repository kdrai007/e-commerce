import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();
function getLocalItem() {
  let localValue = JSON.parse(localStorage.getItem("raiStore"));
  if (localValue === null) return [];
  if (localValue.length <= 0) return [];

  return localValue;
}
const cartValue = getLocalItem();
const initialState = {
  cart: cartValue,
  total_price: 0,
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function addToCart(id, color, amount, product) {
    return dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, product },
    });
  }
  function removeItem(id) {
    return dispatch({ type: "REMOVE_ITEM", payload: id });
  }
  function handleAmount(str, id) {
    return dispatch({ type: "SET_AMOUNT", payload: { id, str } });
  }
  function clearCart() {
    localStorage.removeItem("raiStore");
    return dispatch({ type: "CLEAR_CART" });
  }
  useEffect(() => {
    dispatch({ type: "SET_TOTAL_AMOUNT_PRICE" });
    localStorage.setItem("raiStore", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, handleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

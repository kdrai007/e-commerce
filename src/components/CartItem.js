import React from "react";
import { FaTrash } from "react-icons/fa";
import ConvertCurrency from "../helpers/ConvertCurrency";
import ToggleCartItem from "./ToggleCartItem";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, color, image, amount, price }) => {
  const { removeItem, handleAmount } = useCartContext();
  return (
    <div className="cart-heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* cart: Price */}
      <div className="cart-hide">
        <p>
          <ConvertCurrency price={price} />
        </p>
      </div>
      {/* cart: Quantity */}
      <ToggleCartItem
        increaseAmount={() => handleAmount("increase", id)}
        decreaseAmount={() => handleAmount("decrease", id)}
        amount={amount}
      />
      <div className="cart-hide">
        <p>
          <ConvertCurrency price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;

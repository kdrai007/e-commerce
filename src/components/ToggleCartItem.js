import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const ToggleCartItem = ({ amount, increaseAmount, decreaseAmount }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => decreaseAmount()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => increaseAmount()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ToggleCartItem;

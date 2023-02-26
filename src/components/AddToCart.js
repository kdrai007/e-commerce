import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ToggleCartItem from "./ToggleCartItem";
import { FaCheck } from "react-icons/fa";
import { Button } from "../styles/Button";

const AddToCart = ({ product }) => {
  const { colors, stock, id } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  function increaseAmount() {
    console.log("increaseAmount");
    amount < stock ? setAmount(amount + 1) : setAmount(amount);
  }
  function decreaseAmount() {
    console.log("decreaseAmount");

    amount > 1 ? setAmount(amount - 1) : setAmount(amount);
  }
  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((item, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: `${item}` }}
                className={color === item ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(item)}
              >
                {item === color && <FaCheck className="checkStyle" />}
              </button>
            );
          })}
        </p>
      </div>
      <ToggleCartItem
        increaseAmount={increaseAmount}
        decreaseAmount={decreaseAmount}
        amount={amount}
      />
      <NavLink to="/cart">
        <Button className="btn">Add to Cart</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;

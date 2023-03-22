const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, color, amount, product } = action.payload;
      const existingItem = state.cart.find(
        (currElem) => currElem.id === id + color
      );
      if (existingItem) {
        let updateA = state.cart.map((currElem) => {
          if (currElem.id === id + color) {
            let newAmount = currElem.amount + amount;
            if (newAmount > currElem.max) {
              newAmount = currElem.max;
            }
            return {
              ...currElem,
              amount: newAmount,
            };
          } else {
            return currElem;
          }
        });
        return {
          ...state,
          cart: updateA,
        };
      } else {
        let productData;
        productData = {
          id: id + color,
          name: product.name,
          price: product.price,
          color,
          amount,
          image: product.image[0].url,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, productData],
        };
      }
    case "REMOVE_ITEM":
      const updatedCart = state.cart.filter((currElem) => {
        return currElem.id !== action.payload;
      });
      return {
        ...state,
        cart: updatedCart,
      };
    case "SET_AMOUNT":
      let { id: itemId, str } = action.payload;
      const updateAmount = state.cart.map((currElem) => {
        if (currElem.id === itemId && str === "decrease") {
          currElem.amount =
            currElem.amount <= 1 ? currElem.amount : currElem.amount - 1;
        }
        if (currElem.id === itemId && str === "increase") {
          currElem.amount =
            currElem.amount === currElem.max
              ? currElem.amount
              : currElem.amount + 1;
        }
        return currElem;
      });
      return {
        ...state,
        cart: updateAmount,
      };
    case "CLEAR_CART":
      return {
        cart: [],
        total_item: 0,
        total_price: 0,
        total_amount: "",
        shipping_fee: 5000,
      };
    case "SET_TOTAL_AMOUNT_PRICE":
      let { total_amount, total_price, total_item } = state.cart.reduce(
        (accumulator, currentvalue) => {
          const { amount, price } = currentvalue;
          accumulator.total_item += amount;
          accumulator.total_amount += price;
          accumulator.total_price += price * amount;
          return accumulator;
        },
        { total_amount: 0, total_price: 0, total_item: 0 }
      );
      return {
        ...state,
        total_amount,
        total_price,
        total_item,
      };
    default:
      return {
        ...state,
      };
  }
};
export default cartReducer;

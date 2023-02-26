import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducers/FilterReducer";
const filterContext = createContext();

const initialState = {
  filter_Products: [],
  allProducts: [],
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  return (
    <filterContext.Provider value={{ ...state }}>
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(filterContext);
};

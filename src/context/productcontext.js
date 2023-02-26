import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProduct: [],
  isSingleLoading: false,
  singleProduct: {},
};
//!st API calling
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProduct = async (url) => {
    dispatch({ type: "API_RELOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  //2nd API calling

  const SingleProductApi = async (url) => {
    dispatch({ type: "API_SINGLE_LOADING" });

    try {
      const res = await axios.get(url);
      const singleProduct = res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "API_SINGLE_ERORR" });
    }
  };

  useEffect(() => {
    getProduct(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, SingleProductApi, API }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };

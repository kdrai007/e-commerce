import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducers/FilterReducer";
const filterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "a-z",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    minPrice: 1000,
    maxPrice: 0,
    price: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductContext();

  //For grid view
  function setGridView() {
    return dispatch({ type: "SET_GRID_VIEW" });
  }
  //For List veiw
  function setListView() {
    return dispatch({ type: "SET_LIST_VIEW" });
  }
  //For sorting view
  function sortProducts(e) {
    const value = e.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: value });
  }
  //For updating filter value
  function clearFilters() {
    return dispatch({ type: "CLEAR_FILTERS" });
  }
  function updatingFilterValue(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name ", name);
    console.log("value ", value);
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  }
  //sorting the value
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  return (
    <filterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sortProducts,
        updatingFilterValue,
        clearFilters,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(filterContext);
};

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        filter_Products: [...action.payload],
        allProducts: [...action.payload],
      };
    default:
      return state;
  }
};
export default FilterReducer;

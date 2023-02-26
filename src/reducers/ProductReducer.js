const ProductReducer = (state, action) => {
  switch (action.type) {
    //1st API
    case "API_RELOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "MY_API_DATA":
      const featureProduct = action.payload.filter((currPro) => {
        return currPro.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProduct: featureProduct,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    //2nd API
    case "API_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    case "API_SINGLE_ERORR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
export default ProductReducer;

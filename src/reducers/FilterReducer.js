const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "LOAD_FILTER_PRODUCTS":
      const priceData = action.payload.map((currElem) => {
        return currElem.price;
      });
      const maxPrice = Math.max(...priceData);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice,
          price: maxPrice,
        },
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      const { filter_products, sorting_value } = state;
      let newSortData;
      let tempSortedData = [...filter_products];
      function sortProduct(a, b) {
        if (sorting_value === "lowest") return a.price - b.price;
        if (sorting_value === "highest") return b.price - a.price;
        if (sorting_value === "a-z") return a.name.localeCompare(b.name);
        if (sorting_value === "z-a") return b.name.localeCompare(a.name);
      }
      newSortData = tempSortedData.sort(sortProduct);
      return {
        ...state,
        filter_products: newSortData,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      // debugger;
      const { all_products, filters } = state;
      const { text, category, company, color, price } = filters;
      let tempFilteredProduct = [...all_products];
      if (text) {
        tempFilteredProduct = tempFilteredProduct.filter((currElem) => {
          return currElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilteredProduct = tempFilteredProduct.filter((currElem) => {
          return currElem.category.toLowerCase() === category;
        });
      }
      if (company !== "all") {
        tempFilteredProduct = tempFilteredProduct.filter((currElem) => {
          return currElem.company.toLowerCase() === company.toLowerCase();
        });
      }
      if (color !== "all") {
        tempFilteredProduct = tempFilteredProduct.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }
      if (price) {
        tempFilteredProduct = tempFilteredProduct.filter((currElem) => {
          return currElem.price <= price;
        });
      }
      return {
        ...state,
        filter_products: tempFilteredProduct,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          minPrice: 1000,
          price: state.filters.maxPrice,
          maxPrice: state.filters.maxPrice,
        },
      };
    default:
      return state;
  }
};
export default FilterReducer;

// import React, { useEffect, useState } from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();
  if (grid_view) {
    return <GridView products={filter_products} />;
  }
  return <ListView products={filter_products} />;
};

export default ProductList;

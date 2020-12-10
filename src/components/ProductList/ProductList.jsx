//dependencies
import React from "react";
//components
import Product from "../Product/Product";
//styled components
import { ProductListContainer } from "./ProductList.elements";

const ProductList = () => {
  return (
    <ProductListContainer>
      <Product />
    </ProductListContainer>
  );
};

export default ProductList;

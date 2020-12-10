//dependencies
import React from "react";
//components
import Product from "../Product/Product";
//styled components
import { ProductListContainer } from "./ProductList.elements";
import { FlexContainer, SecondaryTitle } from "../../globalStyles";

//it renders all available products
const ProductList = ({ products }) => {
  return products.length > 0 ? (
    <ProductListContainer>
      {products.map((product) => (
        <Product
          key={product.id}
          category={product.category}
          cost={product.cost}
          photo={product.img.hdUrl}
          name={product.name}
        />
      ))}
    </ProductListContainer>
  ) : (
    //notification: it renders when there are no products available
    <FlexContainer>
      <SecondaryTitle>Products not found. Keep looking!</SecondaryTitle>
    </FlexContainer>
  );
};

export default ProductList;

//dependencies
import React from "react";
//components
import Product from "../Product/Product";
//styled components
import { ProductListContainer } from "./ProductList.elements";
import { FlexContainer, SecondaryTitle } from "../../globalStyles";

//it renders all available products
const ProductList = ({ products }) => {
  const { loading, error, data } = products;
  if (loading === true) {
    return (
      //It renders loading message
      <FlexContainer Centered>
        <SecondaryTitle>Loading...</SecondaryTitle>
      </FlexContainer>
    );
  }

  if (error) {
    return (
      //It renders notification of error
      <FlexContainer Centered>
        <SecondaryTitle>{error}</SecondaryTitle>
      </FlexContainer>
    );
  }

  return (
    <ProductListContainer>
      {data.map((product, index) => (
        <Product
          key={`prod${index}`}
          category={product.category}
          cost={product.cost}
          photo={product.img.hdUrl}
          name={product.name}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;

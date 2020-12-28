//dependencies
import React from "react";
//components
import Product from "./Product/Product";
//assets
import { paginationData } from "../../../../services/paginationData";
//styled components
import { ProductListContainer } from "./ProductList.elements";
import { FlexContainer, SecondaryTitle } from "../../../styles/globalStyles";

//it renders all available products
const ProductList = ({ products, currentPage, updating, setUpdating }) => {
  //info from products data
  const { loading, error, data } = products;
  //products to render per page
  const perPage = 16;
  /* --------------------------------- */
  //loading products data
  if (loading === true) {
    return (
      //It renders loading message
      <FlexContainer Centered>
        <SecondaryTitle Notification>Loading...</SecondaryTitle>
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
  /* --------------------------------- */
  //it paginates all products received
  const pageData = paginationData(data, perPage, currentPage);
  return (
    <ProductListContainer>
      {pageData.map((product, index) => (
        <Product
          key={`prod${index}`}
          id={product._id}
          category={product.category}
          cost={product.cost}
          photo={product.img.hdUrl}
          name={product.name}
          updating={updating}
          setUpdating={setUpdating}
        />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;

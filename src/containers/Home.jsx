//dependencies
import React, { useState } from "react";
//context provider
import UserProvider from "../context/userProvider";
import ProductProvider from "../context/productProvider";
//components
import {
  Header,
  GetPoints,
  Hero,
  Filters,
  ProductList,
  Pagination,
  Footer,
} from "../components";
//styles
import GlobalStyle from "../components/styles/globalStyles";

//it renders Home page
const Home = () => {
  //state with number of current page
  const [currentPage, setCurrentPage] = useState(1);
  /* --------------------------------- */
  //increase page
  const next = (current, max) => {
    setCurrentPage((current) => Math.min(current + 1, max));
  };
  //decrease page
  const prev = (current) => {
    setCurrentPage((current) => Math.max(current - 1, 1));
  };
  /* --------------------------------- */

  return (
    <>
      <UserProvider>
        <ProductProvider>
          <GlobalStyle />
          <Header display="flex" />
          <GetPoints />
          <Hero sectionName="Electronics" />
          <Filters currentPage={currentPage} />
          <ProductList currentPage={currentPage} />
          <Pagination currentPage={currentPage} next={next} prev={prev} />
          <Footer />
        </ProductProvider>
      </UserProvider>
    </>
  );
};

export default Home;

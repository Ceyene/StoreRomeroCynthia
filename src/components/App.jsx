//dependencies
import React, { useState } from "react";
//context provider
import UserProvider from "../context/userProvider";
import ProductProvider from "../context/productProvider";
//components
import Header from "./scenes/Home/Header/Header";
import Hero from "./scenes/Home/Hero/Hero";
import Filters from "./scenes/Home/Filters/Filters";
import ProductList from "./scenes/Home/ProductList/ProductList";
import Pagination from "./scenes/Home/Pagination/Pagination";
import HistoryContainer from "./scenes/RedeemHistory/HistoryContainer";
import Footer from "./scenes/Home/Footer/Footer";
//styles
import GlobalStyle from "./styles/globalStyles";

function App() {
  //state with number of current page
  const [currentPage, setCurrentPage] = useState(1);
  //state that handles updating history after redeeming products
  const [updating, setUpdating] = useState(false);
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
    <UserProvider>
      <ProductProvider>
        <div className="App">
          <GlobalStyle />
          <Header />
          <Hero sectionName="Electronics" />
          <Filters currentPage={currentPage} />
          <ProductList
            currentPage={currentPage}
            updating={updating}
            setUpdating={setUpdating}
          />
          <Pagination currentPage={currentPage} next={next} prev={prev} />
          <HistoryContainer updating={updating} />
          <Footer />
        </div>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;

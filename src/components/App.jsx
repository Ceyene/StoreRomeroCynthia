//dependencies
import React, { useState, useEffect } from "react";
//assets
import { dataPrice, dataCategory } from "../assets/filtersData";
import { callProducts } from "../services/apiData";
//context provider
import UserProvider from "../context/userProvider";
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
  //state with products list
  const [products, setProducts] = useState({
    loading: true,
    error: null,
    data: undefined,
  });
  //state with select filters value
  const [priceFilter, setPriceFilter] = useState(dataPrice);
  const [categoryFilter, setCategoryFilter] = useState(dataCategory);
  //state with number of current page
  const [currentPage, setCurrentPage] = useState(1);
  //state that handles updating history after redeeming products
  const [updating, setUpdating] = useState(false);
  /* --------------------------------- */
  //First time it renders, it calls API and gets products data
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);
  /* --------------------------------- */
  //Getting products data
  const getData = async () => {
    //initial state: loading and without errors
    setProducts({ ...products, loading: true, error: null });

    try {
      //data: async call, it returns promise
      const productsData = await callProducts();
      //stop loading and presenting data
      setProducts({ ...products, loading: false, data: productsData });
    } catch (error) {
      //stop loading and presenting error
      setProducts({ ...products, loading: false, error });
    }
  };
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
      <div className="App">
        <GlobalStyle />
        <Header />
        <Hero sectionName="Electronics" />
        <Filters
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          getData={getData}
          products={products.data}
          setProducts={setProducts}
          currentPage={currentPage}
        />
        <ProductList
          products={products}
          currentPage={currentPage}
          updating={updating}
          setUpdating={setUpdating}
        />
        <Pagination
          products={products.data}
          currentPage={currentPage}
          next={next}
          prev={prev}
        />
        <HistoryContainer updating={updating} />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;

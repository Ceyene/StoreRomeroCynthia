//dependencies
import React, { useState, useEffect } from "react";
//assets
import { filterState } from "../assets/filtersData";
import { callProducts } from "../assets/apiData";
//context provider
import UserProvider from "../assets/userData";
//components
import {
  Header,
  Hero,
  Filters,
  ProductList,
  Pagination,
  History,
  Footer,
} from "./";
//styles
import GlobalStyle from "../globalStyles";

function App() {
  //state with products list
  const [products, setProducts] = useState({
    loading: true,
    error: null,
    data: undefined,
  });
  //state with select filters value
  const [filters, setFilters] = useState(filterState);

  /* --------------------------------- */
  //First time it renders, it calls API and gets products data
  useEffect(() => {
    getData();
  }, []);
  /* --------------------------------- */
  //Getting products data
  const getData = async () => {
    //initial state: loading and without errors
    setProducts({ loading: true, error: null });

    try {
      //data: async call, it returns promise
      const productsData = await callProducts();
      //stop loading and presenting data
      setProducts({ loading: false, data: productsData });
    } catch (error) {
      //stop loading and presenting error
      setProducts({ loading: false, error });
    }
  };
  /* --------------------------------- */

  /* --------------------------------- */

  return (
    <UserProvider>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Hero sectionName="Electronics" />
        <Filters
          filters={filters}
          setFilters={setFilters}
          getData={getData}
          products={products.data}
          setProducts={setProducts}
        />
        <ProductList products={products} setProducts={setProducts} />
        <Pagination products={products.data} />
        <History />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;

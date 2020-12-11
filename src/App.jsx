//dependencies
import React, { useState } from "react";
//assets
import { filterState } from "./assets/filtersData";
//components
import {
  Header,
  Hero,
  Filters,
  ProductList,
  Pagination,
  History,
  Footer,
} from "./components";
//styles
import GlobalStyle from "./globalStyles";

function App() {
  //state with products list
  const [products, setProducts] = useState([]);
  //state with select filters value
  const [filters, setFilters] = useState(filterState);
  /* --------------------------------- */
  React.useEffect(() => {
    callProducts();
  }, []);
  /* --------------------------------- */
  //handles state from select filters
  const handleSelect = (i) => {
    return (e) => {
      const copyFilters = [...filters];
      copyFilters[i].value = e.target.value;
      setFilters(copyFilters);
    };
  };
  //it resets state from filters
  //country, price and size reset
  const handleReset = () => {
    const filtersCopy = filters.map((filter) => {
      filter.value = "0";
      return filter;
    });
    setFilters(filtersCopy);
    //renderize all, without filters
    callProducts();
  };
  /* --------------------------------- */
  //it calls API and gets products data
  const callProducts = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNmZTc2MDI2ZjdkMjAwMjA0MTE0YzgiLCJpYXQiOjE2MDc0NjA3MDR9.oJ_SM-h-ATKByizUQ_injP39Cn_TE45KBBOHGD_JBng",
    };
    const endpoint = "https://coding-challenge-api.aerolab.co/products";
    fetch(endpoint, { headers })
      .then((response) => response.json())
      .then((content) => {
        setProducts(content);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /* --------------------------------- */
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero sectionName="Electronics" />
      <Filters
        filters={filters}
        selectHandler={handleSelect}
        setProducts={setProducts}
        resetHandler={handleReset}
      />
      <ProductList products={products} />
      <Pagination products={products} />
      <History />
      <Footer />
    </div>
  );
}

export default App;

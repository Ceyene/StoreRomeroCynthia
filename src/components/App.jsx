//dependencies
import React, { useState } from "react";
//assets
import { filterState } from "./assets/filtersData";
import { callProducts } from "./assets/apiData";
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
import GlobalStyle from "./globalStyles";

function App() {
  //state with products list
  const [products, setProducts] = useState([]);
  //state with select filters value
  const [filters, setFilters] = useState(filterState);

  /* --------------------------------- */
  //it resets state from filters
  //country, price and size reset
  const handleReset = () => {
    const filtersCopy = [...filters];
    filtersCopy[0].value = "Prices";
    filtersCopy[1].value = "Categories";
    setFilters(filtersCopy);
    //renderize all, without filters
    callProducts();
  };
  /* --------------------------------- */

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero sectionName="Electronics" />
      <Filters
        filters={filters}
        setFilters={setFilters}
        handleReset={handleReset}
      />
      <ProductList products={products} setProducts={setProducts} />
      <Pagination products={products} />
      <History />
      <Footer />
    </div>
  );
}

export default App;

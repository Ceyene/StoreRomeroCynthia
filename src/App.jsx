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
    setProducts([]);
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
      <Pagination />
      <History />
      <Footer />
    </div>
  );
}

export default App;

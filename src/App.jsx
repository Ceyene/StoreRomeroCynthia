//dependencies
import React, { useState, useEffect } from "react";
//assets
import { filterState } from "./assets/filtersData";
import { headers, productsEndpoint } from "./assets/apiData";
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
  //First time it renders, it calls API and gets products
  useEffect(() => {
    callProducts();
  }, []);
  /* --------------------------------- */
  //when "filters" state updates,
  //this function compares and change array in "products" state
  useEffect(() => {
    productsPrice();
    productsCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);
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
    fetch(productsEndpoint, { headers })
      .then((response) => response.json())
      .then((content) => {
        setProducts(content);
      })
      .catch((error) => {
        alert(error);
      });
  };
  /* --------------------------------- */
  //it filters products by category
  const productsCategory = () => {
    let productsCopy = products.filter((product) => {
      return (
        //it filters products by category
        product.category === filters[1].value ||
        filters[1].value === "Categories"
      );
    });
    setProducts(productsCopy);
  };
  //it filters products by price
  const productsPrice = () => {
    switch (filters[0].value) {
      case "Lowest Price":
        const lowerPriceFirst = products.sort((a, b) => a.cost - b.cost);
        setProducts(lowerPriceFirst);
        console.log(products);
        break;
      case "Highest Price":
        const higherPriceFirst = products.sort((a, b) => b.cost - a.cost);
        setProducts(higherPriceFirst);
        console.log(products);
        break;
      default:
        return;
    }
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

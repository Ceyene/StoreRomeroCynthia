//components
import {
  Navbar,
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
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Hero sectionName="Electronics" />
      <Filters />
      <ProductList />
      <Pagination />
      <History />
      <Footer />
    </div>
  );
}

export default App;

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

function App() {
  return (
    <div className="App">
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

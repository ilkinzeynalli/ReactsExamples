import CategoryList from "./CategoryList"
import Navi from "./Navi"
import ProductList from "./ProductList"

function App() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <Navi />
          </div>
        </div>
      </div>
      <br />
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <CategoryList />
          </div>
          <div class="col-sm-9">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

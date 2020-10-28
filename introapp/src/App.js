import CategoryList from "./CategoryList"
import Navi from "./Navi"
import ProductList from "./ProductList"

function App() {
  let categoryInfo = {title: "Category List"};
  let productInfo = { title: "Product List",baskaBiSey:"tytyutyutyuytuytu"};

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Navi />
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <CategoryList info = {categoryInfo}/>
          </div>
          <div className="col-sm-9">
            <ProductList info = {productInfo}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

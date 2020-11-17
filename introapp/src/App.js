import React, { Component } from 'react'
import { extend } from "jquery";
import CategoryList from "./CategoryList"
import Navi from "./Navi"
import ProductList from "./ProductList"

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }

  getProducts = (categoryId) => {
    var url = "http://localhost:3000/products";
    if (categoryId) {
      url += ("?categoryId=" + categoryId);
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }

  addToCart = (product) => {
    var newCart = this.state.cart;
    var addedItem = newCart.find(f => f.product.id == product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ card: newCart });
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(f => f.product.id !== product.id);
    this.setState({ cart: newCart });
  }

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List", baskaBiSey: "Deneme Baska Bir sey" };

    return (
      <div>
        <div className="container">
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart}/>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <CategoryList info={categoryInfo}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory} />
            </div>
            <div className="col-sm-9">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.products}
                info={productInfo}
                currentCategory={this.state.currentCategory} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'

export default class CartSummary extends Component {

    renderSummary() {
        return (
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Your Cart - {this.props.cart.length}</a>
                    <div className="dropdown-menu dropdown-menu-right">
                        {this.props.cart.map(item => (
                            <a href="#" className="dropdown-item" key={item.product.id}>
                                <span className="badge badge-pill badge-danger" onClick={()=>this.props.removeFromCart(item.product)}>X</span>
                                {item.product.productName} - 
                                <span className="badge badge-pill badge-success">{item.quantity}</span>
                            </a>
                        ))}
                    </div>
                </li>
            </ul>
        );
    }

    renderEmpty() {
        return (
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Empty Cart</a>
                </li>
            </ul>
        );
    }
    render() {
        return (this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty())
    }
}

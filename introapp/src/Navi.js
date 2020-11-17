import React, { Component } from 'react'
import CartSummary from './CartSummary'

export default class Navi extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a href="#" className="navbar-brand">Northwind</a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarCollapse" className="collapse navbar-collapse">
                    <CartSummary removeFromCart = {this.props.removeFromCart} cart = {this.props.cart}/>
                </div>
            </nav>

        )
    }
}

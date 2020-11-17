import React, { Component } from 'react'

export default class ProductList extends Component {
   
    render() {
        return (
            <div>
                <h3>{this.props.info.title} -  {this.props.currentCategory}</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">productName</th>
                            <th scope="col">quantityPerUnit</th>
                            <th scope="col">unitPrice</th>
                            <th scope="col">unitsInStock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product =>
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td><button onClick={()=>this.props.addToCart(product)} type="button" className="btn btn-primary">Add</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

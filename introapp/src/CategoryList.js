import React, { Component } from 'react'

export default class CategoryList extends Component {
    constructor(props){
        super(props);
        state:{}
    }
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
            
        )
    }
}

import React, { Component } from 'react'

export default class CategoryList extends Component {
    state = {
        categories: []
    };

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories")
            .then(response => response.json())
            .then(data => this.setState({ categories: data }));
    }

    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ul className="list-group">
                    {this.state.categories.map(category => {
                        let classname = "list-group-item";
                        if (category.categoryName === this.props.currentCategory) {
                            classname += " active";
                        }
                        return <li className={classname} key={category.id}
                            onClick={() => this.props.changeCategory(category)}>
                            {category.categoryName}
                        </li>
                    }
                    )}

                </ul>
            </div>

        )
    }
}

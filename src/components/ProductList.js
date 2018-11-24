import Product from './Product';
import React from 'react';

class ProductList extends React.Component {
    state = {
        products: [
            {
                id: 0,
                name: 'Jabłko'
            }, {
                id: 1,
                name: 'Kawa'
            }, {
                id: 2,
                name: 'Jack Daniels'
            }, {
                id: 3,
                name: 'Samsung Galaxy J5'
            }, {
                id: 4,
                name: 'MacBook Air'
            }
        ]
    }

    render() {
        return <ul>
            { this.state.products.map((product) => <li key={ product.id }>
                <Product name={ product.name } />
            </li>) }
        </ul>;
    }
}

export default ProductList;

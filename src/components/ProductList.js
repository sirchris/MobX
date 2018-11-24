import Product from './Product';
import React from 'react';

class ProductList extends React.Component {
    state = {
        products: [
            {
                id: 0,
                name: 'Jabłko',
                promoted: true
            }, {
                id: 1,
                name: 'Kawa'
            }, {
                id: 2,
                name: 'Jack Daniels'
            }, {
                id: 3,
                name: 'Samsung Galaxy J5',
                promoted: true
            }, {
                id: 4,
                name: 'MacBook Air'
            }
        ]
    }

    isPromoted = (product) => product.promoted;

    render() {
        const listItem = (product) => <li key={ product.id }>
            <Product name={ product.name } />
        </li>;

        return <div>
            <ul>
                { this.state.products.map((product) => listItem(product)) }
            </ul>

            <h2>Promowane</h2>

            <ul>
                { this.state.products.filter(this.isPromoted).map((product) => listItem(product)) }
            </ul>
        </div>;
    }
}

export default ProductList;

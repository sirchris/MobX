import Product from './Product';
import React from 'react';

class ProductList extends React.Component {
    state = {
        order: 'asc',
        phrase: '',
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

    handleBuyClick = (id) => {
        this.setState((previousState) => {
            const products = previousState.products.map((product) => (product.id === id
                ? {
                    ...product,
                    isSold: true
                }
                : product
            ));

            return { products };
        });
    }

    isPromoted = (product) => product.promoted;

    filterProducts = (event) => this.setState({
        phrase: event.target.value
    })

    matchPhrase = (item) => item.name.includes(this.state.phrase);

    sortByName = () => {
        this.setState(() => (this.state.order === 'asc'
            ? {
                order: 'desc',
                products: this.state.products.sort((a, b) => a.name.localeCompare(b.name))
            }
            : {
                order: 'asc',
                products: this.state.products.reverse((a, b) => a.name.localeCompare(b.name))
            }
        ));
    }

    render() {
        const listItem = (product) => <li key={ product.id }>
            <Product id={ product.id } name={ product.name } isSold={ product.isSold } onBuyClick={ this.handleBuyClick } />
        </li>;

        return <div>
            <input type="text" onChange={ this.filterProducts } />

            <button onClick={ this.sortByName }>Sortuj wg nazwy { this.state.order === 'asc'
                ? 'rosnąco'
                : 'malejąco' }</button>

            <ul>
                { this.state.products.filter(this.matchPhrase).map((product) => listItem(product)) }
            </ul>

            <h2>Promowane</h2>

            <ul>
                { this.state.products.filter(this.isPromoted).map((product) => listItem(product)) }
            </ul>
        </div>;
    }
}

export default ProductList;

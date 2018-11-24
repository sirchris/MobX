import Product from './Product';
import React from 'react';
import { observer } from 'mobx-react';
import productStore from './../stores/ProductStore';

@observer
class ProductList extends React.Component {
    state = {
        phrase: ''
    }

    handleBuyClick = (product) => {
        productStore.buyProduct(product.id);
    }

    isPromoted = (product) => product.promoted;

    filterProducts = (event) => this.setState({
        phrase: event.target.value
    })

    matchPhrase = (item) => item.name.includes(this.state.phrase);

    render() {
        const listItem = (product) => <li key={ product.id }>
            <Product id={ product.id } name={ product.name } isSold={ product.isSold } onBuyClick={ this.handleBuyClick } />
        </li>;

        return <div>
            <input type="text" onChange={ this.filterProducts } />

            <button onClick={ productStore.sortByName }>Sortuj wg nazwy { productStore.order === 'asc'
                ? 'rosnąco'
                : 'malejąco' }</button>

            <ul>
                { productStore.products.filter(this.matchPhrase).map((product) => listItem(product)) }
            </ul>

            <h2>Promowane</h2>

            <ul>
                { productStore.products.filter(this.isPromoted).map((product) => listItem(product)) }
            </ul>
        </div>;
    }
}

export default ProductList;

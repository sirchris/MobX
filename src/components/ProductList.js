import { inject, observer } from 'mobx-react';
import Product from './Product';
import PropTypes from 'prop-types';
import React from 'react';

@inject('productStore')
@observer
class ProductList extends React.Component {
    state = {
        phrase: ''
    }

    handleBuyClick = (product) => {
        this.props.productStore.buyProduct(product.id);
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

            <button onClick={ this.props.productStore.sortByName }>Sortuj wg nazwy { this.props.productStore.order === 'asc'
                ? 'rosnąco'
                : 'malejąco' }</button>

            <ul>
                { this.props.productStore.products.filter(this.matchPhrase).map((product) => listItem(product)) }
            </ul>

            <h2>Promowane</h2>

            <ul>
                { this.props.productStore.products.filter(this.isPromoted).map((product) => listItem(product)) }
            </ul>
        </div>;
    }
}

ProductList.propTypes = {
    productStore: PropTypes.array
};

export default ProductList;

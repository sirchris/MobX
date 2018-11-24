import { inject, observer } from 'mobx-react';
import Product from './Product';
import PropTypes from 'prop-types';
import React from 'react';

@inject('basketStore')
@inject('productStore')
@observer
class ProductList extends React.Component {
    handleBuyClick = (product) => {
        this.props.basketStore.addProduct(product);
        this.props.productStore.buyProduct(product.id);
    }

    render() {
        const { products } = this.props.basketStore,
            { filterProducts, matchPhrase, promotedProducts, soldProductsAmount } = this.props.productStore;

        const listItem = (product) => <li key={ product.id }>
            <Product id={ product.id } name={ product.name } isSold={ product.isSold } onBuyClick={ this.handleBuyClick } />
        </li>;

        return <div>
            <input type="text" onChange={ filterProducts } />

            <button onClick={ this.props.productStore.sortByName }>Sortuj wg nazwy { this.props.productStore.order === 'asc'
                ? 'rosnąco'
                : 'malejąco' }</button>

            <ul>
                { matchPhrase.map((product) => listItem(product)) }
            </ul>

            <h2>Promowane</h2>

            <ul>
                { promotedProducts.map((product) => listItem(product)) }
            </ul>

            <h2>Koszyk ({ soldProductsAmount })</h2>

            <ul>
                { products.map((product) => listItem(product)) }
            </ul>
        </div>;
    }
}

ProductList.propTypes = {
    basketStore: PropTypes.array,
    productStore: PropTypes.array
};

export default ProductList;

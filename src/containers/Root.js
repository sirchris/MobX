import ProductList from '../components/ProductList';
import { Provider } from 'mobx-react';
import React from 'react';
import basketStore from '../stores/BasketStore';
import productStore from '../stores/ProductStore';

const Root = () => <Provider basketStore={ basketStore } productStore={ productStore }>
    <ProductList />
</Provider>;

export default Root;

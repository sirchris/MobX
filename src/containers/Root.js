import ProductList from '../components/ProductList';
import { Provider } from 'mobx-react';
import React from 'react';
import productStore from '../stores/ProductStore';

const Root = () => <Provider productStore={ productStore }>
    <ProductList />
</Provider>;

export default Root;

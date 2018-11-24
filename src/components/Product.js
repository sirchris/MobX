import React from 'react';
import { observer } from 'mobx-react';

const Product = (product) => {
    const { name, isSold, onBuyClick } = product;

    const handleClick = () => {
        onBuyClick(product);
    };

    return <div>
        <span style={ {
            textDecoration: isSold
                ? 'line-through'
                : 'none'
        } }>{ name }</span>

        <button onClick={ handleClick }>
            Kup
        </button>
    </div>;
};

export default observer(Product);

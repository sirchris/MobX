import React from 'react';
import { observer } from 'mobx-react';

const Product = (product) => {
    const { name, isSold, onBuyClick } = product;

    const handleClick = () => {
        onBuyClick({
            ...product,
            isSold: true
        });
    };

    return <div>
        <span>{ name }</span>

        { isSold
            ? ''
            : <button onClick={ handleClick }>Kup</button> }
    </div>;
};

export default observer(Product);

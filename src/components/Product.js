import React from 'react';

const Product = (product) => {
    const { id, name, isSold, onBuyClick } = product;

    const handleClick = () => {
        onBuyClick(id);
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

export default Product;

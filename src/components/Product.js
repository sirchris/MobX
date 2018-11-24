import PropTypes from 'prop-types';
import React from 'react';

const Product = ({ name }) => <span>{ name }</span>;

Product.propTypes = {
    name: PropTypes.string.isRequired
};

export default Product;

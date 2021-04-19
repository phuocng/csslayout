/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import './product.css';
import ProductModel from '../constants/ProductModel';
import slug from '../helpers/slug';

interface ProductProps {
    product: ProductModel;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="product" style={{ backgroundColor: product.themeColor }}>
            <a href={product.url}>
                <img className="product__logo" src={`/assets/${slug(product.name)}.png`} alt={`${product.name} - ${product.description}`} />
                <h3 className="product__name">{product.name}</h3>
                <div className="product__desc">{product.description}</div>
            </a>
        </div>
    );
};

export default Product;

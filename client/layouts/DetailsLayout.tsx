/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Ad from '../components/Ad';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Layout from './Layout';
import Product from '../components/Product';
import { ProductList } from '../constants/ProductList';
import randomItems from '../helpers/randomIterms';

interface DetailsLayoutProps {
    title: string;
}

const DetailsLayout: React.FC<DetailsLayoutProps> = ({ title, children }) => {
    useDocumentTitle(`CSS Layout ∙ ${title}`);

    const products = randomItems(ProductList, 3);

    return (
        <Layout>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__heading">{title}</h1>
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <main className="main">
                        {children}
                    </main>
                    <div className="sidebar">
                        <div className="sidebar__inner">
                            <Ad />
                            {
                                products.map(product => <Product key={product.name} product={product} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DetailsLayout;

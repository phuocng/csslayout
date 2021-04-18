/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import Ad from '../components/Ad';
import Product from '../components/Product';
import { ProductList } from '../constants/ProductList';
import Pattern from '../constants/Pattern';
import randomItems from '../helpers/randomIterms';
import slug from '../helpers/slug';
import CoverLoader from '../loaders/CoverLoader';
import Layout from './Layout';

interface DetailsLayoutProps {
    pattern: Pattern;
}

const DetailsLayout: React.FC<DetailsLayoutProps> = ({ pattern, children }) => {
    const products = React.useMemo(() => randomItems(ProductList, 3), []);
    const patternSlug = slug(pattern);

    return (
        <Layout>
            <Helmet>
                <meta name="title" content={`CSS Layout ∙ ${pattern}`} />                

                <meta property="og:image" content={`https://csslayout.io/assets/patterns/${patternSlug}.png`} />
                <meta property="og:title" content={`CSS Layout ∙ ${pattern}`} />
                <meta property="og:url" content={`https://csslayout.io/patterns/${patternSlug}`} />

                <meta property="twitter:image" content={`https://csslayout.io/assets/patterns/${patternSlug}.png`} />
                <meta property="twitter:title" content={`CSS Layout ∙ ${pattern}`} />
                <meta property="twitter:url" content={`https://csslayout.io/patterns/${patternSlug}`} />
            </Helmet>
            <div className="hero">
                <div className="container">
                    <div className="hero__logo">
                        <CoverLoader pattern={pattern} />
                    </div>
                    <h1 className="hero__heading">{pattern}</h1>
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

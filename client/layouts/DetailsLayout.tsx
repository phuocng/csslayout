/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Link } from 'react-router-dom';

import useDocumentTitle from '../hooks/useDocumentTitle';
import Layout from './Layout';
import ProductHuntBadge from './ProductHuntBadge';

interface DetailsLayoutProps {
    title: string;
}

const DetailsLayout: React.FC<DetailsLayoutProps> = ({ title, children }) => {
    useDocumentTitle(`CSS Layout ∙ ${title}`);

    return (
        <Layout>
            <div className='flex sm:text-2xl p-4 xl:pl-0'>
                <Link
                    to="/"
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    Home
                </Link>
                <span className='mx-2'>/</span>
                <Link
                    to="/patterns"
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    Explore
                </Link>
                <span className='mx-2'>/</span>
                <h1>{title}</h1>
            </div>
            <div className='flex justify-center pb-5'>
                <ProductHuntBadge />
            </div>
            <div className='xl:border-l xl:border-t xl:border-r xl:border-gray-400'>
                {children}
            </div>
        </Layout>
    );
};

export default DetailsLayout;

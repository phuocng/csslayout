import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const DetailsLayout = ({ name, children }) => {
    return (
        <Layout>
            <div className="flex items-center mv5 f2">
                <Link to="/" className="link">Home</Link>
                <div className="ph2">/</div>
                <div className="f2">{name}</div>
            </div>

            <div className="mb5">
                {children}
            </div>
        </Layout>
    );
};

export default DetailsLayout;

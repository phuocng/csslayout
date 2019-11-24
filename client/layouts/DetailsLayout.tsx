import React from 'react';
import { Link } from 'react-router-dom';

import useDocumentTitle from '../hooks/useDocumentTitle';
import Layout from './Layout';

interface DetailsLayoutProps {
    title: string;
}

const DetailsLayout: React.FC<DetailsLayoutProps> = ({ title, children }) => {
    useDocumentTitle(`CSS Layout ∙ ${title}`);

    return (
        <Layout>
            <div className="mv4">
                <Link to="/" className="bg-dark-blue black br-pill link pa1 ph3 pv2 white">CSS Layout</Link>
            </div>
            <div className="bt br bl b--black-20 relative br4 br--top">
                <h1 className="absolute bg-white f2 fw6 left-2 lh-copy ma0 ph2 top-0" style={{ left: '50%', transform: 'translate(-50%, -50%)' }}>{title}</h1>

                {children}
            </div>
        </Layout>
    );
};

export default DetailsLayout;

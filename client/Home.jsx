import React from 'react';
import { Link } from 'react-router-dom';

import CenterCover from './covers/CenterCover';
import StickyFooterCover from './covers/StickyFooterCover';
import Layout from './Layout';
import useDocumentTitle from './useDocumentTitle';

const Home = () => {
    useDocumentTitle('CSS Layout');

    return (
        <Layout>
            <h2 className="f2 lh-copy">Layouts</h2>

            <div className="flex flex-wrap justify-between">
                 <div className="w-30">
                    <Link to="/centering" className="link flex flex-column items-center justify-center bg-black-05 br2 pa3">
                        <StickyFooterCover />
                        <h4 className="f4 mv0 pv3">Sticky footer</h4>
                    </Link>
                </div>
            </div>

            <h2 className="f2 lh-copy">Patterns</h2>

            <div className="flex flex-wrap justify-between">
                <div className="w-30">
                    <Link to="/centering" className="link flex flex-column items-center justify-center bg-black-05 br2 pa3">
                        <CenterCover />
                        <h4 className="f4 mv0 pv3">Centering</h4>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Home;

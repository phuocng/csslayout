import React from 'react';
import { Link } from 'react-router-dom';

import CenterCover from './covers/CenterCover';
import Layout from './Layout';

const Home = () => {
    return (
        <Layout>
            <h2 className="f2 lh-copy">Pattern</h2>

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

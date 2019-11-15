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
            <div className="b--black-30 bb pt5 pb4">
                <div className="tc flex items-center justify-center">
                    {
                        'CSS LAYOUT'.split('').map((c, index) => {
                            return (
                                c === ' '
                                ? <div key={index} className="mh4" />
                                : <div key={index} className="flex items-center justify-center bg-blue white a mh1 w3 h3 f1 fw6">{c}</div>
                            );
                        })
                    }
                </div>
                <p className="f4 tc lh-copy">a collection of popular layouts and patterns made with CSS</p>
            </div>
            <div className="mw8 center pb4">
                <h2 className="f2 lh-copy">Layouts</h2>

                <div className="flex flex-wrap justify-between">
                    <div className="w-30">
                        <Link to="/sticky-footer" className="link flex flex-column items-center justify-center bg-black-05 br2 pa3">
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
            </div>
        </Layout>
    );
};

export default Home;

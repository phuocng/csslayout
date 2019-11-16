import React from 'react';
import { Link } from 'react-router-dom';

import BadgeCover from './covers/BadgeCover';
import CenterCover from './covers/CenterCover';
import InputAddonCover from './covers/InputAddonCover';
import SidebarCover from './covers/SidebarCover';
import StickyFooterCover from './covers/StickyFooterCover';
import StickyHeaderCover from './covers/StickyHeaderCover';
import StepperInputCover from './covers/StepperInputCover';
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
                                : <div key={index} className="flex items-center justify-center bg-blue white mh1 w3 h3 f1 fw6">{c}</div>
                            );
                        })
                    }
                </div>
                <p className="f4 tc lh-copy">a collection of popular layouts and patterns made with CSS</p>
            </div>
            <div className="mw8 center pb4">
                <h2 className="f2 lh-copy">Layouts</h2>

                <div className="flex flex-wrap">
                    <div className="pa2 w-20">
                        <Link to="/sidebar" className="link flex flex-column items-center justify-center bg-black-05 br2 ph3 pv4">
                            <SidebarCover />
                            <h4 className="f4 mv0 pt3">Sidebar</h4>
                        </Link>
                    </div>
                    <div className="pa2 w-20">
                        <Link to="/sticky-footer" className="link flex flex-column items-center justify-center bg-black-05 br2 ph3 pv4">
                            <StickyFooterCover />
                            <h4 className="f4 mv0 pt3">Sticky footer</h4>
                        </Link>
                    </div>
                    <div className="pa2 w-20">
                        <Link to="/sticky-header" className="link flex flex-column items-center justify-center bg-black-05 br2 ph3 pv4">
                            <StickyHeaderCover />
                            <h4 className="f4 mv0 pt3">Sticky header</h4>
                        </Link>
                    </div>
                </div>

                <h2 className="f2 lh-copy">Patterns</h2>

                <div className="flex flex-wrap">
                    <div className="pa2 w-20">
                        <Link to="/badge" className="link flex flex-column items-center justify-center bg-black-05 br2 ph3 pv4">
                            <BadgeCover />
                            <h4 className="f4 mv0 pt3">Badge</h4>
                        </Link>
                    </div>
                    <div className="pa2 w-20">
                        <Link to="/centering" className="link flex flex-column items-center justify-center bg-black-05 br2 ph3 pv4">
                            <CenterCover />
                            <h4 className="f4 mv0 pt3">Centering</h4>
                        </Link>
                    </div>
                    <div className="pa2 w-20">
                        <Link to="/input-add-on" className="link flex flex-column items-center justify-center bg-black-05 br2 ph3 pv4">
                            <InputAddonCover />
                            <h4 className="f4 mv0 pt3">Input addon</h4>
                        </Link>
                    </div>
                    <div className="pa2 w-20">
                        <Link to="/stepper-input" className="link flex flex-column items-center justify-center bg-black-05 br2 ph3 pv4">
                            <StepperInputCover />
                            <h4 className="f4 mv0 pt3">Stepper input</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;

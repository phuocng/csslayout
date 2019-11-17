import React from 'react';
import { Link } from 'react-router-dom';

import BadgeCover from './layouts/badge/Cover';
import ButtonWithIconCover from './layouts/button-with-icon/Cover';
import CenterCover from './layouts/centering/Cover';
import FixedAtCornerCover from './layouts/fixed-at-corner/Cover';
import HolyGrailCover from './layouts/holy-grail/Cover';
import InputAddonCover from './layouts/input-add-on/Cover';
import MediaObjectCover from './layouts/media-object/Cover';
import PreviousNextButtonCover from './layouts/previous-next-buttons/Cover';
import SameHeightColumnsCover from './layouts/same-height-columns/Cover';
import SidebarCover from './layouts/sidebar/Cover';
import SplitScreenCover from './layouts/split-screen/Cover';
import StepperInputCover from './layouts/stepper-input/Cover';
import StickyFooterCover from './layouts/sticky-footer/Cover';
import StickyHeaderCover from './layouts/sticky-header/Cover';
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

                <div className="flex flex-wrap items-start">
                    <div className="pa1 w-20">
                        <Link to="/holy-grail" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <HolyGrailCover />
                            <h4 className="f4 mv0 pt3">Holy grail</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/sidebar" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <SidebarCover />
                            <h4 className="f4 mv0 pt3">Sidebar</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/split-screen" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <SplitScreenCover />
                            <h4 className="f4 mv0 pt3">Split screen</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/sticky-footer" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <StickyFooterCover />
                            <h4 className="f4 mv0 pt3">Sticky footer</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                    <Link to="/sticky-header" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                        <StickyHeaderCover />
                        <h4 className="f4 mv0 pt3">Sticky header</h4>
                    </Link>
                    </div>
                </div>

                <h2 className="f2 lh-copy">Patterns</h2>

                <div className="flex flex-wrap items-start">
                    <div className="pa1 w-20">
                        <Link to="/badge" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <BadgeCover />
                            <h4 className="f4 mv0 pt3">Badge</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/button-with-icon" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <ButtonWithIconCover />
                            <h4 className="f4 mv0 pt3">Button with icon</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/centering" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <CenterCover />
                            <h4 className="f4 mv0 pt3">Centering</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/fixed-at-corner" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <FixedAtCornerCover />
                            <h4 className="f4 mv0 pt3">Fixed at corner</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/input-add-on" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <InputAddonCover />
                            <h4 className="f4 mv0 pt3">Input addon</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/media-object" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <MediaObjectCover />
                            <h4 className="f4 mv0 pt3">Media object</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/previous-next-buttons" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <PreviousNextButtonCover />
                            <h4 className="f4 mv0 pt3">Previous next buttons</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/same-height-columns" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <SameHeightColumnsCover />
                            <h4 className="f4 mv0 pt3">Same height columns</h4>
                        </Link>
                    </div>
                    <div className="pa1 w-20">
                        <Link to="/stepper-input" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
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

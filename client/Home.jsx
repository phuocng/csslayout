import React from 'react';
import { Link } from 'react-router-dom';

import BadgeCover from './layouts/badge/Cover';
import BreadcrumbCover from './layouts/breadcrumb/Cover';
import ButtonWithIconCover from './layouts/button-with-icon/Cover';
import CardCover from './layouts/card/Cover';
import CenterCover from './layouts/centering/Cover';
import FixedAtCornerCover from './layouts/fixed-at-corner/Cover';
import HolyGrailCover from './layouts/holy-grail/Cover';
import InputAddonCover from './layouts/input-add-on/Cover';
import MediaObjectCover from './layouts/media-object/Cover';
import MenuCover from './layouts/menu/Cover';
import ModalCover from './layouts/modal/Cover';
import NotificationCover from './layouts/notification/Cover';
import PaginationCover from './layouts/pagination/Cover';
import PreviousNextButtonCover from './layouts/previous-next-buttons/Cover';
import PricingTableCover from './layouts/pricing-table/Cover';
import ProgressBarCover from './layouts/progress-bar/Cover';
import SameHeightColumnsCover from './layouts/same-height-columns/Cover';
import SidebarCover from './layouts/sidebar/Cover';
import SliderCover from './layouts/slider/Cover';
import SplitScreenCover from './layouts/split-screen/Cover';
import StepperInputCover from './layouts/stepper-input/Cover';
import StickyFooterCover from './layouts/sticky-footer/Cover';
import StickyHeaderCover from './layouts/sticky-header/Cover';
import SwitchCover from './layouts/switch/Cover';
import Layout from './Layout';
import useDocumentTitle from './hooks/useDocumentTitle';

const Home = () => {
    useDocumentTitle('CSS Layout');

    return (
        <Layout>
            <div className="mt5 bl br bt b--black-20 br4 br--top">
                <div className="relative">
                    <h1 className="absolute bg-white f2 fw6 left-2 lh-copy ma0 ph2 top-0" style={{ left: '50%', transform: 'translate(-50%, -50%)' }}>CSS Layout</h1>

                    <h2 className="fw3 f3 tc lh-copy ma0 pa4">a collection of popular layouts and patterns made with CSS</h2>

                    <div className="w-30 center mb4">
                        <ul className="ma0 pa0 list f4 lh-copy">
                            <li className="flex items-center justify-between">
                                <div>Zero dependencies</div>
                                <div>🎉</div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>No frameworks</div>
                                <div>🎉</div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>No CSS hacks</div>
                                <div>🎉</div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>Good practices</div>
                                <div className="br-pill ph2 white bg-dark-blue f6">soon</div>
                            </li>
                            <li className="flex items-center justify-between">
                                <div>Accessibility</div>
                                <div className="br-pill ph2 white bg-dark-blue f6">soon</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bt b--black-20 relative">
                    <h3 className="absolute bg-white f4 left-2 lh-copy ma0 ph2 top-0" style={{ transform: 'translate(0, -50%)' }}>Layouts</h3>

                    <div className="flex flex-wrap items-start pa4">
                        <div className="pa1 w-20">
                            <Link to="/holy-grail" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <HolyGrailCover />
                                <h4 className="f5 mv0 pt3">Holy grail</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/sidebar" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <SidebarCover />
                                <h4 className="f5 mv0 pt3">Sidebar</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/split-screen" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <SplitScreenCover />
                                <h4 className="f5 mv0 pt3">Split screen</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/sticky-footer" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <StickyFooterCover />
                                <h4 className="f5 mv0 pt3">Sticky footer</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                        <Link to="/sticky-header" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                            <StickyHeaderCover />
                            <h4 className="f5 mv0 pt3">Sticky header</h4>
                        </Link>
                        </div>
                    </div>
                </div>

                <div className="bt b--black-20 relative">
                    <h3 className="absolute bg-white f4 left-2 lh-copy ma0 ph2 top-0" style={{ transform: 'translate(0, -50%)' }}>Patterns</h3>

                    <div className="flex flex-wrap items-start pa4">
                        <div className="pa1 w-20">
                            <Link to="/badge" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <BadgeCover />
                                <h4 className="f5 mv0 pt3">Badge</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/breadcrumb" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <BreadcrumbCover />
                                <h4 className="f5 mv0 pt3">Breadcrumb</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/button-with-icon" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <ButtonWithIconCover />
                                <h4 className="f5 mv0 pt3">Button with icon</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/card" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <CardCover />
                                <h4 className="f5 mv0 pt3">Card</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/centering" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <CenterCover />
                                <h4 className="f5 mv0 pt3">Centering</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/fixed-at-corner" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <FixedAtCornerCover />
                                <h4 className="f5 mv0 pt3">Fixed at corner</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/input-add-on" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <InputAddonCover />
                                <h4 className="f5 mv0 pt3">Input addon</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/media-object" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <MediaObjectCover />
                                <h4 className="f5 mv0 pt3">Media object</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/menu" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <MenuCover />
                                <h4 className="f5 mv0 pt3">Menu</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/modal" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <ModalCover />
                                <h4 className="f5 mv0 pt3">Modal</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/notification" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <NotificationCover />
                                <h4 className="f5 mv0 pt3">Notification</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/pagination" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <PaginationCover />
                                <h4 className="f5 mv0 pt3">Pagination</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/previous-next-buttons" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <PreviousNextButtonCover />
                                <h4 className="f5 mv0 pt3">Previous next buttons</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/pricing-table" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <PricingTableCover />
                                <h4 className="f5 mv0 pt3">Pricing table</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/progress-bar" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <ProgressBarCover />
                                <h4 className="f5 mv0 pt3">Progress bar</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/same-height-columns" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <SameHeightColumnsCover />
                                <h4 className="f5 mv0 pt3">Same height columns</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/slider" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <SliderCover />
                                <h4 className="f5 mv0 pt3">Slider</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/stepper-input" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <StepperInputCover />
                                <h4 className="f5 mv0 pt3">Stepper input</h4>
                            </Link>
                        </div>
                        <div className="pa1 w-20">
                            <Link to="/switch" className="link flex flex-column items-center justify-center tc hover-bg-black-10 br2 pa3">
                                <SwitchCover />
                                <h4 className="f5 mv0 pt3">Switch</h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;

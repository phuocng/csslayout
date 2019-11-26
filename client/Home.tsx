import React from 'react';

import CoverCard from './components/CoverCard';
import Heading from './components/Heading';
import Pattern from './constants/Pattern';
import useDocumentTitle from './hooks/useDocumentTitle';
import Layout from './layouts/Layout';

const Home = () => {
    useDocumentTitle('CSS Layout');

    return (
        <Layout>
            <div className="mt5 bl br bt b--black-20 br4 br--top">
                <div className="relative">
                    <h1
                        className="absolute bg-white f2 fw6 left-2 lh-copy ma0 ph2 top-0 br-pill ph3 white bg-dark-blue"
                        style={{ left: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                        CSS Layout
                    </h1>

                    <h2 className="fw3 f3 tc lh-copy ma0 pa4">
                        a collection of popular layouts and patterns made with CSS
                    </h2>

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
                                <div>Real use cases</div>
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

                <section>
                    <Heading title="Layouts" />

                    <div className="flex flex-wrap items-start pa4">
                        <CoverCard pattern={Pattern.HolyGrail} />
                        <CoverCard pattern={Pattern.Sidebar} />
                        <CoverCard pattern={Pattern.SplitScreen} />
                        <CoverCard pattern={Pattern.StickyFooter} />
                        <CoverCard pattern={Pattern.StickyHeader} />
                    </div>
                </section>

                <section>
                    <Heading title="Patterns" />

                    <div className="flex flex-wrap items-start pa4">
                        <CoverCard pattern={Pattern.Badge} />
                        <CoverCard pattern={Pattern.Breadcrumb} />
                        <CoverCard pattern={Pattern.ButtonWithIcon} />
                        <CoverCard pattern={Pattern.Card} />
                        <CoverCard pattern={Pattern.Centering} />
                        <CoverCard pattern={Pattern.DockedAtCorner} />
                        <CoverCard pattern={Pattern.DotNavigation} />
                        <CoverCard pattern={Pattern.FeatureList} />
                        <CoverCard pattern={Pattern.FixedAtCorner} />
                        <CoverCard pattern={Pattern.InputAddOn} />
                        <CoverCard pattern={Pattern.MediaObject} />
                        <CoverCard pattern={Pattern.Menu} />
                        <CoverCard pattern={Pattern.Modal} />
                        <CoverCard pattern={Pattern.Notification} />
                        <CoverCard pattern={Pattern.Pagination} />
                        <CoverCard pattern={Pattern.PreviousNextButtons} />
                        <CoverCard pattern={Pattern.PricingTable} />
                        <CoverCard pattern={Pattern.PropertyList} />
                        <CoverCard pattern={Pattern.ProgressBar} />
                        <CoverCard pattern={Pattern.QuestionsAndAnswers} />
                        <CoverCard pattern={Pattern.RadioSwitch} />
                        <CoverCard pattern={Pattern.Rating} />
                        <CoverCard pattern={Pattern.SameHeightColumns} />
                        <CoverCard pattern={Pattern.SearchBox} />
                        <CoverCard pattern={Pattern.Separator} />
                        <CoverCard pattern={Pattern.SimpleGrid} />
                        <CoverCard pattern={Pattern.Slider} />
                        <CoverCard pattern={Pattern.SpinButton} />
                        <CoverCard pattern={Pattern.SplitNavigation} />
                        <CoverCard pattern={Pattern.StepperInput} />
                        <CoverCard pattern={Pattern.Switch} />
                        <CoverCard pattern={Pattern.Tab} />
                        <CoverCard pattern={Pattern.TogglePasswordVisibility} />
                        <CoverCard pattern={Pattern.Wizard} />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;

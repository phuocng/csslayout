import React from 'react';
import { Link } from 'react-router-dom';

import CoverCard from './components/CoverCard';
import Heading from './components/Heading';
import Pattern from './constants/Pattern';
import useDocumentTitle from './hooks/useDocumentTitle';
import Layout from './layouts/Layout';

const Home = () => {
    useDocumentTitle('CSS Layout ∙ Explore');

    return (
        <Layout>
            <div className="mv4">
                <Link to="/" className="bg-dark-blue black br-pill link pa1 ph3 pv2 white">CSS Layout</Link>
            </div>
            <div className="bt br bl b--black-20 relative br4 br--top">
                <h1 className="absolute bg-white f2 fw6 left-2 lh-copy ma0 ph2 top-0" style={{ left: '50%', transform: 'translate(-50%, -50%)' }}>Explore</h1>

                <h2 className="fw3 f3 tc lh-copy ma0 pa4">Here is the collection of patterns</h2>

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

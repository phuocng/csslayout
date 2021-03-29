/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './home.css';

import Ad from '../components/Ad';
import CoverCard from '../components/CoverCard';
import Pattern from '../constants/Pattern';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Layout from '../layouts/Layout';

const HomePage = () => {
    useDocumentTitle('CSS Layout');
    const numPatterns = Object.keys(Pattern).length;

    return (
        <Layout>
            <Helmet>
                <meta name="description" content="CSS layouts and patterns" />
                <meta name="keywords" content="css display, css flexbox, css grid, css layouts, flex, flexbox, flexbox cheatsheet, web design, web template" />
            </Helmet>
            <div className="home__hero">
                <div className="container">
                    <div className="home__logo"><img src="/assets/logo.png" alt="CSS Layout" /></div>
                    <h1 className="home__heading">Popular Layouts & patterns made with CSS</h1>
                </div>
            </div>

            <div className="container">
                <div className="home__features">
                    <div className="home__features-feature">
                        <div className="home__features-title">Zero Dependencies</div>
                    </div>
                    <div className="home__features-feature">
                        <div className="home__features-title">No Frameworks</div>
                    </div>
                    <div className="home__features-feature">
                        <div className="home__features-title">No CSS Hacks</div>
                    </div>
                    <div className="home__features-feature">
                        <div className="home__features-title">Real Use Cases</div>
                    </div>
                    <div className="home__features-feature">
                        <div className="home__features-title">Good Practices</div>
                    </div>
                    <div className="home__features-feature">
                        <div className="home__features-title">Accessibility</div>
                    </div>
                </div>

                <section className="home__patterns">
                    <div className="home__patterns-overlay">
                        <div className="home__patterns-heading">{numPatterns} patterns</div>
                        <Link to="/patterns" className="home__patterns-explore">Explore the collection</Link>
                    </div>
                    <div className="home__patterns-content">
                        <CoverCard pattern={Pattern.HolyGrail} />
                        <CoverCard pattern={Pattern.Sidebar} />
                        <CoverCard pattern={Pattern.SplitScreen} />
                        <CoverCard pattern={Pattern.StickyFooter} />
                        <CoverCard pattern={Pattern.StickyHeader} />
                        <CoverCard pattern={Pattern.AvatarList} />
                        <CoverCard pattern={Pattern.Badge} />
                        <CoverCard pattern={Pattern.Breadcrumb} />
                        <CoverCard pattern={Pattern.ButtonWithIcon} />
                        <CoverCard pattern={Pattern.Card} />
                        <CoverCard pattern={Pattern.Centering} />
                        <CoverCard pattern={Pattern.CircularNavigation} />
                        <CoverCard pattern={Pattern.DockedAtCorner} />
                        <CoverCard pattern={Pattern.DotLeader} />
                        <CoverCard pattern={Pattern.DotNavigation} />
                        <CoverCard pattern={Pattern.DropArea} />
                        <CoverCard pattern={Pattern.DropCap} />
                        <CoverCard pattern={Pattern.Dropdown} />
                        <CoverCard pattern={Pattern.FeatureList} />
                        <CoverCard pattern={Pattern.FixedAtCorner} />
                        <CoverCard pattern={Pattern.FloatingLabel} />
                        <CoverCard pattern={Pattern.InputAddon} />
                        <CoverCard pattern={Pattern.MediaObject} />
                        <CoverCard pattern={Pattern.Menu} />
                        <CoverCard pattern={Pattern.Modal} />
                        <CoverCard pattern={Pattern.Notification} />
                        <CoverCard pattern={Pattern.Pagination} />
                        <CoverCard pattern={Pattern.PresenceIndicator} />
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
                        <CoverCard pattern={Pattern.UploadButton} />
                        <CoverCard pattern={Pattern.Wizard} />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;

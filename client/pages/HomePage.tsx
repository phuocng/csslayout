/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import './homePage.css';

import CoverCard from '../components/CoverCard';
import Pattern from '../constants/Pattern';
import chunk from '../helpers/chunk';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Layout from '../layouts/Layout';

const NUM_SLIDES = 3;

const HomePage = () => {
    useDocumentTitle('CSS Layout');
    const numPatterns = Object.keys(Pattern).length;

    const numPatternsPerSlide = Math.floor(numPatterns / NUM_SLIDES);
    const groups = chunk(Object.entries(Pattern).map(([_, v]) => v).slice(0, NUM_SLIDES * numPatternsPerSlide), numPatternsPerSlide);

    return (
        <Layout>
            <Helmet>
                <meta name="description" content="CSS layouts and patterns" />
                <meta name="keywords" content="css display, css flexbox, css grid, css layouts, flex, flexbox, flexbox cheatsheet, web design, web template" />
            </Helmet>
            <div className="hero">
                <div className="container">
                    <div className="hero__logo"><img src="/assets/logo.png" alt="CSS Layout" /></div>
                    <h1 className="hero__heading">Popular Layouts & patterns made with CSS</h1>
                </div>
            </div>

            <div className="container">
                <div className="home__features">
                    <div className="home__feature">
                        <div className="home__title">Zero Dependencies</div>
                    </div>
                    <div className="home__feature">
                        <div className="home__title">No Frameworks</div>
                    </div>
                    <div className="home__feature">
                        <div className="home__title">No CSS Hacks</div>
                    </div>
                    <div className="home__feature">
                        <div className="home__title">Real Use Cases</div>
                    </div>
                    <div className="home__feature">
                        <div className="home__title">Good Practices</div>
                    </div>
                    <div className="home__feature">
                        <div className="home__title">Accessibility</div>
                    </div>
                </div>

                <section className="home__patterns">
                    <div className="home__overlay">
                        <div className="home__heading">{numPatterns} patterns</div>
                        <Link to="/patterns" className="home__explore">Explore the collection</Link>
                    </div>
                    <div className="home__sliders">
                    {
                        groups.map((patterns, index) => (
                            <div className="home__slide" key={index}>
                            {
                                patterns.map(pattern => <CoverCard key={pattern} pattern={pattern} />)
                            }
                            </div>
                        ))
                    }
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default HomePage;

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
                        <div className="home__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48" width="48" height="48"><g transform="matrix(2,0,0,2,0,0)"><path d="M0.500 12.000 A11.500 11.500 0 1 0 23.500 12.000 A11.500 11.500 0 1 0 0.500 12.000 Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.5,14.5v-4a1,1,0,0,1,1-1h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.5 12.5L6 12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.5 14.5L8.5 9.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.5,9.5h.75a1.25,1.25,0,0,1,0,2.5H8.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.5 14.5L9 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.5,14.5h-1a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.5 12.5L14.5 12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.5,14.5h-1a1,1,0,0,1-1-1v-3a1,1,0,0,1,1-1h1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5 12.5L18.5 12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        </div>
                        <div className="home__title">
                            Zero Dependencies
                        </div>
                    </div>
                    <div className="home__feature">
                        <div className="home__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48" width="48" height="48"><g transform="matrix(2,0,0,2,0,0)"><path d="M0.500 2.500 L23.500 2.500 L23.500 21.500 L0.500 21.500 Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M0.5 7.5L23.5 7.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4,4.75A.25.25,0,1,1,3.75,5,.25.25,0,0,1,4,4.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7,4.75A.25.25,0,1,1,6.75,5,.25.25,0,0,1,7,4.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10,4.75A.25.25,0,1,1,9.75,5,.25.25,0,0,1,10,4.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.5,11.5a2,2,0,0,0-2,2v1a2,2,0,0,0,2,2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.5,11.5h-1a1,1,0,0,0-1,1c0,1.5,2,1.5,2,3a1,1,0,0,1-1,1h-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5,11.5h-1a1,1,0,0,0-1,1c0,1.5,2,1.5,2,3a1,1,0,0,1-1,1h-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        </div>
                        <div className="home__title">No Frameworks</div>
                    </div>
                    <div className="home__feature">
                        <div className="home__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48" width="48" height="48"><g transform="matrix(2,0,0,2,0,0)"><path d="M13.514 23.5L10.514 23.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.514 21.5L9.514 21.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.014 0.5L12.014 3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.528 4.015L5.65 6.136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.499 4.015L18.378 6.136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M0.514 12.5L3.514 12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.514 12.5L20.514 12.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.014,12.5a6,6,0,1,0-9.429,4.917,1,1,0,0,1,.429.821V19a.5.5,0,0,0,.5.5h5a.5.5,0,0,0,.5-.5v-.763a1,1,0,0,1,.429-.821A5.98,5.98,0,0,0,18.014,12.5Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        </div>
                        <div className="home__title">
                            No CSS Hacks
                        </div>
                    </div>
                    <div className="home__feature">
                        <div className="home__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48" width="48" height="48"><g transform="matrix(2,0,0,2,0,0)"><path d="M9.000 9.500 A3 1.5 0 1 0 15.000 9.500 A3 1.5 0 1 0 9.000 9.500 Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.000 3.500 A3 1.5 0 1 0 15.000 3.500 A3 1.5 0 1 0 9.000 3.500 Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.000 6.500 A3 1.5 0 1 0 22.000 6.500 A3 1.5 0 1 0 16.000 6.500 Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.500 6.500 A3 1.5 0 1 0 8.500 6.500 A3 1.5 0 1 0 2.500 6.500 Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.737 4.484L7.582 5.421" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.694 5.541L14.261 4.483" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.074,7.381,1.1,8.239a1,1,0,0,0-.6.917v6.7a1,1,0,0,0,.586.91L11.1,21.32a1,1,0,0,0,.8.013l10.983-4.577a1,1,0,0,0,.615-.923V9.156a1,1,0,0,0-.6-.917L21.2,7.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.5 13.5L11.5 21.408" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M23.315 8.577L11.5 13.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.5 13.5L0.681 8.582" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        </div>
                        <div className="home__title">Real Use Cases</div>
                    </div>
                    <div className="home__feature">
                        <div className="home__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48" width="48" height="48"><g transform="matrix(2,0,0,2,0,0)"><path d="M20,15.659h0a1.5,1.5,0,1,1,0,3H19a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,1-1.5,1H12.5c-2.851,0-3.5-.5-7-1v-8.5c2.45,0,6.5-4.5,6.5-8.5,0-1.581,2.189-2.17,3,.719.5,1.781-1,5.281-1,5.281h8a1.5,1.5,0,0,1,1.5,1.5c0,.829-.672,2-1.5,2H21a1.5,1.5,0,0,1,0,3H20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M0.5 10.159H5.5V22.159H0.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.25 19.659L3.25 19.659" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.25,19.659a.25.25,0,1,0,.25.25.25.25,0,0,0-.25-.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        </div>
                        <div className="home__title">Good Practices <div className="home__soon">soon</div></div>
                    </div>
                    <div className="home__feature">
                        <div className="home__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 48 48" width="48" height="48"><g transform="matrix(2,0,0,2,0,0)"><path d="M7,6,8.362,16.44a1,1,0,0,0,1.184.853C11.644,16.882,16.233,16,17,16c1,0,1.5,5.5,2,5.5a11.343,11.343,0,0,0,2-.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.389,12.557A5.645,5.645,0,0,0,3,18a5.487,5.487,0,0,0,5.4,5.5A5.66,5.66,0,0,0,14,18V16.451" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.456,3.227A2.728,2.728,0,1,1,6.728.5,2.728,2.728,0,0,1,9.456,3.227Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.389 12.557L13.5 11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        </div>
                        <div className="home__title">Accessibility Support <div className="home__soon">soon</div></div>
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

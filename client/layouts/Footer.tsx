/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import './footer.css';

const Footer: React.FC<{}> = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__about">
                    <div className="footer__author">
                        <div>© 2019-{new Date().getFullYear()} Nguyen Huu Phuoc.</div>
                        <div>All rights reserved</div>
                    </div>
                    <a className="footer__social" href="https://twitter.com/nghuuphuoc" rel="noopener noreferrer" target="_blank">
                        <svg height="24" version="1.1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23,6.628l-2-0.5l1-2l-2.464,0.7c-1.809-1.688-4.644-1.589-6.332,0.22c-0.78,0.836-1.21,1.938-1.204,3.08v1 c-3.539,0.73-6.634-1.2-9.5-4.5c-0.5,2.667,0,4.667,1.5,6l-3-0.5c0.405,2.069,1.362,3.7,4,4l-2.5,1c1,2,2.566,2.31,5,2.5 c-1.893,1.353-4.174,2.054-6.5,2c12.755,5.669,20-2.664,20-10V8.3L23,6.628z" strokeLinecap="round" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
                        </svg>
                    </a>
                    <a className="footer__social" href="https://github.com/phuoc-ng" rel="noopener noreferrer" target="_blank">
                        <svg height="24" version="1.1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12,.5A11.5,11.5,0,0,0,8.365,22.914c.574.1.756-.237.756-.541,0-.275.006-1.037,0-2-3.2.694-3.861-1.515-3.861-1.515a3.043,3.043,0,0,0-1.276-1.682c-1.044-.714.078-.7.078-.7a2.414,2.414,0,0,1,1.762,1.184,2.448,2.448,0,0,0,3.346.956A2.45,2.45,0,0,1,9.9,17.084c-2.553-.292-5.238-1.278-5.238-5.686A4.447,4.447,0,0,1,5.847,8.312a4.126,4.126,0,0,1,.112-3.043s.967-.309,3.162,1.18a10.883,10.883,0,0,1,5.76,0c2.2-1.488,3.159-1.18,3.159-1.18a4.131,4.131,0,0,1,.114,3.043A4.442,4.442,0,0,1,19.337,11.4c0,4.42-2.689,5.391-5.251,5.674a2.727,2.727,0,0,1,.787,2.12v3.184c0,.307.186.647.77.536A11.5,11.5,0,0,0,12,.5Z" strokeLinecap="round" fill="none" stroke="currentColor" strokeLinejoin="round"></path>
                        </svg>
                    </a>
                </div>

                <div className="footer__grid">
                    <div className="footer__col">
                        <ul className="footer__products">
                            <li className="footer__product">
                                <a href="https://blur.page" rel="noopener noreferrer" target="_blank" title="A browser extension to hide sensitive element on page">Blur Page</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://checkbrowsers.support" rel="noopener noreferrer" target="_blank" title="A browser extension to check browser compatibility without leaving your tab">Check Browsers Support</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://fakenumbers.io" rel="noopener noreferrer" target="_blank" title="A JavaScript library to fake a number">Fake Numbers</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://formvalidation.io" rel="noopener noreferrer" target="_blank" title="The best validation library for JavaScript">Form Validation</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <ul className="footer__products">                            
                            <li className="footer__product">
                                <a href="https://react-pdf-viewer.dev" rel="noopener noreferrer" target="_blank" title="A PDF viewer made for React">React PDF Viewer</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://1loc.dev" rel="noopener noreferrer" target="_blank" title="Favorite JavaScript utilities in single line of code">1 LOC (4.1k ★)</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://csslayout.io" rel="noopener noreferrer" target="_blank" title="A collection of popular layouts and patterns made with CSS">CSS Layout (3.3k ★)</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://getfrontend.tips" rel="noopener noreferrer" target="_blank" title="Super tiny, quick tips, tricks and best practices of front-end development">Front-end Tips</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <ul className="footer__products">
                            <li className="footer__product">
                                <a href="https://htmldom.dev" rel="noopener noreferrer" target="_blank" title="Common tasks of managing HTML DOM with native API">HTML DOM (3.6k ★)</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://responsive.page" rel="noopener noreferrer" target="_blank" title="A collection of patterns to create a responsive web page">Responsive Design Patterns</a>
                            </li>
                            <li className="footer__product">
                                <a href="https://thisthat.dev" rel="noopener noreferrer"  target="_blank" title="What is the difference between ___ and ___ in the front-end development?">this VS that (700 ★)</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

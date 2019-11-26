import React, { useEffect } from 'react';

import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mw8 mb5 center">
            {children}
            <Footer />
            <ul
                style={{
                    fontSize: '14px',
                    lineHeight: 1.5,
                    listStyleType: 'none',
                    margin: '16px 0',
                    padding: 0,
                }}
            >
                <li>this</li>
                <li style={{ marginLeft: '16px' }}>
                    .madeWith(
                        [<a href="https://reactjs.org" style={{ textDecoration: 'none' }}>react</a>,
                        <a href="https://www.typescriptlang.org" style={{ textDecoration: 'none' }}>typescript</a>
                    ])
                </li>
                <li style={{ marginLeft: '16px' }}>
                    .then(r => lazyLoad(
                        <a href="https://github.com/smooth-code/loadable-components" style={{ textDecoration: 'none' }}>
                            @loadable/component
                        </a>
                    ))
                </li>
                <li style={{ marginLeft: '16px' }}>
                    .then(r => optimizeAndBundle(
                        <a href="https://webpack.js.org" style={{ textDecoration: 'none' }}>webpack</a>
                    ))
                </li>
                <li style={{ marginLeft: '16px' }}>
                    .then(r => exportHtml(
                        <a href="https://github.com/stereobooster/react-snap" style={{ textDecoration: 'none' }}>
                            react-snap
                        </a>
                    ))
                </li>
                <li style={{ marginLeft: '16px' }}>
                    .then(r => deploy(
                        <a href="https://www.netlify.com" style={{ textDecoration: 'none' }}>Netlify</a>
                    ))
                </li>
                <li style={{ marginLeft: '16px' }}>.assert([scalableCode, superFastWebsite, seoFriendly])</li>
                <li style={{ marginLeft: '16px' }}>
                    .done(
                        <a href="https://github.com/phuoc-ng/csslayout" style={{ textDecoration: 'none' }}>
                            /&#42; Give me 1 star &#42;/
                        </a>
                    ) 🎉
                </li>
            </ul>
        </div>
    );
};

export default Layout;

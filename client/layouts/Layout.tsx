import React, { useEffect } from 'react';

import Footer from './Footer';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ margin: '0 auto 64px auto', maxWidth: '1024px' }}>
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
                    .madeWith([
                        <a href="https://reactjs.org" style={{ textDecoration: 'none' }}>react</a>,
                        <a href="https://www.typescriptlang.org" style={{ textDecoration: 'none' }}>typescript</a>
                    ])
                </li>
                <li style={{ marginLeft: '16px' }}>
                    .then(r => lint(
                        <a href="https://github.com/palantir/tslint" style={{ textDecoration: 'none' }}>
                            tslint
                        </a>
                    ))
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
                <li style={{ marginLeft: '16px' }}>.then(r => &#123;</li>
                <li style={{ marginLeft: '32px' }}>expect(r).is(scalableCode);</li>
                <li style={{ marginLeft: '32px' }}>expect(r).is(superFastWebsite);</li>
                <li style={{ marginLeft: '32px' }}>expect(r).is(seoFriendly);</li>
                <li style={{ marginLeft: '16px' }}>&#125;)</li>
                <li style={{ marginLeft: '16px' }}>
                    .finally(() => &#123;
                        <a href="https://github.com/phuoc-ng/csslayout" style={{ textDecoration: 'none' }}>
                            /&#42; Give me 1 star &#42;/
                        </a>
                    &#125;) 🎉
                </li>
            </ul>
        </div>
    );
};

export default Layout;

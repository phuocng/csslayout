/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{}> = ({ children }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <meta property="og:description" content="A collection of popular layouts and patterns made with CSS" />
                <meta property="og:image" content="https://csslayout.io/assets/screenshot.png" />
                <meta property="og:site_name" content="CSS Layout" />
                <meta property="og:title" content="CSS Layout ∙ A collection of popular layouts and patterns made with CSS" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://csslayout.io" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:creator" content="@nghuuphuoc" />
                <meta property="twitter:description" content="A collection of popular layouts and patterns made with CSS" />
                <meta property="twitter:image" content="https://csslayout.io/assets/screenshot.png" />
                <meta property="twitter:site" content="@nghuuphuoc" />
                <meta property="twitter:title" content="CSS Layout ∙ A collection of popular layouts and patterns made with CSS" />
                <meta property="twitter:url" content="https://csslayout.io" />
            </Helmet>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;

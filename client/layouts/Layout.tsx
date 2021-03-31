/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{}> = ({ children }) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;

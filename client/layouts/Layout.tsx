/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React, { useEffect } from 'react';

import Footer from './Footer';
import Github from './Github';

const Layout: React.FC<{}> = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Github />
            <div style={{ margin: '0 auto 64px auto', maxWidth: '1024px', position: 'relative' }}>
                {children}
                <Footer />
            </div>
        </>
    );
};

export default Layout;

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
            <div className="ml-auto mr-auto max-w-4xl mb-12">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;

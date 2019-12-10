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

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
        </div>
    );
};

export default Layout;

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
        </div>
    );
};

export default Layout;

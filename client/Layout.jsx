import React, { useEffect } from 'react';

import Footer from './Footer';

const Layout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mw8 mv4 center">
            {children}

            <Footer />
        </div>
    );
};

export default Layout;

import React, { useEffect } from 'react';

const Layout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="mw8 center">
            {children}
        </div>
    );
};

export default Layout;

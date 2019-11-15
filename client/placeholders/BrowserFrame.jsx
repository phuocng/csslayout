import React from 'react';

const BrowserFrame = ({ children }) => {
    return (
        <div className="br2 ba b--black-20">
            <div className="flex pa3 bb b--black-20 items-center">
                <div className="br-100 mr1 w1 h1 bg-red" />
                <div className="br-100 mr1 w1 h1 bg-gold" />
                <div className="br-100 mr1 w1 h1 bg-red" />
            </div>
            <div style={{ height: '512px' }}>
                {children}
            </div>
        </div>
    );
};

export default BrowserFrame;

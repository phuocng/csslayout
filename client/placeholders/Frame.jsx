import React from 'react';

const Frame = ({ children }) => {
    return (
        <div
            className="ba b--black-30 br2"
            style={{
                height: '100px',
                width: '100px',
            }}
        >
            {children}
        </div>
    );
};

export default Frame;

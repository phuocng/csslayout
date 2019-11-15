import React from 'react';

const Frame = ({ children, size }) => {
    const bw = (size === 'medium' ? '2px' : '1px');

    return (
        <div
            className="ba b--black-30 br2"
            style={{
                borderWidth: bw,
                height: '100px',
                width: '100px',
            }}
        >
            {children}
        </div>
    );
};

export default Frame;

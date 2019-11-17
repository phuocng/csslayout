import React from 'react';

const Circle = ({ size = 16 }) => {
    return (
        <div
            className="bg-black-30 br-pill"
            style={{
                height: `${size}px`,
                width: `${size}px`,
            }}
        />
    );
};

export default Circle;

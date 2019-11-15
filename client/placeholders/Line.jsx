import React from 'react';

const Line = ({ size }) => {
    const h = (size === 'medium' ? '2px' : '1px');

    return (
        <div
            className="w-100 bg-black-30"
            style={{ height: h }}
        />
    );
};

export default Line;

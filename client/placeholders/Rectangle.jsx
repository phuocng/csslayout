import React from 'react';

const Rectangle = ({ height }) => {
    return (
        <div
            className="w-100 bg-black-30 br-pill"
            style={{ height: `${height}px` }}
        />
    );
};

export default Rectangle;

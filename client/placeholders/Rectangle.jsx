import React from 'react';

const Rectangle = ({ height = 8 }) => {
    return (
        <div
            className="w-100 bg-black-30"
            style={{ height: `${height}px` }}
        />
    );
};

export default Rectangle;

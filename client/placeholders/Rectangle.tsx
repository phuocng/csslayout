import React from 'react';

interface RectangleProps {
    height?: number;
}

const Rectangle: React.FC<RectangleProps> = ({ height = 8 }) => {
    return (
        <div
            className="w-100 bg-black-30 br1"
            style={{ height: `${height}px` }}
        />
    );
};

export default Rectangle;

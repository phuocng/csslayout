import React from 'react';

interface RectangleProps {
    height?: number;
}

const Rectangle: React.FC<RectangleProps> = ({ height = 8 }) => {
    return (
        <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, .3)',
                borderRadius: '2px',
                height: `${height}px`,
                width: '100%',
            }}
        />
    );
};

export default Rectangle;

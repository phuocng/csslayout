import React from 'react';

interface CircleProps {
    size?: number;
}

const Circle: React.FC<CircleProps> = ({ size = 16 }) => {
    return (
        <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, .3)',
                borderRadius: '9999px',
                height: `${size}px`,
                width: `${size}px`,
            }}
        />
    );
};

export default Circle;

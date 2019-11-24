import React from 'react';

interface CircleProps {
    size?: number;
}

const Circle: React.FC<CircleProps> = ({ size = 16 }) => {
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

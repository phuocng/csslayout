import React from 'react';

interface SquareProps {
    size?: number;
}

const Square: React.FC<SquareProps> = ({ size = 8 }) => {
    return (
        <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '4px',
                height: '100%',
                width: '100%',
            }}
        />
    );
};

export default Square;

import React from 'react';

interface SquareProps {
    backgroundColor?: string;
    size?: number;
}

const Square: React.FC<SquareProps> = ({
    backgroundColor = 'rgba(0, 0, 0, 0.3)',
    size = 8,
}) => {
    return (
        <div
            style={{
                backgroundColor,
                borderRadius: '4px',
                height: '100%',
                width: '100%',
            }}
        />
    );
};

export default Square;

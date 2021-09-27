import * as React from 'react';

interface SquareProps {
    backgroundColor?: string;
    size?: string;
}

const Square: React.FC<SquareProps> = ({ backgroundColor = 'rgba(0, 0, 0, 0.3)', size = '100%' }) => {
    return (
        <div
            style={{
                backgroundColor,
                borderRadius: '0.25rem',
                height: size,
                width: size,
            }}
        />
    );
};

export default Square;

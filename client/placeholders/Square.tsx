import React from 'react';

interface SquareProps {
    size?: number;
}

const Square: React.FC<SquareProps> = ({ size = 8 }) => {
    return (
        <div className="w-100 h-100 bg-black-30 br2" />
    );
};

export default Square;

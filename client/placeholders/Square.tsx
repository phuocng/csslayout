/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

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

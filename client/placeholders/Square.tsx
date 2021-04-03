/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

interface SquareProps {
    backgroundColor?: string;
    size?: string;
}

const Square: React.FC<SquareProps> = ({
    backgroundColor = 'rgba(0, 0, 0, 0.3)',
    size = '100%',
}) => {
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

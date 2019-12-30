/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

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

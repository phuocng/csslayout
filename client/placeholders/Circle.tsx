/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

interface CircleProps {
    backgroundColor?: string;
    size?: number;
}

const Circle: React.FC<CircleProps> = ({
    backgroundColor = 'rgba(0, 0, 0, .3)',
    size = 16,
}) => {
    return (
        <div
            style={{
                backgroundColor,
                borderRadius: '9999px',
                height: `${size}px`,
                width: `${size}px`,
            }}
        />
    );
};

export default Circle;

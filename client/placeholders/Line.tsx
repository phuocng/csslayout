/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

interface LineProps {
    backgroundColor?: string;
}

const Line: React.FC<LineProps> = ({
    backgroundColor = 'rgba(0, 0, 0, 0.3)',
}) => {
    return (
        <div
            style={{
                backgroundColor,
                height: '1px',
                width: '100%',
            }}
        />
    );
};

export default Line;

/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

interface HeadingProps {
    title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <div className='border-t border-gray-400' style={{ position: 'relative' }}>
            <h3
                className='text-2xl'
                style={{
                    backgroundColor: '#FFF',
                    fontWeight: 700,
                    left: '32px',
                    lineHeight: 1.5,
                    margin: 0,
                    padding: '0 8px',
                    position: 'absolute',
                    textTransform: 'uppercase',
                    top: 0,
                    transform: 'translate(0, -50%)',
                }}
            >
                {title}
            </h3>
        </div>
    );
};

export default Heading;

/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >
                <div
                    style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 0)',
                        backgroundSize: '100% 8px',
                        height: '100%',
                        width: '100%',
                    }}
                />
            </div>
        </Frame>
    );
};

export default Cover;

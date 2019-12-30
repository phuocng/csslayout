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
                <kbd
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '4px',
                        boxShadow: 'rgba(0, 0, 0, 0.3) 0px -2px 0px inset, rgba(0, 0, 0, 0.4) 0px 1px 1px',
                        color: 'rgba(0, 0, 0, 0.7)',
                        padding: '8px',
                    }}
                >
                    ⌘ + C
                </kbd>
            </div>
        </Frame>
    );
};

export default Cover;

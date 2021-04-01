/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
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
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '9999px',
                        height: '16px',
                        padding: '4px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                            borderRadius: '9999px',
                            height: '100%',
                            width: '40%',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

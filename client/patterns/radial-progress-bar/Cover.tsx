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
                <div style={{ position: 'relative' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            border: '8px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '9999px',
                            color: 'rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            height: '64px',
                            justifyContent: 'center',
                            width: '64px',
                        }}
                    >
                        33%
                    </div>
                    <div
                        style={{
                            clip: 'rect(0px, 64px, 64px, 32px)',
                            height: '100%',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                border: '8px solid #00449E',
                                borderRadius: '9999px',
                                clip: 'rect(0px, 32px, 64px, 0px)',
                                height: '100%',
                                position: 'absolute',
                                transform: 'rotate(120deg)',
                                width: '100%',
                            }}
                        />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

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
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        height: '32px',
                        position: 'relative',
                        width: '32px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#00449E',
                            borderRadius: '9999px',
                            height: '16px',
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            transform: 'translate(50%, -50%)',
                            width: '16px',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

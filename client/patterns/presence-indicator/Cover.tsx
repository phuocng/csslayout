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
                        borderRadius: '9999px',
                        height: '32px',
                        position: 'relative',
                        width: '32px',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#FF4136',
                            borderRadius: '9999px',
                            bottom: 0,
                            height: '8px',
                            position: 'absolute',
                            right: 0,
                            transform: 'translate(50%, 50%)',
                            width: '8px',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

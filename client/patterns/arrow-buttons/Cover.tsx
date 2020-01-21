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
                    padding: '24px',
                }}
            >
                <div style={{ height: '100%', position: 'relative', width: '100%' }}>
                    <div
                        style={{
                            backgroundColor: '#FFF',
                            borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                            borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '16px',
                            left: '50%',
                            position: 'absolute',
                            top: 0,
                            transform: 'translate(-50%, -50%) rotate(45deg)',
                            width: '16px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: '#FFF',
                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                            borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '16px',
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translate(50%, -50%) rotate(45deg)',
                            width: '16px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: '#FFF',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                            bottom: '-16px',
                            height: '16px',
                            left: '50%',
                            position: 'absolute',
                            transform: 'translate(-50%, -50%) rotate(45deg)',
                            width: '16px',
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: '#FFF',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '16px',
                            left: 0,
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-50%, -50%) rotate(45deg)',
                            width: '16px',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

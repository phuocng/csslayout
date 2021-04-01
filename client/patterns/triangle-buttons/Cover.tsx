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
                    padding: '24px',
                }}
            >
                <div style={{ height: '100%', position: 'relative', width: '100%' }}>
                    <div
                        style={{
                            borderColor: 'transparent transparent rgba(0, 0, 0, 0.3) transparent',
                            borderStyle: 'solid',
                            borderWidth: '0px 8px 8px 8px',
                            height: 0,
                            left: '50%',
                            position: 'absolute',
                            top: 0,
                            transform: 'translate(-50%, -50%)',
                            width: 0,
                        }}
                    />
                    <div
                        style={{
                            borderColor: 'transparent transparent transparent rgba(0, 0, 0, 0.3)',
                            borderStyle: 'solid',
                            borderWidth: '8px 0px 8px 8px',
                            height: 0,
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translate(50%, -50%)',
                            width: 0,
                        }}
                    />
                    <div
                        style={{
                            borderColor: 'rgba(0, 0, 0, 0.3) transparent transparent transparent',
                            borderStyle: 'solid',
                            borderWidth: '8px 8px 0px 8px',
                            bottom: '-8px',
                            height: 0,
                            left: '50%',
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                            width: 0,
                        }}
                    />
                    <div
                        style={{
                            borderColor: 'transparent rgba(0, 0, 0, 0.3) transparent transparent',
                            borderStyle: 'solid',
                            borderWidth: '8px 8px 8px 0px',
                            height: 0,
                            left: 0,
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 0,
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

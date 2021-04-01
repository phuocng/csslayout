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
                        backgroundColor: '#BBB',
                        height: '24px',
                        position: 'relative',
                        width: '48px',
                    }}
                >
                    <div
                        style={{
                            border: '12px solid #CCC',
                            borderLeftColor: 'transparent',
                            bottom: '-6px',
                            left: '-18px',
                            position: 'absolute',
                            zIndex: -1,
                        }}
                    />
                    <div
                        style={{
                            border: '6px solid transparent',
                            borderBottomWidth: 0,
                            borderRightWidth: 0,
                            borderTopColor: '#AAA',
                            left: 0,
                            position: 'absolute',
                            top: '100%',
                        }}
                    />
                    <div
                        style={{
                            border: '6px solid transparent',
                            borderBottomWidth: 0,
                            borderLeftWidth: 0,
                            borderTopColor: '#AAA',
                            position: 'absolute',
                            right: 0,
                            top: '100%',
                        }}
                    />
                    <div
                        style={{
                            border: '12px solid #CCC',
                            borderRightColor: 'transparent',
                            bottom: '-6px',
                            position: 'absolute',
                            right: '-18px',
                            zIndex: -1,
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

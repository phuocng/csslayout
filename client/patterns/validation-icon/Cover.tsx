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
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        height: '32px',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <i
                        style={{
                            position: 'absolute',
                            right: '4px',
                            top: '50%',
                            transform: 'translate(0, -50%)',
                        }}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            style={{
                                fill: 'none',
                                height: '16px',
                                stroke: "rgba(0, 0, 0, 0.5)",
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 1,
                                width: '16px',
                            }}
                        >
                            <path d={`M23.5,0.499l-16.5,23l-6.5-6.5`} />
                        </svg>
                    </i>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

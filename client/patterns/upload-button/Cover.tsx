/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';

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
                        alignItems: 'center',
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        display: 'flex',
                        padding: '8px',
                        width: '100%',
                    }}
                >
                    <div style={{ marginRight: '4px' }}>
                        <svg
                            viewBox="0 0 24 24"
                            style={{
                                fill: 'none',
                                height: '16px',
                                stroke: "rgba(0, 0, 0, 0.4)",
                                strokeLinecap: 'round',
                                strokeLinejoin: 'round',
                                strokeWidth: 1,
                                width: '16px',
                            }}
                        >
                            <path
                                d={`M18.5,7.5c0.275,0,0.341-0.159,0.146-0.354l-6.292-6.292c-0.195-0.196-0.512-0.196-0.707-0.001
                                c0,0-0.001,0.001-0.001,0.001L5.354,7.147C5.154,7.342,5.225,7.501,5.5,7.501h3v10c0,0.552,0.448,1,1,1h5c0.552,0,1-0.448,1-1V7.5
                                H18.5z
                                M23.5,18.5v4c0,0.552-0.448,1-1,1h-21c-0.552,0-1-0.448-1-1v-4`}
                            />
                        </svg>
                    </div>
                    <Rectangle />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

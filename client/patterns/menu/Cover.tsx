/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

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
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flex: 1,
                            padding: '0 8px',
                        }}
                    >
                        <Line />
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flex: 1,
                            padding: '0 8px',
                        }}
                    >
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flex: 1,
                            padding: '0 8px',
                        }}
                    >
                        <div style={{ width: '60%' }}><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Circle from '../../placeholders/Circle';
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
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '8px',
                        }}
                    >
                        <Circle size={8} />
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '8px',
                        }}
                    >
                        <Circle size={8} />
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '8px',
                        }}
                    >
                        <Circle size={8} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

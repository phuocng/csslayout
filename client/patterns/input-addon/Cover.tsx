/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
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
                        height: '24px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '0 8px',
                            width: '30%',
                        }}
                    >
                        <div style={{ width: '100%' }}><Line /></div>
                    </div>
                    <div style={{ flex: 1 }} />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

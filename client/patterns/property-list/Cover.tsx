/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Circle from '../../placeholders/Circle';
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
                <div style={{ width: '100%' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '4px 0',
                        }}
                    >
                        <div style={{ width: '60%' }}><Rectangle height={8} /></div>
                        <Circle size={12} />
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '4px 0',
                        }}
                    >
                        <div style={{ width: '20%' }}><Rectangle height={8} /></div>
                        <Circle size={12} />
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '4px 0',
                        }}
                    >
                        <div style={{ width: '40%' }}><Rectangle height={8} /></div>
                        <Circle size={12} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

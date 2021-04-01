/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Circle from '../../placeholders/Circle';
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
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ padding: '4px 8px' }}>
                        <Circle size={8} />
                    </div>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            padding: '4px 8px',
                        }}
                    >
                        <Circle size={8} />
                    </div>
                    <div style={{ padding: '4px 8px' }}>
                        <Circle size={8} />
                    </div>
                </div>
                <div
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <div style={{ flex: 1, padding: '4px' }}>
                        <div style={{ marginBottom: '4px' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                        <div style={{ marginBottom: '4px' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                    <div style={{ flex: 1, padding: '4px' }}>
                        <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                        <div style={{ marginBottom: '4px' }}><Line /></div>
                        <div style={{ width: '60%' }}><Line /></div>
                    </div>

                    <div style={{ flex: 1, padding: '4px' }}>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '40%' }}><Line /></div>
                        <div style={{ marginBottom: '4px' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

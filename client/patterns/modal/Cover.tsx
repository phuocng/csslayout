/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
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
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0 4px',
                        }}
                    >
                        <div style={{ width: '60%' }}><Rectangle height={2} /></div>
                        <div style={{ color: 'rgba(0, 0, 0, 0.7)' }}>&times;</div>
                    </div>
                    <div style={{ padding: '4px' }}>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                        <div style={{ width: '40%' }}><Line /></div>
                    </div>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            padding: '4px',
                        }}
                    >
                        <div style={{ marginRight: '8px', width: '33.3333%' }}><Rectangle height={8} /></div>
                        <div style={{ width: '33.3333%' }}><Rectangle height={8} /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

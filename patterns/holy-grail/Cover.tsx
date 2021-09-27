/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                }}
            >
                <div
                    style={{
                        borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                        flexShrink: 0,
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            padding: '8px',
                            width: '100%',
                        }}
                    >
                        <div style={{ width: '16px' }}><Line /></div>
                        <div style={{ marginLeft: 'auto', width: '16px' }}><Line /></div>
                        <div style={{ marginLeft: '4px', width: '16px' }}><Line /></div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexGrow: 1 }}>
                    <div
                        style={{
                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                            padding: '8px',
                            width: '30%',
                        }}
                    >
                        <div style={{ marginBottom: '4px' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                    <div style={{ flex: 1, padding: '8px' }}>
                        <div style={{ marginBottom: '4px' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                        <div style={{ marginBottom: '8px', width: '80%' }}><Line /></div>

                        <div style={{ marginBottom: '4px' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                    </div>
                    <div
                        style={{
                            borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                            padding: '8px',
                            width: '30%',
                        }}
                    >
                        <div style={{ marginBottom: '4px' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                </div>
                <div
                    style={{
                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                        flexShrink: 0,
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            padding: '8px',
                            width: '100%',
                        }}
                    >
                        <div style={{ width: '16px' }}><Line /></div>
                        <div style={{ marginLeft: '4px', width: '16px' }}><Line /></div>
                        <div style={{ marginLeft: '4px', width: '16px' }}><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

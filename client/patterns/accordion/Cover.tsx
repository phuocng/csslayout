/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';
import Triangle from '../../placeholders/Triangle';

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
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                padding: '8px',
                            }}
                        >
                            <div style={{ marginRight: '4px' }}>
                                <Triangle corner='r' size={6} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <Rectangle height={4} />
                            </div>
                        </div>
                    </div>
                    <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                padding: '8px',
                            }}
                        >
                            <div style={{ marginRight: '4px' }}>
                                <Triangle corner='b' size={6} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <Rectangle height={4} />
                            </div>
                        </div>
                    </div>
                    <div style={{ padding: '8px' }}>
                        <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

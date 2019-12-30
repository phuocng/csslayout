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
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                        bottom: 0,
                        display: 'flex',
                        left: 0,
                        padding: '4px',
                        position: 'absolute',
                        width: '100%',
                    }}
                >
                    <div style={{ flex: 1, marginRight: '4px' }}>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                    </div>
                    <div style={{ width: '32px' }}>
                        <Rectangle height={16} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

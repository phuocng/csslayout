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
            <div style={{ display: 'flex', height: '100%' }}>
                <div
                    style={{
                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: '4px',
                        width: '30%',
                    }}
                >
                    <div style={{ marginBottom: '4px' }}><Line /></div>
                    <div style={{ width: '80%' }}><Line /></div>
                </div>
                <div
                    style={{
                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                        borderWidth: '4px',
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        padding: '8px',
                    }}
                >
                    <div style={{ marginBottom: '8px' }}><Line /></div>
                    <div style={{ marginBottom: '8px' }}><Line /></div>
                    <div style={{ marginBottom: '8px' }}><Line /></div>
                    <div style={{ width: '80%' }}><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

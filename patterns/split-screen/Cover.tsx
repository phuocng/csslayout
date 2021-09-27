/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Circle from '../../placeholders/Circle';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div style={{ display: 'flex', height: '100%' }}>
                <div
                    style={{
                        alignItems: 'center',
                        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ marginBottom: '4px' }}><Circle /></div>
                </div>
                <div
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ padding: '8px' }}>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                        <div style={{ width: '60%' }}><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

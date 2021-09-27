/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

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
                        alignItems: 'center',
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '4px',
                        width: '100%',
                    }}
                >
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                        <div style={{ marginRight: '4px' }}><Circle size={8} /></div>
                        <div style={{ marginRight: '4px' }}><Circle size={8} /></div>
                        <div style={{ marginRight: '4px' }}><Circle size={8} /></div>
                    </div>
                    <Circle />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

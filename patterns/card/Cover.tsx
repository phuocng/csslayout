/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Rectangle from '../../placeholders/Rectangle';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '8px',
                }}
            >
                <div style={{ marginBottom: '8px', width: '100%' }}>
                    <Rectangle height={32} />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '4px', width: '100%' }}>
                        <Line />
                    </div>
                    <div style={{ marginBottom: '4px', width: '100%' }}>
                        <Line />
                    </div>
                    <div style={{ marginBottom: '4px', width: '80%' }}>
                        <Line />
                    </div>
                    <div style={{ marginBottom: '8px', width: '60%' }}>
                        <Line />
                    </div>
                    <div style={{ width: '30%' }}>
                        <Rectangle height={8} />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

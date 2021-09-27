/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

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
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '32px',
                        justifyContent: 'center',
                        width: '80%',
                    }}
                >
                    <div style={{ width: '20%' }}>
                        <Rectangle />
                    </div>
                    <div style={{ color: '#000', margin: '0 4px' }}>/</div>
                    <div style={{ width: '20%' }}>
                        <Rectangle />
                    </div>
                    <div style={{ color: '#000', margin: '0 4px' }}>/</div>
                    <div style={{ width: '20%' }}>
                        <Rectangle />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

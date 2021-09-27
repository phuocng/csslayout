/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Square from '../../placeholders/Square';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    height: '100%',
                    padding: '8px',
                    width: '100%',
                }}
            >
                <div style={{ height: '32px', marginRight: '8px', width: '32px' }}>
                    <Square />
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '16px', width: '80%' }}><Line /></div>

                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '16px', width: '80%' }}><Line /></div>

                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

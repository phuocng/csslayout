/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';
import Square from '../../placeholders/Square';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div style={{ display: 'flex', height: '100%', padding: '8px' }}>
                <div style={{ flex: 1, margin: '0 4px' }}>
                    <div style={{ height: '32px', marginBottom: '4px', width: '32px' }}>
                        <Square />
                    </div>
                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                    <div style={{ width: '60%' }}><Line /></div>
                </div>
                <div style={{ flex: 1, margin: '0 4px' }}>
                    <div style={{ height: '32px', marginBottom: '4px', width: '32px' }}>
                        <Square />
                    </div>
                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                    <div style={{ marginBottom: '8px', width: '60%' }}><Line /></div>

                    <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                    <div style={{ width: '60%' }}><Line /></div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

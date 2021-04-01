/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Circle from '../../placeholders/Circle';
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
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginRight: '4px',
                        padding: '4px',
                    }}
                >
                    <div style={{ marginBottom: '4px' }}><Circle /></div>
                    <div style={{ marginBottom: '4px', width: '100%' }}>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                    <Rectangle />
                </div>
                <div
                    style={{
                        alignItems: 'center',
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginRight: '4px',
                        padding: '4px',
                    }}
                >
                    <div style={{ marginBottom: '4px' }}><Circle /></div>
                    <div style={{ marginBottom: '4px', width: '100%' }}>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                    <Rectangle />
                </div>
                <div
                    style={{
                        alignItems: 'center',
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderRadius: '4px',
                        display: 'flex',
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '4px',
                    }}
                >
                    <div style={{ marginBottom: '4px' }}><Circle /></div>
                    <div style={{ marginBottom: '4px', width: '100%' }}>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ width: '80%' }}><Line /></div>
                    </div>
                    <Rectangle />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

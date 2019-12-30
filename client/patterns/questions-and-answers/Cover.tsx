/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

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
                <div style={{ width: '80%' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '8px',
                        }}
                    >
                        <div style={{ width: '60%' }}><Rectangle height={4} /></div>
                        <Triangle size={6} corner="b" />
                    </div>
                    <div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '4px',
                            }}
                        >
                            <div style={{ width: '40%' }}><Rectangle height={4} /></div>
                            <Triangle size={6} corner="t" />
                        </div>
                        <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                        <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                        <div style={{ width: '40%' }}><Line /></div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

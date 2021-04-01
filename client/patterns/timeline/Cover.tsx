/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

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
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            borderRight: '1px solid #aaa',
                            height: '100%',
                            left: '6px',
                            position: 'absolute',
                            top: 0,
                        }}
                    />
                    <ul
                        style={{
                            listStyleType: 'none',
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        <li style={{ marginBottom: '8px' }}>
                            <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                <Circle backgroundColor='#aaa' size={12} />
                                <div style={{ flex: 1, marginLeft: '8px' }}>
                                    <div style={{ width: '80%' }}><Rectangle /></div>
                                </div>
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <div style={{ marginBottom: '4px', width: '100%' }}><Line /></div>
                                <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                                <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                                <div style={{ width: '40%' }}><Line /></div>
                            </div>
                        </li>
                        <li>
                            <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                <Circle backgroundColor='#aaa' size={12} />
                                <div style={{ flex: 1, marginLeft: '8px' }}>
                                    <div style={{ width: '60%' }}><Rectangle /></div>
                                </div>
                            </div>
                            <div style={{ marginLeft: '20px' }}>
                                <div style={{ marginBottom: '4px', width: '80%' }}><Line /></div>
                                <div style={{ marginBottom: '4px', width: '60%' }}><Line /></div>
                                <div style={{ marginBottom: '4px', width: '40%' }}><Line /></div>
                                <div style={{ width: '80%' }}><Line /></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

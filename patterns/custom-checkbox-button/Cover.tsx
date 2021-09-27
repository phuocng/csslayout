/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Rectangle from '../../placeholders/Rectangle';
import Square from '../../placeholders/Square';

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
                        marginBottom: '8px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            display: 'flex',
                            height: '24px',
                            justifyContent: 'center',
                            marginRight: '8px',
                            padding: '4px',
                            width: '24px',
                        }}
                    >
                        <Square backgroundColor="transparent" />
                    </div>
                    <div style={{ flex: 1 }}>
                        <Rectangle />
                    </div>
                </div>
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        marginBottom: '8px',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            display: 'flex',
                            height: '24px',
                            justifyContent: 'center',
                            marginRight: '8px',
                            padding: '4px',
                            width: '24px',
                        }}
                    >
                        <Square backgroundColor="#00449E" />
                    </div>
                    <div style={{ flex: 1 }}>
                        <Rectangle />
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

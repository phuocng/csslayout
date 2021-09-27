/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';

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
                {Array(3)
                    .fill(null)
                    .map((_, i) => {
                        return (
                            <div key={i} style={{ marginLeft: '-4px' }}>
                                <div
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: '#BBB',
                                        borderRadius: '9999px',
                                        boxShadow: '0 0 0 2px #FFF',
                                        color: '#FFF',
                                        display: 'flex',
                                        fontSize: '12px',
                                        height: '24px',
                                        justifyContent: 'center',
                                        width: '24px',
                                    }}
                                >
                                    {i + 1}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </Frame>
    );
};

export default Cover;

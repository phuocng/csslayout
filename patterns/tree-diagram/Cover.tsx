/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';
import Square from '../../placeholders/Square';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '0.5rem',
                }}
            >
                <div style={{}}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '0rem 0.5rem 1rem 0.5rem',
                            position: 'relative',
                        }}
                    >
                        <div
                            style={{
                                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                height: '1rem',
                                position: 'absolute',
                                right: '50%',
                                bottom: 0,
                                width: '50%',
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: '0.25rem',
                                height: '1rem',
                                width: '1rem',
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                        }}
                    >
                        <div
                            style={{
                                padding: '1rem 0.5rem 0 0.5rem',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '1rem',
                                    position: 'absolute',
                                    right: '50%',
                                    top: 0,
                                    width: '50%',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: '0.25rem',
                                    height: '1rem',
                                    width: '1rem',
                                }}
                            />
                            <div
                                style={{
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '1rem',
                                    left: '50%',
                                    position: 'absolute',
                                    top: 0,
                                    width: '50%',
                                }}
                            />
                        </div>
                        <div
                            style={{
                                padding: '1rem 0.5rem 0 0.5rem',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '1rem',
                                    position: 'absolute',
                                    right: '50%',
                                    top: 0,
                                    width: '50%',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    borderRadius: '0.25rem',
                                    height: '1rem',
                                    width: '1rem',
                                }}
                            />
                            <div
                                style={{
                                    borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '1rem',
                                    position: 'absolute',
                                    right: '50%',
                                    top: 0,
                                    width: '50%',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

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
                    padding: '1.5rem',
                }}
            >
                <div
                    style={{
                        alignItems: 'center',
                        background: 'rgba(0, 0, 0, .3)',
                        color: '#FFF',
                        display: 'flex',
                        height: '2rem',
                        justifyContent: 'center',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            borderColor: 'transparent rgba(0, 0, 0, 0.3) transparent transparent',
                            borderStyle: 'solid',
                            borderWidth: '1rem 1rem 1rem 0rem',
                            height: 0,
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            transform: 'translate(-100%, 0)',
                            width: 0,
                        }}
                    />
                    <div
                        style={{
                            background: '#FFF',
                            borderRadius: '9999rem',
                            height: '0.5rem',
                            left: 0,
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(-0.5rem, -50%)',
                            width: '0.5rem',
                        }}
                    />
                    99.9$
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

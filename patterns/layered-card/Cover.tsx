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
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        background: '#FFF',
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        height: '3rem',
                        left: '50%',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '3rem',
                        zIndex: 2,
                    }}
                />
                <div
                    style={{
                        background: 'rgba(0, 0, 0, 0.3)',
                        height: '3rem',
                        left: '50%',
                        position: 'absolute',
                        top: '50%',
                        transform: 'translate(calc(-50% + 0.5rem), calc(-50% + 0.5rem))',
                        width: '3rem',
                    }}
                />
            </div>
        </Frame>
    );
};

export default Cover;

/** * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import Frame from '../../placeholders/Frame';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    height: '100%',
                    padding: '1rem',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, .3)',
                        height: '100%',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            background: 'var(--current-background-color, #FFF)',
                            borderRadius: '0 0 1rem 0',
                            height: '1rem',
                            left: 0,
                            position: 'absolute',
                            top: 0,
                            width: '1rem',
                        }}
                    />
                    <div
                        style={{
                            background: 'var(--current-background-color, #FFF)',
                            borderRadius: '0 0 0 1rem',
                            height: '1rem',
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            width: '1rem',
                        }}
                    />
                    <div
                        style={{
                            background: 'var(--current-background-color, #FFF)',
                            borderRadius: '0 1rem 0 0',
                            bottom: 0,
                            height: '1rem',
                            left: 0,
                            position: 'absolute',
                            width: '1rem',
                        }}
                    />
                    <div
                        style={{
                            background: 'var(--current-background-color, #FFF)',
                            borderRadius: '1rem 0 0 0',
                            bottom: 0,
                            height: '1rem',
                            position: 'absolute',
                            right: 0,
                            width: '1rem',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

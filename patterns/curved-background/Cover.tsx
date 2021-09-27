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
                    height: '100%',
                    padding: '8px',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderBottomLeftRadius: '50% 40%',
                        borderBottomRightRadius: '50% 40%',
                        height: '50%',
                        width: '100%',
                    }}
                />
            </div>
        </Frame>
    );
};

export default Cover;

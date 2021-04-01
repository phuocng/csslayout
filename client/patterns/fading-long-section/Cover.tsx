/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';

import random from '../../helpers/random';
import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

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
                    padding: '16px',
                }}
            >
                <div
                    style={{
                        height: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                        width: '100%',
                    }}
                >
                    {
                        Array(20).fill(0).map((_, index) => {
                            return (
                                <div key={index} style={{ marginBottom: '4px', width: `${random(4, 10) * 10}%` }}>
                                    <Line />
                                </div>
                            );
                        })
                    }
                    <div
                        style={{
                            background: 'linear-gradient(rgba(255, 255, 255, 0.001), #fff)',
                            bottom: 0,
                            height: '30px',
                            left: 0,
                            position: 'absolute',
                            width: '100%',
                        }}
                    />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;

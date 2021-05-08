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
                    flexWrap: 'wrap',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >   
                {
                    Array(4).fill(0).map((_, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: `rgba(0, 0, 0, 0.${index * 2 + 1})`,
                                borderRadius: '9999px',                                
                                height: '1.5rem',
                                margin: '0.5rem',
                                width: '1.5rem',
                            }}
                        />
                    ))
                }
            </div>
        </Frame>
    );
};

export default Cover;

/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

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
                <table
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.3)',
                        borderCollapse: 'collapse',
                        width: '100%',
                    }}
                >
                    <thead>
                        <tr>
                            {
                                Array(3).fill(0).map((_, index) => {
                                    return (
                                        <th
                                            key={index}
                                            style={{
                                                backgroundColor: index === 0 ? 'rgba(0, 0, 0, 0.1)' : '',
                                                padding: '6px 4px',
                                            }}
                                        >
                                            {index === 0 ? <Rectangle /> : <Line />}
                                        </th>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array(2).fill(0).map((_, row) => {
                                return (
                                    <tr key={row} style={{ borderTop: '1px solid rgba(0, 0, 0, 0.3)' }}>
                                        {
                                            Array(3).fill(0).map((__, col) => {
                                                return (
                                                    <td
                                                        key={col}
                                                        style={{
                                                            backgroundColor: col === 0 ? 'rgba(0, 0, 0, 0.1)' : '',
                                                            padding: '6px 4px',
                                                        }}
                                                    >
                                                        {col === 0 ? <Rectangle /> : <Line />}
                                                    </td>
                                                );
                                            })
                                        }
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Frame>
    );
};

export default Cover;

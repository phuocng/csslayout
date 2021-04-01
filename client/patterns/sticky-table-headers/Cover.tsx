/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
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
                    <thead style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
                        <tr>
                            {
                                Array(3).fill(0).map((_, index) => {
                                    return (
                                        <th key={index} style={{ padding: '6px 4px' }}>
                                            <Rectangle />
                                        </th>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array(3).fill(0).map((_, row) => {
                                return (
                                    <tr key={row} style={{ borderTop: '1px solid rgba(0, 0, 0, 0.3)' }}>
                                        {
                                            Array(3).fill(0).map((__, col) => {
                                                return (
                                                    <td key={col} style={{ padding: '6px 4px' }}>
                                                        <Line />
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

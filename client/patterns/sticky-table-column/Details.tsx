// tslint:disable:prefer-object-spread
import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    const numberOfColumns = 10;
    return (
        <DetailsLayout title="Sticky table column">
            <Helmet>
                <meta name="description" content="Create sticky table column with CSS" />
                <meta name="keywords" content="css position sticky, css sticky table column" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Try to scroll the main content of table horizontally to see the first column sticks to the left.
                </div>
                <BrowserFrame
                    content={(
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
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '400px',
                                    overflow: 'auto',
                                    width: '60%',
                                }}
                            >
                                <table
                                    style={{
                                        borderCollapse: 'collapse',
                                        width: '100%',
                                    }}
                                >
                                    <thead>
                                        <tr>
                                            {
                                                Array(numberOfColumns).fill(0).map((_, index) => {
                                                    return (
                                                        <th
                                                            key={index}
                                                            style={
                                                                Object.assign({}, {
                                                                    padding: '16px',
                                                                }, index === 0 ? {
                                                                    backgroundColor: '#ddd',
                                                                    left: 0,
                                                                    position: 'sticky',
                                                                } : {},
                                                            )}
                                                        >
                                                            <div style={{ width: '200px' }}>
                                                                {
                                                                    index === 0
                                                                        ? <Rectangle />
                                                                        : <Block numberOfBlocks={3} />
                                                                }
                                                            </div>
                                                        </th>
                                                    );
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Array(10).fill(0).map((_, row) => {
                                                return (
                                                    <tr key={row} style={{ borderTop: '1px solid rgba(0, 0, 0, 0.3)' }}>
                                                        {
                                                            Array(numberOfColumns).fill(0).map((__, col) => {
                                                                return (
                                                                    <td
                                                                        key={col}
                                                                        style={
                                                                            Object.assign({}, {
                                                                                padding: '16px',
                                                                            }, col === 0 ? {
                                                                                backgroundColor: '#ddd',
                                                                                left: 0,
                                                                                position: 'sticky',
                                                                            } : {},
                                                                        )}
                                                                    >
                                                                        {
                                                                            col === 0
                                                                                ? <Rectangle />
                                                                                : <Block numberOfBlocks={3} />
                                                                        }
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
                        </div>
                    )}
                    source={`
<table>
    <thead>
        <tr>
            <th style="
                /* Background color */
                background-color: #ddd;

                /* Stick to the left */
                left: 0;
                position: sticky;

                /* Displayed on top of other rows when scrolling */
                z-index: 9999;
            ">
                ...
            </th>

            <!-- Repeat other header column ... -->
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.StickyHeader, Pattern.StickySections, Pattern.StickyTableHeaders]} />
        </DetailsLayout>
    );
};

export default Details;

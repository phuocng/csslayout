/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.StickyTableHeaders}>
            <Helmet>
                <meta name="description" content="Create sticky table headers with CSS" />
                <meta name="keywords" content="css position sticky, css sticky table headers" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Try to scroll the main content of table to see the header sticks to the top.
                </div>
                <BrowserFrame
html={`
<table>
    <thead>
        <tr>
            <th style="
                /* Background color */
                background-color: #ddd;

                /* Stick to the top */
                position: sticky;
                top: 0;

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
css={``}
                >
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
                                            Array(3).fill(0).map((_, index) => {
                                                return (
                                                    <th
                                                        key={index}
                                                        style={{
                                                            backgroundColor: '#ddd',
                                                            padding: '16px',
                                                            position: 'sticky',
                                                            top: 0,
                                                            zIndex: 9999,
                                                        }}
                                                    >
                                                        <Rectangle />
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
                                                        Array(3).fill(0).map((__, col) => {
                                                            return (
                                                                <td key={col} style={{ padding: '16px' }}>
                                                                    <Block numberOfBlocks={3} />
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
                </BrowserFrame>
            </div>

            <RelatedPatterns
                patterns={[
                    Pattern.StickyHeader, Pattern.StickySections, Pattern.StickyTableColumn,
                ]}
            />
        </DetailsLayout>
    );
};

export default Details;

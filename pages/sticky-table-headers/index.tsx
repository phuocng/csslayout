import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.StickyTableHeaders}>
            <Head>
                <meta name="description" content="Create sticky table headers with CSS" />
                <meta name="og:description" content="Create sticky table headers with CSS" />
                <meta name="twitter:description" content="Create sticky table headers with CSS" />
                <meta name="keywords" content="css position sticky, css sticky table headers" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                Try to scroll the main content of table to see the header sticks to the top.
            </div>
            <BrowserFrame
                html={`
<table>
    <thead>
        <tr>
            <th class="header">
                ...
            </th>

            <!-- Repeat other header column ... -->
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
`}
                css={`
                    .header {
                        /* Background color */
                        background-color: #ddd;

                        /* Stick to the top */
                        position: sticky;
                        top: 0;

                        /* Displayed on top of other rows when scrolling */
                        z-index: 9999;
                    }
                `}
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
                                    {Array(3)
                                        .fill(0)
                                        .map((_, index) => {
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
                                        })}
                                </tr>
                            </thead>
                            <tbody>
                                {Array(10)
                                    .fill(0)
                                    .map((_, row) => {
                                        return (
                                            <tr key={row} style={{ borderTop: '1px solid rgba(0, 0, 0, 0.3)' }}>
                                                {Array(3)
                                                    .fill(0)
                                                    .map((__, col) => {
                                                        return (
                                                            <td key={col} style={{ padding: '16px' }}>
                                                                <Block numberOfBlocks={3} />
                                                            </td>
                                                        );
                                                    })}
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />

            <RelatedPatterns patterns={[Pattern.StickyHeader, Pattern.StickySections, Pattern.StickyTableColumn]} />
        </PatternLayout>
    );
};

export default Details;

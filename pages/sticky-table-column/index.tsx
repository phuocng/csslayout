// tslint:disable:prefer-object-spread
import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'header';
    const numberOfColumns = 10;
    return (
        <PatternLayout pattern={Pattern.StickyTableColumn}>
            <Head>
                <meta name="description" content="Create sticky table column with CSS" />
                <meta name="og:description" content="Create sticky table column with CSS" />
                <meta name="twitter:description" content="Create sticky table column with CSS" />
                <meta name="keywords" content="css position sticky, css sticky table column" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                Try to scroll the main content of table horizontally to see the first column sticks to the left.
            </div>
            <BrowserFrame
                html={
                    '' +
                    `
<table>
    <thead>
        <tr>
            <th class="${prefix}${container}">
                ...
            </th>

            <!-- Repeat other header column ... -->
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Background color */
    background-color: #ddd;

    /* Stick to the left */
    left: 0;
    position: sticky;

    /* Displayed on top of other rows when scrolling */
    z-index: 9999;
}
`
                }
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
                                    {Array(numberOfColumns)
                                        .fill(0)
                                        .map((_, index) => {
                                            return (
                                                <th
                                                    key={index}
                                                    style={
                                                        index === 0
                                                            ? {
                                                                  backgroundColor: '#ddd',
                                                                  left: 0,
                                                                  padding: '16px',
                                                                  position: 'sticky',
                                                              }
                                                            : {
                                                                  padding: '16px',
                                                              }
                                                    }
                                                >
                                                    <div style={{ width: '200px' }}>
                                                        {index === 0 ? <Rectangle /> : <Block numberOfBlocks={3} />}
                                                    </div>
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
                                                {Array(numberOfColumns)
                                                    .fill(0)
                                                    .map((__, col) => {
                                                        return (
                                                            <td
                                                                key={col}
                                                                style={
                                                                    col === 0
                                                                        ? {
                                                                              backgroundColor: '#ddd',
                                                                              left: 0,
                                                                              padding: '16px',
                                                                              position: 'sticky',
                                                                          }
                                                                        : {
                                                                              padding: '16px',
                                                                          }
                                                                }
                                                            >
                                                                {col === 0 ? (
                                                                    <Rectangle />
                                                                ) : (
                                                                    <Block numberOfBlocks={3} />
                                                                )}
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
            <RelatedPatterns patterns={[Pattern.StickyHeader, Pattern.StickySections, Pattern.StickyTableHeaders]} />
        </PatternLayout>
    );
};

export default Details;

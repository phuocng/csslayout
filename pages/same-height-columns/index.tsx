import * as React from 'react';
import Head from 'next/head';

import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.SameHeightColumns}>
            <Head>
                <meta name="description" content="Create same height columns with CSS flexbox" />
                <meta name="og:description" content="Create same height columns with CSS flexbox" />
                <meta name="twitter:description" content="Create same height columns with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css layout, css same height columns" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Column -->
    <div class="container__column">
        <!-- Cover -->
        ...

        <!-- Content -->
        <div class="container__content">
            ...
        </div>

        <!-- Button sticks to the bottom -->
        ...
    </div>

    <!-- Repeat with other columns -->
    ...
</div>
`}
                css={removeIndent`
                    .container {
                        display: flex;
                    }

                    .container__column {
                        flex: 1;
                        /* Space between columns */
                        margin: 0 8px;

                        /* Layout each column */
                        display: flex;
                        flex-direction: column;
                    }

                    .container__content {
                        /* Take available height */
                        flex: 1;
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
                    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px',
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'column',
                                margin: '0 8px',
                            }}
                        >
                            <Rectangle height={200} />
                            <div style={{ flex: 1, padding: '16px' }}>
                                <Block numberOfBlocks={10} />
                            </div>
                            <div style={{ padding: '16px', width: '128px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px',
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'column',
                                margin: '0 8px',
                            }}
                        >
                            <Rectangle height={200} />
                            <div style={{ flex: 1, padding: '16px' }}>
                                <div style={{ marginBottom: '16px' }}>
                                    <Block numberOfBlocks={15} />
                                </div>
                                <Block numberOfBlocks={5} />
                            </div>
                            <div style={{ padding: '16px', width: '128px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.2)',
                                borderRadius: '4px',
                                display: 'flex',
                                flex: 1,
                                flexDirection: 'column',
                                margin: '0 8px',
                            }}
                        >
                            <Rectangle height={200} />
                            <div style={{ flex: 1, padding: '16px' }}>
                                <div style={{ marginBottom: '16px' }}>
                                    <Block numberOfBlocks={5} />
                                </div>
                                <Block numberOfBlocks={10} />
                            </div>
                            <div style={{ padding: '16px', width: '128px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

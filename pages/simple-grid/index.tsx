import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.SimpleGrid}>
            <Head>
                <meta name="description" content="Create a simple grid with CSS flexbox" />
                <meta name="og:description" content="Create a simple grid with CSS flexbox" />
                <meta name="twitter:description" content="Create a simple grid with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css flexbox grid, css grid, css layout" />
            </Head>
            <BrowserFrame
                html={`
<!-- Row -->
<div class="row">
    <!--Cell with given width. Replace 25% with whatever you want -->
    <div class="row__cell row__cell--1/4">25%</div>

    <!-- Cell that takes remaining width -->
    <div class="row__cell row__cell--fill">
        ...
    </div>
</div>
`}
                css={removeIndent`
                    .row {
                        display: flex;

                        margin-left: -8px;
                        margin-right: -8px;
                    }

                    .row__cell {
                        padding-left: 8px;
                        padding-right: 8px;
                    }

                    /* Cell with given width. Replace 25% with whatever you want */
                    .row__cell--1/4 {
                        flex: 0 0 25%;
                    }

                    .row__cell--fill {
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
                    <div style={{ width: '60%' }}>
                        <div style={{ display: 'flex', margin: '0 -8px 8px -8px' }}>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 -8px 32px -8px' }}>
                            <div style={{ flex: '0 0 50%', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 -8px 8px -8px' }}>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 -8px 32px -8px' }}>
                            <div style={{ flex: '0 0 33.3333%', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 -8px 8px -8px' }}>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>

                        <div style={{ display: 'flex', margin: '0 -8px 0 -8px' }}>
                            <div style={{ flex: '0 0 25%', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '1', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                            <div style={{ flex: '0 0 33.3333%', padding: '0 8px' }}>
                                <Rectangle height={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.CardLayout, Pattern.MasonryGrid]} />
        </PatternLayout>
    );
};

export default Details;

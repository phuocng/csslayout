import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'row';
    return (
        <PatternLayout pattern={Pattern.SimpleGrid}>
            <Head>
                <meta name="description" content="Create a simple grid with CSS flexbox" />
                <meta name="og:description" content="Create a simple grid with CSS flexbox" />
                <meta name="twitter:description" content="Create a simple grid with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css flexbox grid, css grid, css layout" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<!-- Row -->
<div class="${prefix}${container}">
    <!--Cell with given width. Replace 25% with whatever you want -->
    <div class="${prefix}${container}__cell ${prefix}${container}__cell--1/4">25%</div>

    <!-- Cell that takes remaining width -->
    <div class="${prefix}${container}__cell ${prefix}${container}__cell--fill">
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    display: flex;

    margin-left: -8px;
    margin-right: -8px;
}

.${prefix}${container}__cell {
    padding-left: 8px;
    padding-right: 8px;
}

/* Cell with given width. Replace 25% with whatever you want */
.${prefix}${container}__cell--1/4 {
    flex: 0 0 25%;
}

.${prefix}${container}__cell--fill {
    flex: 1;
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

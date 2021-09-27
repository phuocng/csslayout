import * as React from 'react';
import Head from 'next/head';
import { Heading, Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.DotLeader}>
            <Head>
                <meta name="description" content="Create dot leaders with CSS flexbox" />
                <meta name="og:description" content="Create dot leaders with CSS flexbox" />
                <meta name="twitter:description" content="Create dot leaders with CSS flexbox" />
                <meta name="keywords" content="css dot leader, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- Left side -->
    <div>...</div>

    <!-- Dots -->
    <div class="container__dots"></div>

    <!-- Right side -->
    <div>...</div>
</div>
`}
                css={`
                    .container {
                        /* Center the content */
                        align-items: center;
                        display: flex;
                        justify-content: center;
                    }

                    .container__dots {
                        /* Bottom border */
                        border-bottom: 1px dotted rgba(0, 0, 0, 0.3);

                        /* Take remaining width */
                        flex: 1;

                        /* Spacing */
                        margin: 0px 4px;
                    }
                `}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ width: '400px' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div style={{ width: '60%' }}>
                                <Rectangle />
                            </div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <Circle />
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div style={{ width: '40%' }}>
                                <Rectangle />
                            </div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <Circle />
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                width: '100%',
                            }}
                        >
                            <div style={{ width: '30%' }}>
                                <Rectangle />
                            </div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <Circle />
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <section>
                <Heading level={2}>Use cases</Heading>

                <div style={{ padding: '32px' }}>
                    <div style={{ marginBottom: '16px', width: '60%' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div>Chapter 1</div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <div>5</div>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div>Chapter 2</div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <div>40</div>
                        </div>
                    </div>
                    <div style={{ width: '300px' }}>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div>Egg</div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <div>3$</div>
                        </div>
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '8px',
                                width: '100%',
                            }}
                        >
                            <div>Coffee</div>
                            <div style={{ borderBottom: '1px dotted rgba(0, 0, 0, 0.3)', flex: 1, margin: '0 4px' }} />
                            <div>5$</div>
                        </div>
                    </div>
                </div>
            </section>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.Menu, Pattern.PropertyList, Pattern.SplitNavigation]} />
        </PatternLayout>
    );
};

export default Details;

import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Heading, Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.CornerRibbon}>
            <Head>
                <meta name="description" content="Create a corner ribbon with CSS flexbox" />
                <meta name="og:description" content="Create a corner ribbon with CSS flexbox" />
                <meta name="twitter:description" content="Create a corner ribbon with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css ribbon" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- The container -->
    <div class="container__wrapper">
        <!-- The ribbon -->
        <div class="container__ribbon">
            ...
        </div>
    </div>
</div>
`}
                css={`
                    .container {
                        position: relative;
                    }

                    .container__wrapper {
                        /* Displayed at the top left corner */
                        left: 0px;
                        position: absolute;
                        top: 0px;

                        /* Size */
                        height: 100px;
                        width: 100px;

                        /* Hide the part of its children which is displayed outside */
                        overflow: hidden;
                    }

                    .container__ribbon {
                        /* Position */
                        left: -64px;
                        position: absolute;
                        top: 32px;

                        /* Size */
                        height: 24px;
                        width: 206px;

                        /* Displayed diagonally */
                        transform: rotate(-45deg);

                        /* Background color */
                        background-color: rgba(0, 0, 0, 0.3);

                        /* Centerize the text content */
                        text-align: center;
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
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            height: '256px',
                            position: 'relative',
                            width: '256px',
                        }}
                    >
                        <div
                            style={{
                                height: '100px',
                                left: 0,
                                overflow: 'hidden',
                                position: 'absolute',
                                top: 0,
                                width: '100px',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                    height: '24px',
                                    left: '-64px',
                                    position: 'absolute',
                                    textAlign: 'center',
                                    top: '32px',
                                    transform: 'rotate(-45deg)',
                                    width: '206px',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <section>
                <Heading level={2}>Use cases</Heading>

                <div style={{ padding: '2rem' }}>
                    <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                        You can add a ribbon to a{' '}
                        <Link href="/pricing-table">
                            <a>pricing table</a>
                        </Link>{' '}
                        to indicate the most popular option.
                    </div>

                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '60%',
                        }}
                    >
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                flex: 1,
                                height: '200px',
                                margin: '0 8px',
                            }}
                        />
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                flex: 1,
                                height: '300px',
                                margin: '0 8px',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    height: '100px',
                                    left: 0,
                                    overflow: 'hidden',
                                    position: 'absolute',
                                    top: 0,
                                    width: '100px',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#00449E',
                                        color: '#FFF',
                                        fontWeight: 'bold',
                                        left: '-64px',
                                        padding: '2px 0',
                                        position: 'absolute',
                                        textAlign: 'center',
                                        top: '32px',
                                        transform: 'rotate(-45deg)',
                                        width: '210px',
                                    }}
                                >
                                    Popular
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '4px',
                                flex: 1,
                                height: '250px',
                                margin: '0 8px',
                            }}
                        />
                    </div>
                </div>
            </section>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.FixedAtCorner, Pattern.Ribbon]} />
        </PatternLayout>
    );
};

export default Details;

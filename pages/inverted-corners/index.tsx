import * as React from 'react';
import Head from 'next/head';
import { Heading, Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.InvertedCorners}>
            <Head>
                <meta name="description" content="Create inverted corners with CSS" />
                <meta name="og:description" content="Create inverted corners with CSS" />
                <meta name="twitter:description" content="Create inverted corners with CSS" />
                <meta name="keywords" content="css border radius, css inverted border radius, css inverted corners" />
            </Head>
            <BrowserFrame
                html={`
<div class="inverted-corners">
    ...
</div>
`}
                css={`
                    :root {
                        --inverted-corners-background: #52525b;
                        --inverted-corners-size: 2rem;
                    }

                    .inverted-corners {
                        background-color: var(--inverted-corners-background);

                        /* Used to position the corner */
                        position: relative;
                    }

                    .inverted-corners::before {
                        content: '';

                        /* Absolute position */
                        bottom: calc(-2 * var(--inverted-corners-size));
                        left: 0;
                        position: absolute;

                        /* Size */
                        height: calc(2 * var(--inverted-corners-size));
                        width: var(--inverted-corners-size);

                        /* Border */
                        background-color: transparent;
                        border-top-left-radius: var(--inverted-corners-size);
                        box-shadow: var(--inverted-corners-background) 0px calc(-1 * var(--inverted-corners-size)) 0px
                            0px;
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
                        padding: '1rem',
                    }}
                >
                    <div
                        style={{
                            height: '8rem',
                            width: '16rem',
                        }}
                    >
                        <div className="inverted-corners"></div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <section>
                <Heading level={2}>Use cases</Heading>

                <div
                    style={{
                        height: '8rem',
                        width: '16rem',
                    }}
                >
                    <div className="inverted-corners inverted-corners--speech">Speech Bubble</div>
                </div>
            </section>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.ConcaveCorners]} />
        </PatternLayout>
    );
};

export default Details;

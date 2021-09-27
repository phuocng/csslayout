import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.ThreeDimensionsCard}>
            <Head>
                <meta name="description" content="Create a 3D card with CSS" />
                <meta name="og:description" content="Create a 3D card with CSS" />
                <meta name="twitter:description" content="Create a 3D card with CSS" />
                <meta name="keywords" content="css 3D card" />
            </Head>
            <BrowserFrame
                html={`
<div class="three-dimensions-card">
    ...
</div>
`}
                css={`
                    :root {
                        --three-dimensions-card-left-side-width: 1rem;
                    }

                    .three-dimensions-card {
                        position: relative;
                    }

                    /* The left side */
                    .three-dimensions-card::before {
                        background: rgba(0, 0, 0, 0.3);
                        content: '';

                        /* Position */
                        top: var(--three-dimensions-card-left-side-width);
                        left: 0px;
                        position: absolute;
                        transform: translate(-100%, 0) skewY(-45deg);
                        transform-origin: left top;

                        /* Size */
                        height: 100%;
                        width: var(--three-dimensions-card-left-side-width);
                    }

                    /* The bottom side */
                    .three-dimensions-card::after {
                        background: rgba(0, 0, 0, 0.3);
                        content: '';

                        /* Position */
                        bottom: 0px;
                        left: 0px;
                        position: absolute;
                        transform: translate(0, 100%) skewX(-45deg);
                        transform-origin: left top;

                        /* Size */
                        height: var(--three-dimensions-card-left-side-width);
                        width: 100%;
                    }
                `}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        padding: '8px',
                    }}
                >
                    <div className="three-dimensions-card">
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                height: '8rem',
                                width: '16rem',
                            }}
                        />
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.Card, Pattern.LayeredCard, Pattern.StackedCards]} />
        </PatternLayout>
    );
};

export default Details;

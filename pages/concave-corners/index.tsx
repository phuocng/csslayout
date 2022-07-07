import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.ConcaveCorners}>
            <Head>
                <meta name="description" content="Create concave corners with CSS" />
                <meta name="og:description" content="Create concave corners with CSS" />
                <meta name="twitter:description" content="Create concave corners with CSS" />
                <meta name="keywords" content="css border radius, css concave border radius, css concave corners" />
            </Head>
            <BrowserFrame
                html={`
<div class="concave-corners">
    <!-- The top-left corner -->
    <div class="concave-corners__corner concave-corners__corner--tl"></div>

    <!-- The top-right corner -->
    <div class="concave-corners__corner concave-corners__corner--tr"></div>

    <!-- The bottom-left corner -->
    <div class="concave-corners__corner concave-corners__corner--bl"></div>

    <!-- The bottom-right corner -->
    <div class="concave-corners__corner concave-corners__corner--br"></div>

    <!-- Content -->
    ...
</div>
`}
                css={removeIndent`
                    :root {
                        --concave-corners-background: rgba(0, 0, 0, 0.3);
                        --concave-corners-size: 1rem;
                    }

                    .concave-corners {
                        background-color: var(--concave-corners-background);

                        /* Used to position the corners */
                        position: relative;

                        /* Misc */
                        height: 100%;
                    }

                    .concave-corners__corner {
                        /* Absolute position */
                        position: absolute;

                        /* Size */
                        height: var(--concave-corners-size);
                        width: var(--concave-corners-size);

                        background: #fff;
                    }

                    .concave-corners__corner--tl {
                        /* Position */
                        left: 0;
                        top: 0;

                        /* Border radius */
                        border-radius: 0 0 var(--concave-corners-size) 0;
                    }

                    .concave-corners__corner--tr {
                        /* Position */
                        right: 0;
                        top: 0;

                        /* Border radius */
                        border-radius: 0 0 0 var(--concave-corners-size);
                    }

                    .concave-corners__corner--bl {
                        /* Position */
                        bottom: 0;
                        left: 0;

                        /* Border radius */
                        border-radius: 0 var(--concave-corners-size) 0 0;
                    }

                    .concave-corners__corner--br {
                        /* Position */
                        bottom: 0;
                        right: 0;

                        /* Border radius */
                        border-radius: var(--concave-corners-size) 0 0 0;
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
                        <div className="concave-corners">
                            <div className="concave-corners__corner concave-corners__corner--tl" />
                            <div className="concave-corners__corner concave-corners__corner--tr" />
                            <div className="concave-corners__corner concave-corners__corner--bl" />
                            <div className="concave-corners__corner concave-corners__corner--br" />
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.InvertedCorners]} />
        </PatternLayout>
    );
};

export default Details;

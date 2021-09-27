import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.DiagonalSection}>
            <Head>
                <meta name="description" content="Create a diagonal section with CSS" />
                <meta name="og:description" content="Create a diagonal section with CSS" />
                <meta name="twitter:description" content="Create a diagonal section with CSS" />
                <meta name="keywords" content="css diagonal section, css transform skew" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    <!-- The diagonal area -->
    <div class="container__diagonal"></div>

    <!-- Content -->
    ...
</div>
`}
                css={`
                    .container {
                        /* Used to position the diagonal area */
                        position: relative;
                    }

                    .container__diagonal {
                        /* Absolute position */
                        left: 0px;
                        position: absolute;
                        top: 0px;

                        /* Take full size */
                        height: 100%;
                        width: 100%;

                        /* Create diagonal sides */
                        transform: skewY(-5deg);

                        /* Background color */
                        background-color: rgba(0, 0, 0, 0.3);

                        /* Displayed under the main content */
                        z-index: -1;
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
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '200px',
                            justifyContent: 'center',
                            position: 'relative',
                            width: '75%',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                height: '100%',
                                left: 0,
                                position: 'absolute',
                                top: 0,
                                transform: 'skewY(-5deg)',
                                width: '100%',
                                zIndex: -1,
                            }}
                        />
                        <div style={{ width: '60%' }}>
                            <Block backgroundColor="#fff" justify="center" numberOfBlocks={5} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.CurvedBackground]} />
        </PatternLayout>
    );
};

export default Details;

import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.CookieBanner}>
            <Head>
                <meta name="description" content="Create a cookie banner with CSS flexbox" />
                <meta name="og:description" content="Create a cookie banner with CSS flexbox" />
                <meta name="twitter:description" content="Create a cookie banner with CSS flexbox" />
                <meta name="keywords" content="css cookie banner, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<div class="banner">
    <!-- Tells visitors that the website uses cookie -->
    <div class="banner__content">
        ...
    </div>

    <!-- Close button -->
    ...
</div>
`}
                css={`
                    .banner {
                        /* Banner is displayed at the bottom */
                        bottom: 0;
                        left: 0;
                        position: fixed;
                        width: 100%;

                        /* Center the content */
                        align-items: center;
                        display: flex;
                        justify-content: center;
                    }

                    .banner__content {
                        /* Take available width */
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
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.05)',
                            borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                            bottom: 0,
                            display: 'flex',
                            left: 0,
                            padding: '8px',
                            position: 'absolute',
                            width: '100%',
                        }}
                    >
                        <div style={{ flex: 1, marginRight: '12px' }}>
                            <Block numberOfBlocks={5} />
                        </div>
                        <div style={{ width: '96px' }}>
                            <Rectangle height={32} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.FixedAtCorner]} />
        </PatternLayout>
    );
};

export default Details;

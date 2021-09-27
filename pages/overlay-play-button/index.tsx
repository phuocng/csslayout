/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import Head from 'next/head';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { DetailsLayout } from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Triangle from '../../placeholders/Triangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.OverlayPlayButton}>
            <Head>
                <meta name="description" content="Create an overlay play button with CSS flexbox" />
                <meta name="og:description" content="Create an overlay play button with CSS flexbox" />
                <meta name="twitter:description" content="Create an overlay play button with CSS flexbox" />
                <meta name="keywords" content="css flexbox" />
            </Head>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- The video element -->
    <video src="..." />

    <!-- The overlay area -->
    <div class="container__overlay">
        <!-- The player button -->
        ...
    </div>
</div>
`}
css={`
.container {
    /* Used to position the overlay */
    position: relative;
}

.container__overlay {
    /* Position */
    left: 0;
    position: absolute;
    top: 0;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Add a dark background */
    background-color: rgba(0, 0, 0, 0.25);
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
                        <div
                            style={{
                                height: '100%',
                                position: 'relative',
                                width: '100%',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                                    display: 'flex',
                                    height: '100%',
                                    justifyContent: 'center',
                                    left: 0,
                                    position: 'absolute',
                                    top: 0,
                                    width: '100%',
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: 'center',
                                        border: '4px solid #FFF',
                                        borderRadius: '9999px',
                                        display: 'flex',
                                        height: '64px',
                                        justifyContent: 'center',
                                        width: '64px',
                                    }}
                                >
                                    <Triangle backgroundColor='#FFF' corner='r' size={8} />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
            <RelatedPatterns patterns={[Pattern.VideoBackground]} />
        </DetailsLayout>
    );
};

export default Details;

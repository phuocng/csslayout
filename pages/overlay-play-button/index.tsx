import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Triangle from '../../placeholders/Triangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.OverlayPlayButton}>
            <Head>
                <meta name="description" content="Create an overlay play button with CSS flexbox" />
                <meta name="og:description" content="Create an overlay play button with CSS flexbox" />
                <meta name="twitter:description" content="Create an overlay play button with CSS flexbox" />
                <meta name="keywords" content="css flexbox" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- The video element -->
    <video src="..." />

    <!-- The overlay area -->
    <div class="${prefix}${container}__overlay">
        <!-- The player button -->
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Used to position the overlay */
    position: relative;
}

.${prefix}${container}__overlay {
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
                                <Triangle backgroundColor="#FFF" corner="r" size={8} />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.VideoBackground]} />
        </PatternLayout>
    );
};

export default Details;

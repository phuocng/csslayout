import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.VideoBackground}>
            <Head>
                <meta name="description" content="Add video background with CSS flexbox" />
                <meta name="og:description" content="Add video background with CSS flexbox" />
                <meta name="twitter:description" content="Add video background with CSS flexbox" />
                <meta name="keywords" content="css flexbox, object fit cover" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                In this pattern, the video is displayed in the background.
            </div>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- The video container -->
    <div class="${prefix}${container}__wrapper">
        <video class="${prefix}${container}__video" src="...">
            ...
        </video>
    </div>

    <!-- The content -->
    <div class="${prefix}${container}__content">
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Used to position the video and content */
    position: relative;
}

.${prefix}${container}__wrapper {
    /* Positioned at the top left corner */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* Hide the scrollbar */
    overflow: hidden;
}

.${prefix}${container}__video {
    object-fit: cover;

    /* Center the video */
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);

    /* Take full width */
    width: 100%;
}

.${prefix}${container}__content {
    /* Positioned at the top left corner */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
                                height: '100%',
                                left: 0,
                                overflow: 'hidden',
                                position: 'absolute',
                                top: 0,
                                width: '100%',
                            }}
                        >
                            <video
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                }}
                                autoPlay={true}
                                loop={true}
                                muted={true}
                                playsInline={true}
                                src="/assets/video-background-demo.mp4"
                            />
                        </div>

                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'center',
                                left: 0,
                                position: 'absolute',
                                top: 0,
                                width: '100%',
                            }}
                        >
                            <div style={{ width: '250px' }}>
                                <Block backgroundColor="#fff" justify="center" numberOfBlocks={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.FullBackground, Pattern.OverlayPlayButton]} />
        </PatternLayout>
    );
};

export default Details;

/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.VideoBackground}>
            <Helmet>
                <meta name="description" content="Add video background with CSS flexbox" />
                <meta name="keywords" content="css flexbox, object fit cover" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    In this pattern, the video is displayed in the background.
                </div>
                <BrowserFrame
                    content={(
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
                                        <Block backgroundColor='#fff' justify='center' numberOfBlocks={10} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Used to position the video and content */
    position: relative;
">
    <!-- The video container -->
    <div style="
        /* Positioned at the top left corner */
        left: 0px;
        position: absolute;
        top: 0px;

        /* Take full size */
        height: 100%;
        width: 100%;

        /* Hide the scrollbar */
        overflow: hidden;
    ">
        <video
            style="
                object-fit: cover;

                /* Center the video */
                left: 50%;
                position: absolute;
                top: 50%;
                transform: translate(-50%, -50%);

                /* Take full width */
                width: 100%;
            "
            src="..."
        >
    </div>

    <!-- The content -->
    <div style="
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
    ">
        ...
    </div>
</div>
`}
                />
            </div>
            <RelatedPatterns patterns={[Pattern.FullBackground, Pattern.OverlayPlayButton]} />
        </DetailsLayout>
    );
};

export default Details;

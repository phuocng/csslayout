import * as React from 'react';
import Head from 'next/head';
import { Pattern } from '../../constants/Pattern';

import { PrefixContext } from '../../context/prefixContext';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.FadingLongSection}>
            <Head>
                <meta name="description" content="Fading long section to indicate there is more content" />
                <meta name="og:description" content="Fading long section to indicate there is more content" />
                <meta name="twitter:description" content="Fading long section to indicate there is more content" />
                <meta name="keywords" content="css fading overflow, css linear gradient" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                Fading a long section to indicate there is more content.
            </div>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Main content -->
    <div class="${prefix}${container}__content">
        ...
    </div>

    <!-- The faded element -->
    <div class="${prefix}${container}__fading"></div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Used to position the faded element */
    position: relative;
}

.${prefix}${container}__content {
    /* Height */
    height: 200px;

    /* Scrollable */
    overflow-y: scroll;
}

.${prefix}${container}__fading {
    /* Displayed at the bottom */
    bottom: 0;
    left: 0;
    position: absolute;

    /* Size */
    height: 30px;
    width: 100%;

    /* Gradient background */
    background: linear-gradient(rgba(255, 255, 255, 0.01), #fff);
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
                    <div style={{ position: 'relative', width: '200px' }}>
                        <div
                            style={{
                                height: '200px',
                                overflowY: 'scroll',
                            }}
                        >
                            <Block numberOfBlocks={50} />
                        </div>

                        <div
                            style={{
                                background: 'linear-gradient(rgba(255, 255, 255, 0.01), #fff)',
                                bottom: 0,
                                height: '30px',
                                left: 0,
                                position: 'absolute',
                                width: '100%',
                            }}
                        />
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

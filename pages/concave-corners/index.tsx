import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'concave-corners';
    return (
        <PatternLayout pattern={Pattern.ConcaveCorners}>
            <Head>
                <meta name="description" content="Create concave corners with CSS" />
                <meta name="og:description" content="Create concave corners with CSS" />
                <meta name="twitter:description" content="Create concave corners with CSS" />
                <meta name="keywords" content="css border radius, css concave border radius, css concave corners" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- The top-left corner -->
    <div class="${prefix}${container}__corner ${prefix}${container}__corner--tl"></div>

    <!-- The top-right corner -->
    <div class="${prefix}${container}__corner ${prefix}${container}__corner--tr"></div>

    <!-- The bottom-left corner -->
    <div class="${prefix}${container}__corner ${prefix}${container}__corner--bl"></div>

    <!-- The bottom-right corner -->
    <div class="${prefix}${container}__corner ${prefix}${container}__corner--br"></div>

    <!-- Content -->
    ...
</div>
`
                }
                css={
                    '' +
`
:root {
    --${prefix}${container}-background: rgba(0, 0, 0, 0.3);
    --${prefix}${container}-size: 1rem;
}

.${prefix}${container} {
    background-color: var(--${prefix}${container}-background);

    /* Used to position the corners */
    position: relative;

    /* Misc */
    height: 100%;
}

.${prefix}${container}__corner {
    /* Absolute position */
    position: absolute;

    /* Size */
    height: var(--${prefix}${container}-size);
    width: var(--${prefix}${container}-size);

    background: #fff;
}

.${prefix}${container}__corner--tl {
    /* Position */
    left: 0;
    top: 0;

    /* Border radius */
    border-radius: 0 0 var(--${prefix}${container}-size) 0;
}

.${prefix}${container}__corner--tr {
    /* Position */
    right: 0;
    top: 0;

    /* Border radius */
    border-radius: 0 0 0 var(--${prefix}${container}-size);
}

.${prefix}${container}__corner--bl {
    /* Position */
    bottom: 0;
    left: 0;

    /* Border radius */
    border-radius: 0 var(--${prefix}${container}-size) 0 0;
}

.${prefix}${container}__corner--br {
    /* Position */
    bottom: 0;
    right: 0;

    /* Border radius */
    border-radius: var(--${prefix}${container}-size) 0 0 0;
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
                            <div className="${prefix}${container}__corner ${prefix}${container}__corner--tl" />
                            <div className="${prefix}${container}__corner ${prefix}${container}__corner--tr" />
                            <div className="${prefix}${container}__corner ${prefix}${container}__corner--bl" />
                            <div className="${prefix}${container}__corner ${prefix}${container}__corner--br" />
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

import * as React from 'react';
import Head from 'next/head';
import { Heading, Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'inverted-corners';
    return (
        <PatternLayout pattern={Pattern.InvertedCorners}>
            <Head>
                <meta name="description" content="Create inverted corners with CSS" />
                <meta name="og:description" content="Create inverted corners with CSS" />
                <meta name="twitter:description" content="Create inverted corners with CSS" />
                <meta name="keywords" content="css border radius, css inverted border radius, css inverted corners" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    ...
</div>
`
                }
                css={
                    '' +
                    `
:root {
    --${prefix}${container}-background: #52525b;
    --${prefix}${container}-size: 2rem;
}

.${prefix}${container} {
    background-color: var(--${prefix}${container}-background);

    /* Used to position the corner */
    position: relative;
}

.${prefix}${container}::before {
    content: '';

    /* Absolute position */
    bottom: calc(-2 * var(--${prefix}${container}-size));
    left: 0;
    position: absolute;

    /* Size */
    height: calc(2 * var(--${prefix}${container}-size));
    width: var(--${prefix}${container}-size);

    /* Border */
    background-color: transparent;
    border-top-left-radius: var(--${prefix}${container}-size);
    box-shadow: var(--${prefix}${container}-background) 0px calc(-1 * var(--${prefix}${container}-size)) 0px
        0px;
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
                        <div className="inverted-corners"></div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <section>
                <Heading level={2}>Use cases</Heading>

                <div
                    style={{
                        height: '8rem',
                        width: '16rem',
                    }}
                >
                    <div className="inverted-corners inverted-corners--speech">Speech Bubble</div>
                </div>
            </section>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.ConcaveCorners]} />
        </PatternLayout>
    );
};

export default Details;

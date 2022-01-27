import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'zigzag-timeline';
    return (
        <PatternLayout pattern={Pattern.ZigzagTimeline}>
            <Head>
                <meta name="description" content="Create a zigzag timeline" />
                <meta name="og:description" content="Create a zigzag timeline" />
                <meta name="twitter:description" content="Create a zigzag timeline" />
                <meta name="keywords" content="css timeline, css zigzag timeline" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}__item">
    <!-- Milestone -->
    <div className="zigzag-timeline__milestone">...</div>

    <!-- Content -->
    ...
</div>

<!-- Repeat other items -->
...
`
                }
                css={
                    '' +
                    `
.${prefix}${container}__item {
    /* Used to position the milestone */
    position: relative;

    /* Border */
    border-bottom: 1px solid #71717a;

    /* Take full width */
    width: 100%;
}

.${prefix}${container}__milestone {
    /* Absolute position */
    position: absolute;
    top: 50%;

    /* Circle it */
    border-radius: 50%;
    height: 2rem;
    width: 2rem;

    /* Misc */
    background: #71717a;
}

/* Styles for even items */
.${prefix}${container}__item:nth-child(2n) {
    border-left: 1px solid #71717a;
}
.${prefix}${container}__item:nth-child(2n) .${prefix}${container}__milestone {
    left: 0;
    transform: translate(-50%, -50%);
}

/* Styles for odd items */
.${prefix}${container}__item:nth-child(2n + 1) {
    border-right: 1px solid #71717a;
}
.${prefix}${container}__item:nth-child(2n + 1) .${prefix}${container}__milestone {
    right: 0;
    transform: translate(50%, -50%);
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
                        margin: '0 auto',
                        padding: '0.5rem',
                        width: '60%',
                    }}
                >
                    <div
                        className="zigzag-timeline__item"
                        style={{
                            padding: '1rem 1.5rem',
                        }}
                    >
                        <div className="zigzag-timeline__milestone" />
                        <div style={{ marginBottom: '1rem', width: '80%' }}>
                            <Rectangle />
                        </div>
                        <Block numberOfBlocks={10} />
                    </div>
                    <div
                        className="zigzag-timeline__item"
                        style={{
                            padding: '1rem 1.5rem',
                        }}
                    >
                        <div className="zigzag-timeline__milestone" />
                        <div style={{ marginBottom: '1rem', width: '60%' }}>
                            <Rectangle />
                        </div>
                        <Block numberOfBlocks={20} />
                    </div>
                    <div
                        className="zigzag-timeline__item"
                        style={{
                            padding: '1rem 1.5rem',
                        }}
                    >
                        <div className="zigzag-timeline__milestone" />
                        <div style={{ marginBottom: '1rem', width: '70%' }}>
                            <Rectangle />
                        </div>
                        <Block numberOfBlocks={15} />
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.Timeline]} />
        </PatternLayout>
    );
};

export default Details;

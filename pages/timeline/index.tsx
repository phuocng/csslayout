import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.Timeline}>
            <Head>
                <meta name="description" content="Create a timeline with CSS flexbox" />
                <meta name="og:description" content="Create a timeline with CSS flexbox" />
                <meta name="twitter:description" content="Create a timeline with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css timeline" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Left vertical line -->
    <div class="${prefix}${container}__line"></div>

    <!-- The timeline items container -->
    <ul class="${prefix}${container}__items">
        <!-- Each timeline item -->
        <li class="${prefix}${container}__item">
            <!-- The circle and title -->
            <div class="${prefix}${container}__top">
                <!-- The circle -->
                <div class="${prefix}${container}__circle"></div>

                <!-- The title -->
                <div class="${prefix}${container}__title">
                    ...
                </div>
            </div>

            <!-- The description -->
            <div class="${prefix}${container}__desc">
                ...
            </div>
        </li>

        <!-- Repeat other items -->
        ...
    </ul>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Used to position the left vertical line */
    position: relative;
}

.${prefix}${container}__line {
    /* Border */
    border-right: 2px solid #aaa;

    /* Positioned at the left */
    left: 16px;
    position: absolute;
    top: 0px;

    /* Take full height */
    height: 100%;
}

.${prefix}${container}__items {
    /* Reset styles */
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}

.${prefix}${container}__item {
    margin-bottom: 8px;
}

.${prefix}${container}__top {
    /* Center the content horizontally */
    align-items: center;
    display: flex;
}

.${prefix}${container}__circle {
    /* Rounded border */
    background-color: rgb(170, 170, 170);
    border-radius: 9999px;

    /* Size */
    height: 32px;
    width: 32px;
}

.${prefix}${container}__title {
    /* Take available width */
    flex: 1;
}

.${prefix}${container}__desc {
    /* Make it align with the title */
    margin-left: 48px;
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
                            position: 'relative',
                            width: '60%',
                        }}
                    >
                        <div
                            style={{
                                borderRight: '2px solid #aaa',
                                height: '100%',
                                left: '16px',
                                position: 'absolute',
                                top: 0,
                            }}
                        />
                        <ul
                            style={{
                                listStyleType: 'none',
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            <li style={{ marginBottom: '8px' }}>
                                <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                    <Circle backgroundColor="#aaa" size={32} />
                                    <div style={{ flex: 1, marginLeft: '16px' }}>
                                        <div style={{ width: '80%' }}>
                                            <Rectangle />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '48px' }}>
                                    <Block numberOfBlocks={10} blockHeight={2} />
                                </div>
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                    <Circle backgroundColor="#aaa" size={32} />
                                    <div style={{ flex: 1, marginLeft: '16px' }}>
                                        <div style={{ width: '60%' }}>
                                            <Rectangle />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '48px' }}>
                                    <Block numberOfBlocks={15} blockHeight={2} />
                                </div>
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                    <Circle backgroundColor="#aaa" size={32} />
                                    <div style={{ flex: 1, marginLeft: '16px' }}>
                                        <div style={{ width: '60%' }}>
                                            <Rectangle />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '48px' }}>
                                    <Block numberOfBlocks={10} blockHeight={2} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.ZigzagTimeline]} />
        </PatternLayout>
    );
};

export default Details;

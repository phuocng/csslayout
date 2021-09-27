/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import Head from 'next/head';
import { Pattern } from '../../constants/Pattern';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { DetailsLayout } from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Timeline}>
            <Head>
                <meta name="description" content="Create a timeline with CSS flexbox" />
                <meta name="og:description" content="Create a timeline with CSS flexbox" />
                <meta name="twitter:description" content="Create a timeline with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css timeline" />
            </Head>
            <BrowserFrame
html={`
<div class="container">
    <!-- Left vertical line -->
    <div class="container__line"></div>

    <!-- The timeline items container -->
    <ul class="container__items">
        <!-- Each timeline item -->
        <li class="container__item">
            <!-- The circle and title -->
            <div class="container__top">
                <!-- The circle -->
                <div class="container__circle"></div>

                <!-- The title -->
                <div class="container__title">
                    ...
                </div>
            </div>

            <!-- The description -->
            <div class="container__desc">
                ...
            </div>
        </li>

        <!-- Repeat other items -->
        ...
    </ul>
</div>
`}
css={`
.container {
    /* Used to position the left vertical line */
    position: relative;
}

.container__line {
    /* Border */
    border-right: 2px solid #aaa;

    /* Positioned at the left */
    left: 16px;
    position: absolute;
    top: 0px;

    /* Take full height */
    height: 100%;
}

.container__items {
    /* Reset styles */
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}

.container__item {
    margin-bottom: 8px;
}

.container__top {
    /* Center the content horizontally */
    align-items: center;
    display: flex;
}

.container__circle {
    /* Rounded border */
    background-color: rgb(170, 170, 170);
    border-radius: 9999px;

    /* Size */
    height: 32px;
    width: 32px;
}

.container__title {
    /* Take available width */
    flex: 1;
}

.container__desc {
    /* Make it align with the title */
    margin-left: 48px;
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
                                    <Circle backgroundColor='#aaa' size={32} />
                                    <div style={{ flex: 1, marginLeft: '16px' }}>
                                        <div style={{ width: '80%' }}><Rectangle /></div>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '48px' }}>
                                    <Block numberOfBlocks={10} blockHeight={2} />
                                </div>
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                    <Circle backgroundColor='#aaa' size={32} />
                                    <div style={{ flex: 1, marginLeft: '16px' }}>
                                        <div style={{ width: '60%' }}><Rectangle /></div>
                                    </div>
                                </div>
                                <div style={{ marginLeft: '48px' }}>
                                    <Block numberOfBlocks={15} blockHeight={2} />
                                </div>
                            </li>
                            <li style={{ marginBottom: '8px' }}>
                                <div style={{ alignItems: 'center', display: 'flex', marginBottom: '4px' }}>
                                    <Circle backgroundColor='#aaa' size={32} />
                                    <div style={{ flex: 1, marginLeft: '16px' }}>
                                        <div style={{ width: '60%' }}><Rectangle /></div>
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

            <RelatedPatterns patterns={[Pattern.ZigzagTimeline]} />
        </DetailsLayout>
    );
};

export default Details;

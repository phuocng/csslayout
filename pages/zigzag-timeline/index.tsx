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
import Rectangle from '../../placeholders/Rectangle';

import './zigzag-timeline.css';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.ZigzagTimeline}>
            <Head>
                <meta name="description" content="Create a zigzag timeline" />
                <meta name="og:description" content="Create a zigzag timeline" />
                <meta name="twitter:description" content="Create a zigzag timeline" />
                <meta name="keywords" content="css timeline, css zigzag timeline" />
            </Head>
            <BrowserFrame
html={`
<div class="zigzag-timeline__item">
    <!-- Milestone -->
    <div className="zigzag-timeline__milestone">...</div>

    <!-- Content -->
    ...
</div>

<!-- Repeat other items -->
...
`}
css={`
.zigzag-timeline__item {
    /* Used to position the milestone */
    position: relative;

    /* Border */
    border-bottom: 1px solid #71717A;

    /* Take full width */
    width: 100%;
}

.zigzag-timeline__milestone {
    /* Absolute position */
    position: absolute;    
    top: 50%;

    /* Circle it */
    border-radius: 50%;
    height: 2rem;
    width: 2rem;

    /* Misc */
    background: #71717A;
}

/* Styles for even items */
.zigzag-timeline__item:nth-child(2n) {
    border-left: 1px solid #71717A;
    
}
.zigzag-timeline__item:nth-child(2n) .zigzag-timeline__milestone {
    left: 0;
    transform: translate(-50%, -50%);    
}

/* Styles for odd items */
.zigzag-timeline__item:nth-child(2n + 1) {
    border-right: 1px solid #71717A;
}
.zigzag-timeline__item:nth-child(2n + 1) .zigzag-timeline__milestone {
    right: 0;
    transform: translate(50%, -50%);
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
                        margin: '0 auto',
                        padding: '0.5rem',
                        width: '60%',
                    }}
                >
                    <div
                        className='zigzag-timeline__item'
                        style={{                                
                            padding: '1rem 1.5rem',
                        }}
                    >
                        <div className='zigzag-timeline__milestone'/>
                        <div style={{ marginBottom: '1rem', width: '80%' }}><Rectangle /></div>
                        <Block numberOfBlocks={10} />
                    </div>
                    <div
                        className='zigzag-timeline__item'
                        style={{
                            padding: '1rem 1.5rem',
                        }}
                    >
                        <div className='zigzag-timeline__milestone' />
                        <div style={{ marginBottom: '1rem', width: '60%' }}><Rectangle /></div>
                        <Block numberOfBlocks={20} />
                    </div>
                    <div
                        className='zigzag-timeline__item'
                        style={{
                            padding: '1rem 1.5rem',
                        }}
                    >
                        <div className='zigzag-timeline__milestone' />
                        <div style={{ marginBottom: '1rem', width: '70%' }}><Rectangle /></div>
                        <Block numberOfBlocks={15} />
                    </div>
                </div>
            </BrowserFrame>

            <RelatedPatterns patterns={[Pattern.Timeline]} />
        </DetailsLayout>
    );
};

export default Details;

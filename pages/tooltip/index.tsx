/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import Head from 'next/head';

import './tooltip.css';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { DetailsLayout } from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Tooltip}>
            <Head>
                <meta name="description" content="Create a tooltip with CSS" />
                <meta name="og:description" content="Create a tooltip with CSS" />
                <meta name="twitter:description" content="Create a tooltip with CSS" />
                <meta name="keywords" content="css tooltip" />
            </Head>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Move the mouser over the main element to see the tooltip.
                </div>
                <BrowserFrame
html={`
<div class="container">
    <!-- The tooltip content -->
    <div class="container__content">
        ...
    </div>

    <!-- The tooltip arrow -->
    <div class="container__arrow" />

    <!-- The trigger element -->
    ...
</div>
`}
css={`
.container {
    /* Used to position the arrow */
    position: relative;
}

/* Show the arrow and content and restore pointer events when hovering the trigger element */
.container:hover .container__arrow,
.container:hover .container__content {
    opacity: 1;
    pointer-events: initial;
}

.container__arrow {
    /* Invisible by default */
    opacity: 0;

    /* To prevent accidental interactions with other elements  */
    pointer-events: none;

    /* Border */
    border: 8px solid transparent;
    border-top-color: #00439e;

    /* Position */
    bottom: 100%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, 8px);

    /* Zero size */
    height: 0;
    width: 0;

    /* Displayed on top of other element */
    z-index: 10;
}

.container__content {
    /* Invisible by default */
    opacity: 0;

    /* To prevent accidental interactions with other elements  */
    pointer-events: none;

    /* Background color, must be the same as the border color of arrow */
    background-color: #00439e;
    border-radius: 2px;

    /* Position */
    bottom: 100%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -8px);

    /* Displayed on top of other element */
    z-index: 10;
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
                            className="p-tooltip"
                            style={{
                                marginBottom: '16px',
                                width: '150px',
                            }}
                        >
                            <div
                                className="p-tooltip-content"
                                style={{
                                    padding: '8px',
                                    width: '200px',
                                }}
                            >
                                <Block backgroundColor='#fff' justify='center' numberOfBlocks={5} />
                            </div>
                            <div className="p-tooltip-arrow" />
                            <Rectangle height={32} />
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.PopoverArrow]} />
        </DetailsLayout>
    );
};

export default Details;

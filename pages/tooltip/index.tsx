import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.Tooltip}>
            <Head>
                <meta name="description" content="Create a tooltip with CSS" />
                <meta name="og:description" content="Create a tooltip with CSS" />
                <meta name="twitter:description" content="Create a tooltip with CSS" />
                <meta name="keywords" content="css tooltip" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                Move the mouser over the main element to see the tooltip.
            </div>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- The tooltip content -->
    <div class="${prefix}${container}__content">
        ...
    </div>

    <!-- The tooltip arrow -->
    <div class="${prefix}${container}__arrow" />

    <!-- The trigger element -->
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Used to position the arrow */
    position: relative;
}

/* Show the arrow and content and restore pointer events when hovering the trigger element */
.${prefix}${container}:hover .${prefix}${container}__arrow,
.${prefix}${container}:hover .${prefix}${container}__content {
    opacity: 1;
    pointer-events: initial;
}

.${prefix}${container}__arrow {
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

.${prefix}${container}__content {
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
                            <Block backgroundColor="#fff" justify="center" numberOfBlocks={5} />
                        </div>
                        <div className="p-tooltip-arrow" />
                        <Rectangle height={32} />
                    </div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.PopoverArrow]} />
        </PatternLayout>
    );
};

export default Details;

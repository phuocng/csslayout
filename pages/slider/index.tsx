import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.Slider}>
            <Head>
                <meta name="description" content="Create a slider with CSS flexbox" />
                <meta name="og:description" content="Create a slider with CSS flexbox" />
                <meta name="twitter:description" content="Create a slider with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css slider" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Left side -->
    <!-- Width based on the current value -->
    <div class="${prefix}${container}__left" style="width: 20%"></div>

    <!-- Circle -->
    <div class="${prefix}${container}__circle"></div>

    <!-- Right side -->
    <div class="${prefix}${container}__right"></div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Content is centered horizontally */
    align-items: center;
    display: flex;

    /* Size */
    height: 32px;
}

.${prefix}${container}__left {
    height: 2px;

    /* Colors */
    background-color: rgba(0, 0, 0, 0.3);
}

.${prefix}${container}__circle {
    /* Size */
    height: 32px;
    width: 32px;

    /* Rounded border */
    border-radius: 9999px;

    /* Colors */
    background-color: rgba(0, 0, 0, 0.3);
}

.${prefix}${container}__right {
    /* Take the remaining width */
    flex: 1;
    height: 2px;

    /* Colors */
    background-color: rgba(0, 0, 0, 0.3);
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
                            alignItems: 'center',
                            display: 'flex',
                            height: '16px',
                            width: '256px',
                        }}
                    >
                        <div style={{ width: '20%' }}>
                            <Rectangle height={2} />
                        </div>
                        <Circle size={32} />
                        <div style={{ flex: 1 }}>
                            <Rectangle height={2} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

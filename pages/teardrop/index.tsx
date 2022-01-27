import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.Teardrop}>
            <Head>
                <meta name="description" content="Create a teardrop with CSS" />
                <meta name="og:description" content="Create a teardrop with CSS" />
                <meta name="twitter:description" content="Create a teardrop with CSS" />
                <meta
                    name="keywords"
                    content="css border radius, css teardrop, css water drop shape, css water droplet"
                />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Display the content vertically -->
    <div class="${prefix}${container}__content">
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Border */
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 0px 50% 50% 50%;

    /* Angle at the top */
    transform: rotate(45deg);

    /* Size */
    height: 64px;
    width: 64px;
}

.${prefix}${container}__content {
    transform: rotate(-45deg);
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
                            border: '2px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '0 50% 50% 50%',
                            display: 'flex',
                            height: '64px',
                            justifyContent: 'center',
                            transform: 'rotate(45deg)',
                            width: '64px',
                        }}
                    >
                        <div style={{ transform: 'rotate(-45deg)' }}>
                            <Circle />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

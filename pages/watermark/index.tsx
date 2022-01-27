import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.Watermark}>
            <Head>
                <meta name="description" content="Create a watermark with CSS" />
                <meta name="og:description" content="Create a watermark with CSS" />
                <meta name="twitter:description" content="Create a watermark with CSS" />
                <meta name="keywords" content="css watermark" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Watermark container -->
    <div class="${prefix}${container}__wrapper">
        <!-- The watermark -->
        <div class="${prefix}${container}__watermark">
            Draft
        </div>
    </div>

    <!-- Other content -->
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Used to position the watermark */
    position: relative;
}

.${prefix}${container}__wrapper {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Absolute position */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Take full size */
    height: 100%;
    width: 100%;
}

.${prefix}${container}__watermark {
    /* Text color */
    color: rgba(0, 0, 0, 0.2);

    /* Text styles */
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;

    /* Rotate the text */
    transform: rotate(-45deg);

    /* Disable the selection */
    user-select: none;
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
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            padding: '16px',
                            position: 'relative',
                            width: '300px',
                        }}
                    >
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                height: '100%',
                                justifyContent: 'center',
                                left: 0,
                                position: 'absolute',
                                top: 0,
                                width: '100%',
                            }}
                        >
                            <div
                                style={{
                                    color: 'rgba(0, 0, 0, 0.2)',
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    transform: 'rotate(-45deg)',
                                    userSelect: 'none',
                                }}
                            >
                                Draft
                            </div>
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <Block numberOfBlocks={20} />
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <Block numberOfBlocks={15} />
                        </div>

                        <div style={{ marginBottom: '8px' }}>
                            <Block numberOfBlocks={10} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

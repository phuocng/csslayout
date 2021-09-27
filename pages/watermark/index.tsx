/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import Head from 'next/head';
import { Pattern } from '../../constants/Pattern';

import { DetailsLayout } from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Watermark}>
            <Head>
                <meta name="description" content="Create a watermark with CSS" />
                <meta name="og:description" content="Create a watermark with CSS" />
                <meta name="twitter:description" content="Create a watermark with CSS" />
                <meta name="keywords" content="css watermark" />
            </Head>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Watermark container -->
    <div class="container__wrapper">
        <!-- The watermark -->
        <div class="container__watermark">
            Draft
        </div>
    </div>

    <!-- Other content -->
    ...
</div>
`}
css={`
.container {
    /* Used to position the watermark */
    position: relative;
}

.container__wrapper {
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

.container__watermark {
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
            </div>
        </DetailsLayout>
    );
};

export default Details;

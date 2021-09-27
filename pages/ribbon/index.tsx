/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import Head from 'next/head';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { DetailsLayout } from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Ribbon}>
            <Head>
                <meta name="description" content="Create a ribbon with CSS" />
                <meta name="og:description" content="Create a ribbon with CSS" />
                <meta name="twitter:description" content="Create a ribbon with CSS" />
                <meta name="keywords" content="css ribbon" />
            </Head>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- The content -->
    ...

    <!-- The left side -->
    <div class="container__side container__side--left"></div>

    <!-- The left triangle displayed below the content -->
    <div class="container__triangle container__triangle--left"></div>

    <!-- The right triangle displayed below the content -->
    <div class="container__triangle container__triangle--right"></div>

    <!-- The right side -->
    <div class="container__side container__side--right"></div>
</div>
`}
css={`
.container {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Background color */
    background-color: #BBB;

    /* Size */
    height: 32px;

    /* Use to position the corners */
    position: relative;
}

.container__side {
    bottom: -8px;
    position: absolute;

    /* Displayed under the container */
    z-index: -1;

    /* Background */
    border: 16px solid #CCC;
    border-left-color: transparent;
}

.container__side--left {
    /* Position */
    left: -24px;
}

.container__side--right {
    /* Position */
    right: -24px;
}

.container__triangle {
    position: absolute;
    top: 100%;

    border: 8px solid transparent;
    border-bottom-width: 0;
    border-top-color: #AAA;
}

.container__triangle--left {
    border-right-width: 0;
    left: 0;
}

.container__triangle--right {
    border-left-width: 0;
    right: 0;
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
                                alignItems: 'center',
                                backgroundColor: '#BBB',
                                display: 'flex',
                                height: '32px',
                                justifyContent: 'center',
                                padding: '0 16px',
                                position: 'relative',
                                width: '150px',
                            }}
                        >
                            <Rectangle />
                            <div
                                style={{
                                    border: '16px solid #CCC',
                                    borderLeftColor: 'transparent',
                                    bottom: '-8px',
                                    left: '-24px',
                                    position: 'absolute',
                                    zIndex: -1,
                                }}
                            />
                            <div
                                style={{
                                    border: '8px solid transparent',
                                    borderBottomWidth: 0,
                                    borderRightWidth: 0,
                                    borderTopColor: '#AAA',
                                    left: 0,
                                    position: 'absolute',
                                    top: '100%',
                                }}
                            />
                            <div
                                style={{
                                    border: '8px solid transparent',
                                    borderBottomWidth: 0,
                                    borderLeftWidth: 0,
                                    borderTopColor: '#AAA',
                                    position: 'absolute',
                                    right: 0,
                                    top: '100%',
                                }}
                            />
                            <div
                                style={{
                                    border: '16px solid #CCC',
                                    borderRightColor: 'transparent',
                                    bottom: '-8px',
                                    position: 'absolute',
                                    right: '-24px',
                                    zIndex: -1,
                                }}
                            />
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.CornerRibbon]} />
        </DetailsLayout>
    );
};

export default Details;

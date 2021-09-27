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

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.StackedCards}>
            <Head>
                <meta name="description" content="Create stacked cards with CSS" />
                <meta name="og:description" content="Create stacked cards with CSS" />
                <meta name="twitter:description" content="Create stacked cards with CSS" />
                <meta name="keywords" content="css card, css stacked cards, css transform rotate" />
            </Head>
            <BrowserFrame
html={`
<div class="container">
    <!-- Repeat if you want to have more cards -->
    <div class="container__card"></div>

    <!-- Main card's content -->
    ...
</div>
`}
css={`
.container {
    /* Used to position the stacked cards */
    position: relative;
}

.container__card {
    /* Absolute position */
    left: 0px;
    position: absolute;
    top: 0px;

    /* Take full size */
    height: 100%;
    width: 100%;

    /* Displayed under the container */
    z-index: -1;

    /* Background and border colors */
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.3);

    /* Rotate it. Change the number of degrees for the following cards */
    transform: rotate(5deg);
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
                            backgroundColor: '#fff',
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            height: '250px',
                            position: 'relative',
                            width: '200px',
                        }}
                    >
                        {
                            Array(5).fill(0).map((_, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: '#fff',
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            borderRadius: '4px',
                                            height: '100%',
                                            left: 0,
                                            position: 'absolute',
                                            top: 0,
                                            transform: `rotate(${5 * (index + 1)}deg)`,
                                            width: '100%',
                                            zIndex: -1,
                                        }}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </BrowserFrame>

            <RelatedPatterns patterns={[Pattern.Card, Pattern.LayeredCard, Pattern.ThreeDimensionsCard]} />
        </DetailsLayout>
    );
};

export default Details;

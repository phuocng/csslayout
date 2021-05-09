/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

import './inverted-corners.css';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.InvertedCorners}>
            <Helmet>
                <meta name="description" content="Create inverted corners with CSS" />
                <meta name="og:description" content="Create inverted corners with CSS" />
                <meta name="twitter:description" content="Create inverted corners with CSS" />
                <meta name="keywords" content="css border radius, css inverted border radius, css inverted corners" />
            </Helmet>
            <BrowserFrame
html={`
<div class="inverted-corners">
    ...
</div>
`}
css={`
:root {
    --inverted-corners-background: #52525B;
    --inverted-corners-size: 2rem;
}

.inverted-corners {
    background-color: var(--inverted-corners-background);

    /* Used to position the corner */
    position: relative;
}

.inverted-corners::before {
    content: '';

    /* Absolute position */
    bottom: calc(-2 * var(--inverted-corners-size));
    left: 0;
    position: absolute;

    /* Size */
    height: calc(2 * var(--inverted-corners-size));
    width: var(--inverted-corners-size);

    /* Border */
    background-color: transparent;
    border-top-left-radius: var(--inverted-corners-size);
    box-shadow: var(--inverted-corners-background)
                0px calc(-1 * var(--inverted-corners-size)) 0px 0px;
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
                        padding: '1rem',
                    }}
                >
                    <div
                        style={{
                            height: '8rem',
                            width: '16rem',
                        }}
                    >
                        <div className='inverted-corners'></div>
                    </div>
                </div>
            </BrowserFrame>

            <section>
                <Heading title="Use case" />

                <div
                    style={{
                        height: '8rem',
                        width: '16rem',
                    }}
                >
                    <div className='inverted-corners inverted-corners--speech'>Speech Bubble</div>
                </div>
            </section>
        </DetailsLayout>
    );
};

export default Details;

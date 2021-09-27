import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.PriceTag}>
            <Head>
                <meta name="description" content="Create a price tag with CSS" />
                <meta name="og:description" content="Create a price tag with CSS" />
                <meta name="twitter:description" content="Create a price tag with CSS" />
                <meta name="keywords" content="css price tag" />
            </Head>
            <BrowserFrame
                html={`
<div class="price-tag">
    ...
</div>
`}
                css={`
                    :root {
                        --price-tag-background: rgba(0, 0, 0, 0.3);
                        --price-tag-height: 2rem;
                    }

                    .price-tag {
                        background: var(--price-tag-background);
                        color: #fff;

                        /* Center the price */
                        align-items: center;
                        display: flex;
                        justify-content: center;

                        /* Used to position the triangle */
                        position: relative;

                        /* Size */
                        height: var(--price-tag-height);

                        /* Spacing */
                        padding: 0.25rem 0.5rem;
                    }

                    /* The triangle */
                    .price-tag::before {
                        content: '';

                        border-color: transparent var(--price-tag-background) transparent transparent;
                        border-style: solid;
                        border-width: calc(var(--price-tag-height) / 2) calc(var(--price-tag-height) / 2)
                            calc(var(--price-tag-height) / 2) 0rem;

                        /* Position */
                        left: 0px;
                        position: absolute;
                        top: 0px;
                        transform: translate(-100%, 0px);
                    }

                    /* The dot */
                    .price-tag::after {
                        content: '';

                        /* Make it like a cirle */
                        background: #fff;
                        border-radius: 9999rem;

                        /* Position */
                        left: 0;
                        position: absolute;
                        top: 50%;
                        transform: translate(-0.5rem, -50%);

                        /* Size */
                        height: 0.5rem;
                        width: 0.5rem;
                    }
                `}
            >
                <div
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        padding: '8px',
                    }}
                >
                    <div className="price-tag">99.99$</div>
                </div>
            </BrowserFrame>
            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.TriangleButtons]} />
        </PatternLayout>
    );
};

export default Details;

import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.MasonryGrid}>
            <Head>
                <meta name="description" content="Create a masonry grid with CSS" />
                <meta name="og:description" content="Create a masonry grid with CSS" />
                <meta name="twitter:description" content="Create a masonry grid with CSS" />
                <meta name="keywords" content="css column-count, css column-gap, css masonry, css masonry grid" />
            </Head>
            <BrowserFrame
                html={`
<div class="masonry-grid">
    <!--Item -->
    <div class="masonry-grid__item">...</div>

    <!-- Repeat other items -->
</div>
`}
                css={`
                    .masonry-grid {
                        /* It is split into 3 columns */
                        column-count: 3;

                        /* The space between columns */
                        column-gap: 1rem;

                        /* Misc */
                        width: 100%;
                    }

                    .masonry-grid__item {
                        /* Prevent a column from breaking into multiple columns */
                        break-inside: avoid;

                        /* Misc */
                        margin-bottom: 1rem;
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
                    <div className="masonry-grid">
                        <div className="masonry-grid__item">
                            <Rectangle height={32} />
                        </div>
                        <div className="masonry-grid__item">
                            <Rectangle height={64} />
                        </div>
                        <div className="masonry-grid__item">
                            <Rectangle height={96} />
                        </div>
                        <div className="masonry-grid__item">
                            <Rectangle height={64} />
                        </div>
                        <div className="masonry-grid__item">
                            <Rectangle height={128} />
                        </div>
                        <div className="masonry-grid__item">
                            <Rectangle height={96} />
                        </div>
                        <div className="masonry-grid__item">
                            <Rectangle height={128} />
                        </div>
                        <div className="masonry-grid__item">
                            <Rectangle height={32} />
                        </div>
                        <div className="masonry-grid__item">
                            <Rectangle height={64} />
                        </div>
                        <div className="masonry-grid__item">
                            <Rectangle height={32} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.CardLayout, Pattern.SimpleGrid]} />
        </PatternLayout>
    );
};

export default Details;

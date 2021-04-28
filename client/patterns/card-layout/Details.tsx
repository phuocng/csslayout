/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.CardLayout}>
            <Helmet>
                <meta name="description" content="Create a card layout with CSS flexbox" />
                <meta name="og:description" content="Create a card layout with CSS flexbox" />
                <meta name="twitter:description" content="Create a card layout with CSS flexbox" />
                <meta name="keywords" content="css card layout, css flexbox, css layout" />
            </Helmet>
            <BrowserFrame
html={`
<div class="cards">
    <!-- A card with given width -->
    <div class="cards__item">
        ...
    </div>

    <!-- Repeat other cards -->
    ...
</div>
`}
css={`
.cards {
    display: flex;

    /* Put a card in the next row when previous cards take all width */
    flex-wrap: wrap;

    margin-left: -8px;
    margin-right: -8px;
}

.cards__item {
    /* There will be 4 cards per row */
    flex-basis: 25%;

    padding-left: 8px;
    padding-right: 8px;
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
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0 -8px',
                            width: '60%',
                        }}
                    >
                        {
                            Array(10).fill(0).map((_, index) => {
                                return (
                                    <div key={index} style={{ flexBasis: '25%', marginBottom: '24px', padding: '0 8px' }}>
                                        <Rectangle height={80} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </BrowserFrame>

            <RelatedPatterns patterns={[Pattern.Card, Pattern.MasonryGrid, Pattern.SimpleGrid]} />
        </DetailsLayout>
    );
};

export default Details;

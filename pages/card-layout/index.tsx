import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { PrefixContext } from '../../context/prefixContext';
import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'cards';
    return (
        <PatternLayout pattern={Pattern.CardLayout}>
            <Head>
                <meta name="description" content="Create a card layout with CSS flexbox" />
                <meta name="og:description" content="Create a card layout with CSS flexbox" />
                <meta name="twitter:description" content="Create a card layout with CSS flexbox" />
                <meta name="keywords" content="css card layout, css flexbox, css layout" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- A card with given width -->
    <div class="${prefix}${container}__item">
        ...
    </div>

    <!-- Repeat other cards -->
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    display: flex;

    /* Put a card in the next row when previous cards take all width */
    flex-wrap: wrap;

    margin-left: -8px;
    margin-right: -8px;
}

.${prefix}${container}__item {
    /* There will be 4 cards per row */
    flex-basis: 25%;

    padding-left: 8px;
    padding-right: 8px;
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
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0 -8px',
                            width: '60%',
                        }}
                    >
                        {Array(10)
                            .fill(0)
                            .map((_, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{ flexBasis: '25%', marginBottom: '24px', padding: '0 8px' }}
                                    >
                                        <Rectangle height={80} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />
            <RelatedPatterns patterns={[Pattern.Card, Pattern.MasonryGrid, Pattern.SimpleGrid]} />
        </PatternLayout>
    );
};

export default Details;

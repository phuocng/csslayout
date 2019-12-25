import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Card layout">
            <Helmet>
                <meta name="description" content="Create a card layout with CSS flexbox" />
                <meta name="keywords" content="css card layout, css flexbox, css layout" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
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
                    )}
                    source={`
<div style="
    display: flex;

    /* Put a card in the next row when previous cards take all width */
    flex-wrap: wrap;

    margin-left: -8px;
    margin-right: -8px;
">
    <!-- A card with given width -->
    <div style="
        /* There will be 4 cards per row */
        flex-basis: 25%;

        padding-left: 8px;
        padding-right: 8px;
    ">
        ...
    </div>

    <!-- Repeat other cards -->
    ...
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.Card, Pattern.SimpleGrid]} />
        </DetailsLayout>
    );
};

export default Details;

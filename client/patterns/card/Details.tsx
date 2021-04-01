/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Card}>
            <Helmet>
                <meta name="description" content="Create a card with CSS flexbox" />
                <meta name="keywords" content="css card, css flexbox" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Cover -->
    <div class="container__cover">
        ...
    </div>

    <!-- Content -->
    <div class="container__content">
        ...
    </div>
    ...
</div>
`}
css={`
.container {
    display: flex;
    flex-direction: column;
}

.container__cover {
    height: 150px;
    width: 100%;
}

.container__content {
    /* Take available height */
    flex: 1;
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
                            padding: '16px',
                        }}
                    >
                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '8px',
                                display: 'flex',
                                flexDirection: 'column',
                                width: '256px',
                            }}
                        >
                            <Rectangle height={150} />
                            <div style={{ flex: 1, padding: '16px' }}>
                                <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={15} /></div>
                                <div style={{ width: '128px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.CardLayout, Pattern.StackedCards]} />
        </DetailsLayout>
    );
};

export default Details;

/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.StickySections}>
            <Helmet>
                <meta name="description" content="Create sticky sections with CSS" />
                <meta name="keywords" content="css layout, css sticky, css sticky sections" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Try to scroll the main content to see each section sticks to the top of page.
                </div>
                <BrowserFrame
html={`
<div class="container">
    <section class="section">
        ...
    </section>

    <!-- Repeat other sections -->
    ...
</div>
`}
css={`
.container {
    height: 100%;
    overflow: scroll;
}
.section {
    /* Take full size */
    height: 100%;
    width: 100%;

    /* Stick to the top */
    position: sticky;
    top: 0;
}
`}
                >
                    <div
                        style={{
                            height: '100%',
                            overflow: 'scroll',
                        }}
                    >
                        <section
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                height: '100%',
                                position: 'sticky',
                                top: 0,
                                width: '100%',
                            }}
                        />
                        <section
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                height: '100%',
                                position: 'sticky',
                                top: 0,
                                width: '100%',
                            }}
                        />
                        <section
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                height: '100%',
                                position: 'sticky',
                                top: 0,
                                width: '100%',
                            }}
                        />
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns patterns={[Pattern.StickyHeader, Pattern.StickyTableColumn, Pattern.StickyTableHeaders]} />
        </DetailsLayout>
    );
};

export default Details;

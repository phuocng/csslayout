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
        <DetailsLayout pattern={Pattern.StickyHeader}>
            <Helmet>
                <meta name="description" content="Create a sticky header with CSS" />
                <meta name="keywords" content="css layout, css position sticky, css sticky header" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Try to scroll the main content to see the header sticks to the top of page.
                </div>
                <BrowserFrame
html={`
<div>
    <header class="header">
        ...
    </header>
    <main>
        ...
    </main>
</div>
`}
css={`
.header {
    /* Stick to the top */
    position: sticky;
    top: 0;
}
`}
                >
                    <div>
                        <div
                            style={{
                                backgroundColor: '#FFF',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                padding: '16px',
                                position: 'sticky',
                                top: 0,
                            }}
                        >
                            <div style={{ width: '50%' }}><Rectangle /></div>
                        </div>
                        <div style={{ padding: '16px' }}>
                            <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                            <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={40} /></div>
                            <div><Block numberOfBlocks={30} /></div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>

            <RelatedPatterns
                patterns={[
                    Pattern.StickySections, Pattern.StickyTableColumn, Pattern.StickyTableHeaders,
                ]}
            />
        </DetailsLayout>
    );
};

export default Details;

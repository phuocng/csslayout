import * as React from 'react';
import Head from 'next/head';
import { Spacer } from '@1milligram/design';

import { RelatedPatterns } from '../../components/RelatedPatterns';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.StickyHeader}>
            <Head>
                <meta name="description" content="Create a sticky header with CSS" />
                <meta name="og:description" content="Create a sticky header with CSS" />
                <meta name="twitter:description" content="Create a sticky header with CSS" />
                <meta name="keywords" content="css layout, css position sticky, css sticky header" />
            </Head>
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
                            borderBottom: '1px solid #d1d5db',
                            padding: '16px',
                            position: 'sticky',
                            top: 0,
                        }}
                    >
                        <div style={{ width: '50%' }}>
                            <Rectangle />
                        </div>
                    </div>
                    <div style={{ padding: '16px' }}>
                        <div style={{ marginBottom: '32px' }}>
                            <Block numberOfBlocks={20} />
                        </div>
                        <div style={{ marginBottom: '32px' }}>
                            <Block numberOfBlocks={40} />
                        </div>
                        <div>
                            <Block numberOfBlocks={30} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>

            <Spacer size="extraLarge" />

            <RelatedPatterns
                patterns={[Pattern.StickySections, Pattern.StickyTableColumn, Pattern.StickyTableHeaders]}
            />
        </PatternLayout>
    );
};

export default Details;

/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import Head from 'next/head';
import { Pattern } from '../../constants/Pattern';

import { DetailsLayout } from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Breadcrumb}>
            <Head>
                <meta name="description" content="Create a breadcrumb with CSS flexbox" />
                <meta name="og:description" content="Create a breadcrumb with CSS flexbox" />
                <meta name="twitter:description" content="Create a breadcrumb with CSS flexbox" />
                <meta name="keywords" content="css breadcrumb, css flexbox" />
            </Head>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="breadcrumb">
    <!-- Breadcrumb item -->
    <a>...</a>

    <!-- Separator -->
    <div class="breadcrumb__separator">/</div>

    <!-- Repeated items and separators -->
    ...
</div>
`}
css={`
.breadcrumb {
    /* Content is centered vertically */
    align-items: center;
    display: flex;
}

.breadcrumb__separator {
    margin: 0 8px;
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
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: '128px' }}><Rectangle height={16} /></div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '36px', margin: '0 4px' }}>/</div>
                            <div style={{ width: '32px' }}><Rectangle height={16} /></div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '36px', margin: '0 4px' }}>/</div>
                            <div style={{ width: '64px' }}><Rectangle height={16} /></div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '36px', margin: '0 4px' }}>/</div>
                            <div style={{ width: '32px' }}><Rectangle height={16} /></div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;

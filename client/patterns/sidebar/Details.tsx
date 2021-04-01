/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.Sidebar}>
            <Helmet>
                <meta name="description" content="Create a sidebar with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css layout, css sidebar" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>Try to scroll the main content!</div>
                <BrowserFrame
html={`
<div class="container">
    <!-- Sidebar -->
    <aside class="container__sidebar">
        ...
    </aside>

    <!-- Main -->
    <main class="container__main">
        ...
    </main>
</div>
`}
css={`
.container {
    display: flex;
}

.container__sidebar {
    width: 30%;
}

.container__main {
    /* Take the remaining width */
    flex: 1;

    /* Make it scrollable */
    overflow: auto;
}
`}
                >
                    <div style={{ display: 'flex', height: '100%' }}>
                        <div
                            style={{
                                borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '16px',
                                width: '30%',
                            }}
                        >
                            <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={5} /></div>
                            <div style={{ width: '80%' }}><Block numberOfBlocks={4} /></div>
                        </div>
                        <div
                            style={{
                                flex: 1,
                                overflow: 'auto',
                                padding: '16px',
                            }}
                        >
                            <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                            <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                            <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                            <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                            <div style={{ width: '80%' }}><Block numberOfBlocks={10} /></div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;

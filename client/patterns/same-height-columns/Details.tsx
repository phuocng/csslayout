/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.SameHeightColumns}>
            <Helmet>
                <meta name="description" content="Create same height columns with CSS flexbox" />
                <meta name="og:description" content="Create same height columns with CSS flexbox" />
                <meta name="twitter:description" content="Create same height columns with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css layout, css same height columns" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Column -->
    <div class="container__column">
        <!-- Cover -->
        ...

        <!-- Content -->
        <div class="container__content">
            ...
        </div>

        <!-- Button sticks to the bottom -->
        ...
    </div>

    <!-- Repeat with other columns -->
    ...
</div>
`}
css={`
.container {
    display: flex;
}

.container__column {
    flex: 1;
    /* Space between columns */
    margin: 0 8px;

    /* Layout each column */
    display: flex;
    flex-direction: column;
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
                            padding: '8px',
                        }}
                    >
                        <div style={{ display: 'flex', height: '100%', width: '100%' }}>
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.2)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    flex: 1,
                                    flexDirection: 'column',
                                    margin: '0 8px',
                                }}
                            >
                                <Rectangle height={200} />
                                <div style={{ flex: 1, padding: '16px' }}>
                                    <Block numberOfBlocks={10} />
                                </div>
                                <div style={{ padding: '16px', width: '128px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.2)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    flex: 1,
                                    flexDirection: 'column',
                                    margin: '0 8px',
                                }}
                            >
                                <Rectangle height={200} />
                                <div style={{ flex: 1, padding: '16px' }}>
                                    <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={15} /></div>
                                    <Block numberOfBlocks={5} />
                                </div>
                                <div style={{ padding: '16px', width: '128px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.2)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    flex: 1,
                                    flexDirection: 'column',
                                    margin: '0 8px',
                                }}
                            >
                                <Rectangle height={200} />
                                <div style={{ flex: 1, padding: '16px' }}>
                                    <div style={{ marginBottom: '16px' }}><Block numberOfBlocks={5} /></div>
                                    <Block numberOfBlocks={10} />
                                </div>
                                <div style={{ padding: '16px', width: '128px' }}>
                                    <Rectangle height={32} />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;

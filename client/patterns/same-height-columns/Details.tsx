/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Same height columns">
            <Helmet>
                <meta name="description" content="Create same height columns with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css layout, css same height columns" />
            </Helmet>
            <div className='p-8 pb-20'>
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
                    )}
                    source={`
<div style="display: flex;">
    <!-- Column -->
    <div style="
        flex: 1;
        /* Space between columns */
        margin: 0 8px;

        /* Layout each column */
        display: flex;
        flex-direction: column;
    ">
        <!-- Cover -->
        ...

        <!-- Content -->
        <div style="
            /* Take available height */
            flex: 1;
        ">
            ...
        </div>

        <!-- Button sticks to the bottom -->
        ...
    </div>

    <!-- Repeat with other columns -->
    ...
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;

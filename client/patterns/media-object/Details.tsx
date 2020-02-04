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
import Square from '../../placeholders/Square';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Media object">
            <Helmet>
                <meta name="description" content="Create a media object with CSS flexbox" />
                <meta name="keywords" content="css flexbox, media object" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'flex-start',
                                display: 'flex',
                                height: '100%',
                                padding: '16px',
                            }}
                        >
                            <div style={{ height: '128px', marginRight: '16px', width: '128px' }}>
                                <Square />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ marginBottom: '32px', width: '80%' }}>
                                    <Rectangle />
                                </div>
                                <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={20} /></div>
                                <div style={{ marginBottom: '32px' }}><Block numberOfBlocks={15} /></div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Align sub-items to top */
    align-items: start;
    display: flex;
">
    <!-- Media object -->
    <div style="
        margin-right: 16px;

        /* Set the width for the media object */
        width: 200px;
    ">
        ...
    </div>

    <!-- Main content -->
    <div style="
        /* Take the remaining width */
        flex: 1;
    ">
        ...
    </div>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;

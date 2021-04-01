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
import Square from '../../placeholders/Square';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.MediaObject}>
            <Helmet>
                <meta name="description" content="Create a media object with CSS flexbox" />
                <meta name="keywords" content="css flexbox, media object" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Media object -->
    <div class="container__media">
        ...
    </div>

    <!-- Main content -->
    <div class="container__content">
        ...
    </div>
</div>
`}
css={`
.container {
    /* Align sub-items to top */
    align-items: start;
    display: flex;
}

.container__media {
    margin-right: 16px;

    /* Set the width for the media object */
    width: 200px;
}

.container__content {
    /* Take the remaining width */
    flex: 1;
}
`}
                >
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
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;

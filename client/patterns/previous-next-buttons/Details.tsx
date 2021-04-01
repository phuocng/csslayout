/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.PreviousNextButtons}>
            <Helmet>
                <meta name="description" content="Create previous and next buttons with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css pagination" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <!-- Previous link sticks to the left -->
    <a>..</a>

    <!-- Next link sticks to the right -->
    <a>..</a>
</div>
`}
css={`
.container {
    align-items: center;
    display: flex;
    justify-content: space-between;
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
                        <div style={{ width: '50%' }}>
                            <div
                                style={{
                                    alignItems: 'center',
                                    display: 'flex',
                                    height: '32px',
                                    justifyContent: 'space-between',
                                    padding: '8px',
                                    width: '100%',
                                }}
                            >
                                <a
                                    style={{
                                        alignItems: 'center',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        padding: '8px',
                                        width: '30%',
                                    }}
                                >
                                    <div style={{ marginRight: '8px' }}>&lt;</div>
                                    <Rectangle />
                                </a>
                                <a
                                    style={{
                                        alignItems: 'center',
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        padding: '8px',
                                        width: '30%',
                                    }}
                                >
                                    <Rectangle />
                                    <div style={{ marginLeft: '8px' }}>&gt;</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;

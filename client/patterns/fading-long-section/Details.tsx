/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Pattern from '../../constants/Pattern';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.FadingLongSection}>
            <Helmet>
                <meta name="description" content="Fading long section to indicate there is more content" />
                <meta name="keywords" content="css fading overflow, css linear gradient" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    Fading a long section to indicate there is more content.
                </div>
                <BrowserFrame
html={`
<div class="container"
    <!-- Main content -->
    <div class="container__content">
        ...
    </div>

    <!-- The faded element -->
    <div class="container__fading"></div>
</div>
`}
css={`
.container {
    /* Used to position the faded element */
    position: relative;
}

.container__content {
    /* Height */
    height: 200px;

    /* Scrollable */
    overflow-y: scroll;
}

.container__fading {
    /* Displayed at the bottom */
    bottom: 0;
    left: 0;
    position: absolute;

    /* Size */
    height: 30px;
    width: 100%;

    /* Gradient background */
    background: linear-gradient(rgba(255, 255, 255, 0.01), #fff);
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
                        <div style={{ position: 'relative', width: '200px' }}>
                            <div
                                style={{
                                    height: '200px',
                                    overflowY: 'scroll',
                                }}
                            >
                                <Block numberOfBlocks={50} />
                            </div>

                            <div
                                style={{
                                    background: 'linear-gradient(rgba(255, 255, 255, 0.01), #fff)',
                                    bottom: 0,
                                    height: '30px',
                                    left: 0,
                                    position: 'absolute',
                                    width: '100%',
                                }}
                            />
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;

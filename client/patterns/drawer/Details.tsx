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
        <DetailsLayout pattern={Pattern.Drawer}>
            <Helmet>
                <meta name="description" content="Create a drawer navigation with CSS" />
                <meta name="keywords" content="css drawer, css off-canvas" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    This pattern is also known as off-canvas.
                </div>
                <BrowserFrame
html={`
<div class="container">
    <!-- Backdrop -->
    <div class="container__overlay"></div>

    <!-- Sidebar -->
    <div class="container__sidebar">
        ...
    </div>
</div>
`}
css={`
.container {
    /* Container takes full size */
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;

    z-index: 9999;
}

.container__overlay {
    /* Take full size */
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;

    /* User still can see the content of main page */
    background-color: rgba(0, 0, 0, 0.5);

    z-index: -1;
}

.container__sidebar {
    /* Take full height */
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 200px;

    /* Background */
    background-color: #fff;
}
`}
                >
                    <div
                        style={{
                            height: '100%',
                            position: 'relative',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                height: '100%',
                                left: 0,
                                position: 'absolute',
                                top: 0,
                                width: '100%',
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: '#fff',
                                height: '100%',
                                left: 0,
                                padding: '16px',
                                position: 'absolute',
                                top: 0,
                                width: '250px',
                            }}
                        >
                            <Block numberOfBlocks={20} />
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;

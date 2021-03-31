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
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout pattern={Pattern.HolyGrail}>
            <Helmet>
                <meta name="description" content="Create a holy grail layout with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css holy grail layout, css layout" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<div class="container">
    <header>
        ...
    </header>
    <main class="main">
        <!-- Left sidebar -->
        <aside class="left">...</aside>

        <!-- Main content -->
        <article class="middle">...</article>

        <!-- Right sidebar -->
        <nav class="right">...</nav>
    </main>
    <footer>
        ...
    </footer>
</div>
`}
css={`
.container {
    display: flex;
    flex-direction: column;
}
.main {
    /* Take the remaining height */
    flex-grow: 1;

    /* Layout the left sidebar, main content and right sidebar */
    display: flex;
    flex-direction: row;
}
.left {
    width: 25%;
}
.middle {
    /* Take the remaining width */
    flex-grow: 1;
}
.right {
    width: 20%;
}
`}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <div
                            style={{
                                borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                                flexShrink: 0,
                                padding: '16px',
                            }}
                        >
                            <div style={{ width: '50%' }}><Rectangle /></div>
                        </div>
                        <div style={{ display: 'flex', flexGrow: 1 }}>
                            <div
                                style={{
                                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                                    padding: '16px',
                                    width: '25%',
                                }}
                            >
                                <Block numberOfBlocks={10} />
                            </div>
                            <div style={{ flex: 1, padding: '16px' }}>
                                <Block numberOfBlocks={20} />
                            </div>
                            <div
                                style={{
                                    borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
                                    padding: '16px',
                                    width: '20%',
                                }}
                            >
                                <Block numberOfBlocks={5} />
                            </div>
                        </div>
                        <div
                            style={{
                                borderTop: '1px solid rgba(0, 0, 0, 0.3)',
                                flexShrink: 0,
                                padding: '16px',
                            }}
                        >
                            <div style={{ width: '40%' }}><Rectangle /></div>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </DetailsLayout>
    );
};

export default Details;

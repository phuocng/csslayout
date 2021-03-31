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
        <DetailsLayout pattern={Pattern.StickyFooter}>
            <Helmet>
                <meta name="description" content="Create a sticky footer with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css layout, css sticky, css sticky footer" />
            </Helmet>
            <div className='p-8 pb-20'>
                <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                    The footer always sticks to the bottom if the main content is short.
                </div>
                <BrowserFrame
                    content={(
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
                            <div style={{ flexGrow: 1, padding: '16px' }}>
                                <Block numberOfBlocks={20} />
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
                    )}
                    source={`
<div style="
    display: flex;
    flex-direction: column;
    height: 100%;
">
    <header style="flex-shrink: 0;">
        ...
    </header>
    <main style="flex-grow: 1;">
        ...
    </main>
    <footer style="flex-shrink: 0;">
        ...
    </footer>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;

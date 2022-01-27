import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.StickyFooter}>
            <Head>
                <meta name="description" content="Create a sticky footer with CSS flexbox" />
                <meta name="og:description" content="Create a sticky footer with CSS flexbox" />
                <meta name="twitter:description" content="Create a sticky footer with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css layout, css sticky, css sticky footer" />
            </Head>
            <div style={{ lineHeight: 1.5, marginBottom: '16px' }}>
                The footer always sticks to the bottom if the main content is short.
            </div>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <header class="${prefix}${container}__header">
        ...
    </header>
    <main class="${prefix}${container}__main">
        ...
    </main>
    <footer class="${prefix}${container}__footer">
        ...
    </footer>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.${prefix}${container}__header,
.${prefix}${container}__footer {
    flex-shrink: 0;
}

.${prefix}${container}__main {
    flex-grow: 1;
}
`
                }
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
                        <div style={{ width: '50%' }}>
                            <Rectangle />
                        </div>
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
                        <div style={{ width: '40%' }}>
                            <Rectangle />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

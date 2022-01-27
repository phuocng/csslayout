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
        <PatternLayout pattern={Pattern.HolyGrail}>
            <Head>
                <meta name="description" content="Create a holy grail layout with CSS flexbox" />
                <meta name="og:description" content="Create a holy grail layout with CSS flexbox" />
                <meta name="twitter:description" content="Create a holy grail layout with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css holy grail layout, css layout" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <header>
        ...
    </header>
    <main class="${prefix}${container}__main">
        <!-- Left sidebar -->
        <aside class="${prefix}${container}__left">...</aside>

        <!-- Main content -->
        <article class="${prefix}${container}__middle">...</article>

        <!-- Right sidebar -->
        <nav class="${prefix}${container}__right">...</nav>
    </main>
    <footer>
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
}

.${prefix}${container}__main {
    /* Take the remaining height */
    flex-grow: 1;

    /* Layout the left sidebar, main content and right sidebar */
    display: flex;
    flex-direction: row;
}

.${prefix}${container}__left {
    width: 25%;
}

.${prefix}${container}__middle {
    /* Take the remaining width */
    flex-grow: 1;
}

.${prefix}${container}__right {
    width: 20%;
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

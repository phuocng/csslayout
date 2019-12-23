import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Holy grail">
            <Helmet>
                <meta name="description" content="Create a holy grail layout with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css holy grail layout, css layout" />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
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
                    )}
                    source={`
<div style="
    display: flex;
    flex-direction: column;
">
    <header>
        ...
    </header>
    <main style="
        /* Take the remaining height */
        flex-grow: 1;

        /* Layout the left sidebar, main content and right sidebar */
        display: flex;
        flex-direction: row;
    ">
        <!-- Left sidebar -->
        <aside style="
            width: 25%;
        ">...</aside>

        <!-- Main content -->
        <article style="
            /* Take the remaining width */
            flex-grow: 1;
        ">
            ...
        </article>

        <!-- Right sidebar -->
        <nav style="
            width: 20%;
        ">...</nav>
    </main>
    <footer>
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

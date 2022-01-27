import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import Square from '../../placeholders/Square';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.MediaObject}>
            <Head>
                <meta name="description" content="Create a media object with CSS flexbox" />
                <meta name="og:description" content="Create a media object with CSS flexbox" />
                <meta name="twitter:description" content="Create a media object with CSS flexbox" />
                <meta name="keywords" content="css flexbox, media object" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Media object -->
    <div class="${prefix}${container}__media">
        ...
    </div>

    <!-- Main content -->
    <div class="${prefix}${container}__content">
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Align sub-items to top */
    align-items: start;
    display: flex;
}

.${prefix}${container}__media {
    margin-right: 16px;

    /* Set the width for the media object */
    width: 200px;
}

.${prefix}${container}__content {
    /* Take the remaining width */
    flex: 1;
}
`
                }
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
                        <div style={{ marginBottom: '32px' }}>
                            <Block numberOfBlocks={20} />
                        </div>
                        <div style={{ marginBottom: '32px' }}>
                            <Block numberOfBlocks={15} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

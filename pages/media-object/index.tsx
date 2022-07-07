import * as React from 'react';
import Head from 'next/head';

import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';
import Square from '../../placeholders/Square';
import { removeIndent } from '../../utils/removeIndent';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.MediaObject}>
            <Head>
                <meta name="description" content="Create a media object with CSS flexbox" />
                <meta name="og:description" content="Create a media object with CSS flexbox" />
                <meta name="twitter:description" content="Create a media object with CSS flexbox" />
                <meta name="keywords" content="css flexbox, media object" />
            </Head>
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
                css={removeIndent`
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

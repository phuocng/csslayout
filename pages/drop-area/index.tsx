import * as React from 'react';
import Head from 'next/head';

import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <PatternLayout pattern={Pattern.DropArea}>
            <Head>
                <meta name="description" content="Create a dropping area with CSS flexbox" />
                <meta name="og:description" content="Create a dropping area with CSS flexbox" />
                <meta name="twitter:description" content="Create a dropping area with CSS flexbox" />
                <meta name="keywords" content="css dropping area, css flexbox" />
            </Head>
            <BrowserFrame
                html={`
<div class="container">
    ...
</div>
`}
                css={`
.container {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Border */
    border: 4px dashed rgba(0, 0, 0, 0.3),
    border-radius: 4px;
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
                    <div
                        style={{
                            alignItems: 'center',
                            border: '4px dashed rgba(0, 0, 0, 0.3)',
                            borderRadius: '4px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '80%',
                            justifyContent: 'center',
                            width: '80%',
                        }}
                    >
                        <div style={{ width: '40%' }}>
                            <Block justify="center" numberOfBlocks={10} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

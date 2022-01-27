import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import Block from '../../placeholders/Block';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.SplitScreen}>
            <Head>
                <meta name="description" content="Create a split screen with CSS flexbox" />
                <meta name="og:description" content="Create a split screen with CSS flexbox" />
                <meta name="twitter:description" content="Create a split screen with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css layout, css split screen" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Left content -->
    <div class="${prefix}${container}__half">
        ...
    </div>

    <!-- Right content -->
    <div class="${prefix}${container}__half">
        ...
    </div>
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    display: flex;
}

.${prefix}${container}__half {
    flex: 1;
}
`
                }
            >
                <div style={{ display: 'flex', height: '100%' }}>
                    <div
                        style={{
                            alignItems: 'center',
                            borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ marginBottom: '16px' }}>
                            <Circle size={128} />
                        </div>
                        <div style={{ width: '60%' }}>
                            <Rectangle />
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ padding: '32px' }}>
                            <div style={{ marginBottom: '32px' }}>
                                <Rectangle />
                            </div>
                            <div style={{ marginBottom: '32px' }}>
                                <Block numberOfBlocks={15} />
                            </div>
                            <Block numberOfBlocks={10} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'breadcrumb';
    return (
        <PatternLayout pattern={Pattern.Breadcrumb}>
            <Head>
                <meta name="description" content="Create a breadcrumb with CSS flexbox" />
                <meta name="og:description" content="Create a breadcrumb with CSS flexbox" />
                <meta name="twitter:description" content="Create a breadcrumb with CSS flexbox" />
                <meta name="keywords" content="css breadcrumb, css flexbox" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    <!-- Breadcrumb item -->
    <a>...</a>

    <!-- Separator -->
    <div class="${prefix}${container}__separator">/</div>

    <!-- Repeated items and separators -->
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Content is centered vertically */
    align-items: center;
    display: flex;
}

.${prefix}${container}__separator {
    margin: 0 8px;
}
`
                }
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
                    <div style={{ alignItems: 'center', display: 'flex' }}>
                        <div style={{ width: '128px' }}>
                            <Rectangle height={16} />
                        </div>
                        <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '36px', margin: '0 4px' }}>/</div>
                        <div style={{ width: '32px' }}>
                            <Rectangle height={16} />
                        </div>
                        <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '36px', margin: '0 4px' }}>/</div>
                        <div style={{ width: '64px' }}>
                            <Rectangle height={16} />
                        </div>
                        <div style={{ color: 'rgba(0, 0, 0, 0.3)', fontSize: '36px', margin: '0 4px' }}>/</div>
                        <div style={{ width: '32px' }}>
                            <Rectangle height={16} />
                        </div>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

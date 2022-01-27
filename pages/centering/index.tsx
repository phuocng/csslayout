import * as React from 'react';
import Head from 'next/head';

import { PrefixContext } from '../../context/prefixContext';
import { Pattern } from '../../constants/Pattern';
import { PatternLayout } from '../../layouts/PatternLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';
import Rectangle from '../../placeholders/Rectangle';

const Details: React.FC<{}> = () => {
    let { prefix, container } = React.useContext(PrefixContext);
    container = container || 'container';
    return (
        <PatternLayout pattern={Pattern.Centering}>
            <Head>
                <meta name="description" content="Center an element with CSS flexbox" />
                <meta name="og:description" content="Center an element with CSS flexbox" />
                <meta name="twitter:description" content="Center an element with CSS flexbox" />
                <meta name="keywords" content="css centering, css flexbox" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<div class="${prefix}${container}">
    ...
</div>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    align-items: center;
    display: flex;
    justify-content: center;
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
                    <Circle size={64} />
                    <div style={{ marginTop: '16px', width: '40%' }}>
                        <Rectangle />
                    </div>
                    <div style={{ marginTop: '8px', width: '30%' }}>
                        <Rectangle />
                    </div>
                    <div style={{ marginTop: '8px', width: '20%' }}>
                        <Rectangle />
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;

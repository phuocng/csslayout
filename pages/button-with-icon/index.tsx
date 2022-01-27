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
    container = container || 'button';
    return (
        <PatternLayout pattern={Pattern.ButtonWithIcon}>
            <Head>
                <meta name="description" content="Create an icon button with CSS flexbox" />
                <meta name="og:description" content="Create an icon button with CSS flexbox" />
                <meta name="twitter:description" content="Create an icon button with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css icon button" />
            </Head>
            <BrowserFrame
                html={
                    '' +
                    `
<button class="${prefix}${container}">
    <!-- Icon -->
    ...

    <!-- Label -->
    ...
</button>
`
                }
                css={
                    '' +
                    `
.${prefix}${container} {
    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: row;
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
                    <div style={{ width: '256px' }}>
                        <button
                            style={{
                                alignItems: 'center',
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                borderRadius: '8px',
                                display: 'flex',
                                height: '64px',
                                padding: '8px',
                                width: '100%',
                            }}
                        >
                            <div style={{ marginRight: '8px' }}>
                                <Circle size={32} />
                            </div>
                            <Rectangle />
                        </button>
                    </div>
                </div>
            </BrowserFrame>
        </PatternLayout>
    );
};

export default Details;
